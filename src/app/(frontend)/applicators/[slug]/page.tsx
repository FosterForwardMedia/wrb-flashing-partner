import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Media } from '@/payload-types'
import { getApplicatorBySlug, getApplicators } from '@/lib/applicators'
import { ApprovedBadge } from '@/components/ApprovedBadge'
import { Icon } from '@/components/Icon'
import { QuoteForm } from '@/components/QuoteForm'

export async function generateStaticParams() {
  const applicators = await getApplicators()
  return applicators.map(({ slug }) => ({ slug }))
}

export default async function ApplicatorProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const applicator = await getApplicatorBySlug(slug)
  if (!applicator) notFound()
  const photos = (applicator.photos ?? []).filter((photo): photo is Media => typeof photo === 'object' && Boolean(photo.url))
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="grid size-20 shrink-0 place-items-center rounded-2xl bg-slate-950 text-2xl font-black text-white">{applicator.companyName.split(' ').map(x => x[0]).slice(0,2).join('')}</div>
            <div className="flex-1"><ApprovedBadge /><h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{applicator.companyName}</h1><p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500"><Icon name="location" className="size-4" />{applicator.city}, {applicator.state} · {applicator.serviceRadius}-mile service radius</p></div>
            <a href={`tel:${applicator.phone}`} className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-extrabold"><Icon name="phone" />{applicator.phone}</a>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
        <div className="grid gap-7">
          <section className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-extrabold">About the company</h2><p className="mt-4 leading-7 text-slate-600">{applicator.description}</p><dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">{[['Years in business',applicator.yearsInBusiness],['Crew size',applicator.crewSize],['Service radius',`${applicator.serviceRadius} mi`],['Spray equipped',applicator.sprayEquipment ? 'Yes' : 'No']].map(([label,value]) => <div key={label} className="rounded-xl bg-slate-50 p-4"><dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</dt><dd className="mt-1 text-lg font-extrabold">{value}</dd></div>)}</dl></section>
          <section className="grid gap-7 md:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-lg font-extrabold">Capabilities</h2><div className="mt-5 grid gap-3 text-sm">{applicator.projectTypes.map(type => <div key={type} className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" />{type}</div>)}</div>{applicator.sprayEquipmentDetails && <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600"><strong className="text-slate-900">Equipment:</strong> {applicator.sprayEquipmentDetails}</p>}</div><div className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-lg font-extrabold">Licensing & insurance</h2><div className="mt-5 grid gap-4">{[['License',applicator.licenseNumber || 'On file',true],['Insurance','Current',applicator.insured],['Bonding','Available',applicator.bonded]].map(([label,value,ok]) => <div key={label as string} className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm"><div><p className="font-bold">{label as string}</p><p className="mt-0.5 text-xs text-slate-500">{value as string}</p></div>{ok && <span className="flex items-center gap-1 text-xs font-bold text-emerald-700"><Icon name="check" className="size-4" />Verified</span>}</div>)}</div></div></section>
          <section className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-extrabold">Service area</h2><p className="mt-2 text-sm text-slate-600">{applicator.citiesServed}</p><div className="relative mt-6 h-64 overflow-hidden rounded-xl bg-[#eaf0ed]"><div className="absolute inset-0 opacity-40 [background-image:linear-gradient(30deg,#cbd5e1_1px,transparent_1px),linear-gradient(120deg,#cbd5e1_1px,transparent_1px)] [background-size:50px_50px]" /><div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-8 border-blue-200/70 bg-blue-600 text-white shadow-xl"><Icon name="location" /></div><span className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-2 text-xs font-bold shadow">{applicator.serviceRadius}-mile radius from {applicator.city}</span></div></section>
          {photos.length > 0 && <section><h2 className="text-xl font-extrabold">Recent project experience</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{photos.map(photo => <div key={photo.id} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"><Image src={photo.url!} alt={photo.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 40vw" /></div>)}</div></section>}
        </div>
        <aside id="quote" className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:sticky lg:top-24"><p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">Start a conversation</p><h2 className="mt-2 text-xl font-extrabold">Request a quote</h2><p className="mb-6 mt-2 text-xs leading-5 text-slate-500">Send project details directly to this applicator.</p><QuoteForm applicatorId={applicator.id} companyName={applicator.companyName} compact /></aside>
      </div>
    </main>
  )
}
