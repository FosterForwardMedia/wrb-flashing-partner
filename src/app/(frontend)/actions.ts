'use server'

import { getPayloadClient } from '@/lib/payload'

export type FormState = { success: boolean; message: string; company?: string; errors?: Record<string, string> }

const text = (form: FormData, key: string, max = 2000) => String(form.get(key) ?? '').trim().slice(0, max)
const required = (value: string, label: string, errors: Record<string, string>) => {
  if (!value) errors[label] = `${label} is required.`
}
const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const validZip = (value: string) => /^\d{5}(?:-\d{4})?$/.test(value)

async function uploadFile(file: File, purpose: 'plans' | 'insurance' | 'project-photo', context: 'lead' | 'application') {
  if (!file.size) return undefined
  if (file.size > 10_000_000) throw new Error(`${file.name} is larger than 10 MB.`)
  if (!['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error(`${file.name} must be a PDF, JPG, PNG, or WebP file.`)
  const payload = await getPayloadClient()
  const doc = await payload.create({
    collection: 'submission-files',
    overrideAccess: false,
    context: { wrbSubmission: context },
    data: { purpose },
    file: { data: Buffer.from(await file.arrayBuffer()), mimetype: file.type, name: file.name, size: file.size },
  })
  return doc.id
}

export async function submitQuote(_: FormState, form: FormData): Promise<FormState> {
  const errors: Record<string, string> = {}
  const data = {
    name: text(form, 'name', 120),
    company: text(form, 'company', 160),
    role: text(form, 'role', 50),
    email: text(form, 'email', 180).toLowerCase(),
    phone: text(form, 'phone', 40),
    projectZip: text(form, 'projectZip', 10),
    projectType: text(form, 'projectType', 80),
    squareFootage: Number(text(form, 'squareFootage', 12)) || undefined,
    targetStartDate: text(form, 'targetStartDate', 20) || undefined,
    message: text(form, 'message', 3000),
    applicator: text(form, 'applicatorId', 100),
  }
  for (const [value, label] of [[data.name, 'name'], [data.company, 'company'], [data.role, 'role'], [data.email, 'email'], [data.phone, 'phone'], [data.projectZip, 'project ZIP'], [data.projectType, 'project type'], [data.message, 'message']] as const) required(value, label, errors)
  if (data.email && !validEmail(data.email)) errors.email = 'Enter a valid email.'
  if (data.projectZip && !validZip(data.projectZip)) errors['project ZIP'] = 'Enter a valid ZIP code.'
  if (Object.keys(errors).length) return { success: false, message: 'Please check the highlighted fields.', errors }

  try {
    const payload = await getPayloadClient()
    const selected = await payload.findByID({ collection: 'applicators', id: data.applicator, overrideAccess: false })
    const planFile = form.get('plans')
    const plans = planFile instanceof File ? await uploadFile(planFile, 'plans', 'lead') : undefined
    await payload.create({
      collection: 'leads',
      overrideAccess: false,
      context: { wrbSubmission: 'lead' },
      data: { ...data, role: data.role as typeof data.role & ('GC'), projectType: data.projectType as typeof data.projectType & ('Commercial'), plans },
    })
    return { success: true, message: `Your request was sent to ${selected.companyName}. Expect a response within 1 business day.`, company: selected.companyName }
  } catch {
    return { success: false, message: 'We could not send your request. Please review your details and try again.' }
  }
}

export async function submitApplication(_: FormState, form: FormData): Promise<FormState> {
  const errors: Record<string, string> = {}
  const fields = ['companyName', 'contactName', 'email', 'phone', 'address', 'city', 'state', 'zip', 'serviceRadius', 'crewSize'] as const
  const values = Object.fromEntries(fields.map((key) => [key, text(form, key, 200)])) as Record<(typeof fields)[number], string>
  fields.forEach((key) => required(values[key], key, errors))
  if (values.email && !validEmail(values.email)) errors.email = 'Enter a valid email.'
  if (values.zip && !validZip(values.zip)) errors.zip = 'Enter a valid ZIP code.'
  if (form.get('installationAgreement') !== 'on') errors.installationAgreement = 'Agreement is required.'
  const projectTypes = form.getAll('projectTypes').map(String).filter(Boolean)
  if (!projectTypes.length) errors.projectTypes = 'Choose at least one project type.'
  if (Object.keys(errors).length) return { success: false, message: 'Please complete all required fields.', errors }

  try {
    const insurance = form.get('insurance')
    const insuranceDocument = insurance instanceof File ? await uploadFile(insurance, 'insurance', 'application') : undefined
    const photoFiles = form.getAll('projectPhotos').filter((entry): entry is File => entry instanceof File && entry.size > 0).slice(0, 6)
    const projectPhotos = (await Promise.all(photoFiles.map((file) => uploadFile(file, 'project-photo', 'application')))).filter(Boolean) as string[]
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'applications',
      overrideAccess: false,
      context: { wrbSubmission: 'application' },
      data: {
        ...values,
        state: values.state.toUpperCase(),
        email: values.email.toLowerCase(),
        serviceRadius: Number(values.serviceRadius),
        crewSize: Number(values.crewSize),
        projectTypes: projectTypes as ('Commercial')[],
        sprayEquipment: form.get('sprayEquipment') === 'on',
        sprayEquipmentDetails: text(form, 'sprayEquipmentDetails', 300),
        licenseNumber: text(form, 'licenseNumber', 100),
        insuranceDocument,
        projectPhotos,
        installationAgreement: true,
      },
    })
    return { success: true, message: "Thanks — we'll review your application within 2 business days." }
  } catch {
    return { success: false, message: 'We could not submit your application. Please check your files and try again.' }
  }
}
