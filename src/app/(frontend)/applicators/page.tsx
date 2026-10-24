import { Suspense } from 'react'
import { getApplicators } from '@/lib/applicators'
import { ApplicatorSearch } from '@/components/ApplicatorSearch'

export default async function ApplicatorsPage() {
  const applicators = await getApplicators()
  return <main className="min-h-screen bg-slate-50"><Suspense fallback={<div className="mx-auto max-w-7xl p-8 text-sm text-slate-500">Loading directory…</div>}><ApplicatorSearch applicators={applicators} /></Suspense></main>
}
