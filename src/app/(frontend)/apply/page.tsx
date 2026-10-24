import { ApplicationForm } from '@/components/ApplicationForm'
import { Icon } from '@/components/Icon'

export default function ApplyPage() {
  return <main className="bg-slate-50">
    <section className="bg-slate-950 px-5 py-16 text-white lg:px-8"><div className="mx-auto max-w-5xl"><span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-extrabold">Free during launch</span><h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">Get specified projects in front of your painting crews.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Join the directory professionals use to find painters equipped to apply AU-1 LAB on commercial and new-build envelope scopes.</p></div></section>
    <section className="mx-auto grid max-w-5xl gap-10 px-5 py-14 lg:grid-cols-[280px_1fr] lg:px-8">
      <aside><h2 className="text-lg font-extrabold">What you&apos;ll need</h2><div className="mt-5 grid gap-4">{['Company and service area','Crew and equipment details','Insurance documentation','Representative project photos'].map(item => <div key={item} className="flex gap-3 text-sm text-slate-600"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700"><Icon name="check" className="size-3.5" /></span>{item}</div>)}</div><div className="mt-8 rounded-xl border border-slate-200 bg-white p-5"><p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">Review time</p><p className="mt-2 text-sm leading-6 text-slate-600">Applications are typically reviewed within 2 business days.</p></div></aside>
      <ApplicationForm />
    </section>
  </main>
}
