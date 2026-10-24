import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/Icon'

const heroImage = '/images/au-1-lab-home.webp'

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image src={heroImage} alt="Applicator spraying blue AU-1 LAB membrane onto a masonry wall" fill priority unoptimized className="object-cover object-[58%_center] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:pb-28 md:pt-44 lg:px-8 lg:pb-32 lg:pt-48">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300"><span className="h-px w-8 bg-brand-accent" />Professional applicator directory</p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Find AU-1 LAB Applicators Near Your Project</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Connect with painting contractors equipped to spray, roll, or brush a continuous air/water barrier and liquid flashing membrane.</p>
          </div>
          <form action="/applicators" className="mt-10 grid max-w-5xl gap-3 rounded-2xl bg-white p-3 shadow-2xl md:grid-cols-[1.2fr_auto_1fr_auto]">
            <label className="relative"><span className="sr-only">City, state, or ZIP code</span><Icon name="search" className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" /><input name="location" required placeholder="City, state, or ZIP code" className="h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 text-sm font-semibold text-slate-900 placeholder:font-normal focus:border-blue-500" /></label>
            <button type="button" className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50"><Icon name="target" />Use my location</button>
            <label><span className="sr-only">Project type</span><select name="projectType" className="h-14 w-full rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 focus:border-blue-500"><option value="">All project types</option><option>Commercial</option><option>Multifamily</option><option>Residential New Build</option><option>Renovation/Retrofit</option><option>Window & Door Openings</option></select></label>
            <button className="h-14 rounded-xl bg-action px-7 text-sm font-extrabold text-action-foreground transition hover:bg-action-hover hover:text-white">Find applicators</button>
          </form>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center"><p className="inline-flex rounded-full bg-brand-accent px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-950 shadow-sm">Built for project teams</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">From location to qualified crew in three steps</h2></div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['01','Search your project location','Enter a city, state, or ZIP and define the scope you need covered.','bg-blue-600','bg-blue-50','text-blue-700'],
              ['02','Compare nearby applicators','Review service area, commercial experience, equipment, and credentials.','bg-brand-accent','bg-amber-100','text-slate-950'],
              ['03','Contact directly','Send project details to one selected contractor or call their estimating team.','bg-brand-red','bg-red-50','text-brand-red'],
            ].map(([n,title,copy,stripe,badge,number]) => <article key={n} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className={`h-1.5 ${stripe}`} /><div className="p-7"><span className={`inline-flex min-w-16 items-center justify-center rounded-xl px-3 py-2 text-2xl font-black ${badge} ${number}`}>{n}</span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="border-t-4 border-brand-accent bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_2fr] lg:items-center lg:px-8">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-accent">Why AU-1 LAB</p><h2 className="mt-3 text-3xl font-extrabold">One blue membrane.<br />More efficient detailing.</h2><Link href="/about-au1-lab" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-action px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-action-hover">View technical overview <Icon name="arrow" /></Link></div>
          <div className="grid gap-2 md:grid-cols-2">
            {[
              'WRB and liquid flashing in one product',
              'No primer required',
              'Spray, roll, or brush',
              'Tested to ABAA and AAMA 714 requirements',
            ].map((item) => <div key={item} className="flex items-center gap-4 rounded-xl bg-blue-700 p-5 shadow-xl shadow-black/25"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-accent text-white shadow-md"><Icon name="check" className="size-4" /></span><span className="text-sm font-bold">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:flex-row md:items-center md:p-12">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">For painting contractors</p><h2 className="mt-3 text-3xl font-extrabold">Apply AU-1 LAB? Get listed free.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Reach GCs, architects, and envelope consultants actively sourcing qualified application crews.</p></div>
          <Link href="/apply" className="shrink-0 rounded-xl bg-action px-6 py-3.5 text-sm font-extrabold text-action-foreground transition hover:bg-action-hover hover:text-white">Apply free during launch</Link>
        </div>
      </section>
    </main>
  )
}
