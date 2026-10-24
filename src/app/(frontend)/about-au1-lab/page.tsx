import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/Icon'

const labSpecs = [
  ['Role', 'Air, water, and liquid-applied flashing barrier'],
  ['Technology', 'High-performance SBR elastomeric membrane'],
  ['Application', 'Spray, roller, or brush'],
  ['Minimum thickness', '30 wet mils'],
  ['Assembly use', 'Field-applied WRB and rough-opening flashing'],
]

const sealantSpecs = [
  ['Role', 'Joint, gap, and penetration preparation'],
  ['Technology', 'Acrylic urethane construction sealant'],
  ['Primary uses', 'Waterproofing and window installation'],
  ['Performance', 'ASTM C-920 Class 35'],
  ['Application', 'Cartridge, sausage, or pail configurations'],
]

const workflow = [
  ['01', 'Prep', 'Start with a clean, dry surface and fill qualifying gaps with AU-1 Construction Sealant.'],
  ['02', 'Apply', 'Apply AU-1 LAB by brush, roller, or standard airless sprayer to the required thickness.'],
  ['03', 'Inspect', 'Check the surface and touch up areas as needed for a smooth, uniform, pinhole-free membrane.'],
  ['04', 'Finish', 'Clean tools with soap and water, then install the specified exterior cladding after cure.'],
]

function ProductCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-700">
      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-accent text-white shadow-sm">
        <Icon name="check" className="size-3.5" />
      </span>
      {children}
    </li>
  )
}

export default function ProductsPage() {
  return (
    <main>
      <section className="border-b-4 border-brand-accent bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-accent">Products used</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Two products. One continuous envelope system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              AU-1 Construction Sealant prepares joints and openings. AU-1 LAB carries the air and water barrier continuously across the wall field and flashing transitions.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl bg-blue-600 shadow-2xl">
            <div className="border-b border-white/20 p-6 md:p-7">
              <div className="flex items-center gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-accent text-lg font-black text-slate-950">1</span><div><p className="text-xs font-bold uppercase tracking-wider text-blue-100">Prepare</p><p className="mt-1 text-lg font-extrabold">Seal joints, gaps, and penetrations</p></div></div>
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-center gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-red text-lg font-black text-white">2</span><div><p className="text-xs font-bold uppercase tracking-wider text-blue-100">Protect</p><p className="mt-1 text-lg font-extrabold">Apply the continuous blue membrane</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">The system components</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Products applicators use on the assembly</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Each product has a distinct role in preparing and protecting the building envelope.</p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <div className="h-2 bg-blue-600" />
              <div className="grid gap-8 p-7 sm:grid-cols-[.8fr_1.2fr] sm:items-center md:p-9">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <Image src="/images/au-1-lab-products.png" alt="AU-1 LAB one-gallon and five-gallon pails" width={390} height={325} unoptimized className="h-auto w-full mix-blend-multiply" />
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-blue-800">Barrier + flashing</span>
                  <h3 className="mt-4 text-3xl font-black tracking-tight">AU-1 LAB</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-blue-600">Liquid-applied air, water, and flashing barrier</p>
                  <ul className="mt-6 grid gap-3">
                    <ProductCheck>Creates a monolithic air and water barrier across the wall field.</ProductCheck>
                    <ProductCheck>Extends through rough openings as liquid-applied flashing.</ProductCheck>
                    <ProductCheck>Applies by spray, roller, or brush.</ProductCheck>
                  </ul>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <div className="h-2 bg-brand-red" />
              <div className="grid gap-8 p-7 sm:grid-cols-[.8fr_1.2fr] sm:items-center md:p-9">
                <div className="rounded-2xl bg-red-50 p-5">
                  <Image src="/images/au-1-sealant-products.png" alt="AU-1 construction sealant pail, sausages, and cartridge" width={385} height={350} unoptimized className="h-auto w-full mix-blend-multiply" />
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-brand-red">Joint preparation</span>
                  <h3 className="mt-4 text-3xl font-black tracking-tight">AU-1</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-brand-red">Commercial construction sealant</p>
                  <ul className="mt-6 grid gap-3">
                    <ProductCheck>Prepares joints, gaps, penetrations, and window openings.</ProductCheck>
                    <ProductCheck>Acrylic urethane technology with a robust UV inhibitor package.</ProductCheck>
                    <ProductCheck>Meets ASTM C-920 Class 35.</ProductCheck>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-accent">System workflow</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Four simple installation stages</h2></div>
            <p className="max-w-md text-sm leading-6 text-blue-100">Always follow the current Tower Sealants technical data, project specification, and substrate requirements.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map(([number,title,copy]) => (
              <article key={number} className="rounded-2xl bg-slate-950 p-6 shadow-xl shadow-slate-950/20">
                <span className="grid size-11 place-items-center rounded-full bg-brand-accent text-sm font-black text-slate-950">{number}</span>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technical" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <p className="inline-flex rounded-full bg-brand-accent px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-950">Technical snapshot</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Know the role of each product</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[['AU-1 LAB',labSpecs,'border-blue-600'],['AU-1 Sealant',sealantSpecs,'border-brand-red']].map(([name,rows,border]) => (
              <div key={name as string} className={`overflow-hidden rounded-2xl border-t-4 bg-slate-50 shadow-lg shadow-slate-900/5 ${border}`}>
                <h3 className="border-b border-slate-200 bg-white px-6 py-5 text-xl font-extrabold">{name as string}</h3>
                <dl>
                  {(rows as string[][]).map(([label,value]) => <div key={label} className="grid gap-1 border-b border-slate-200 px-6 py-4 last:border-0 sm:grid-cols-[150px_1fr]"><dt className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{label}</dt><dd className="text-sm font-semibold text-slate-900">{value}</dd></div>)}
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Technical data sheets','Safety data sheets','Installation guide','Architectural specifications'].map((label) => <Link key={label} href="#" className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm font-extrabold shadow-sm transition hover:border-brand-red hover:text-brand-red">{label}<Icon name="arrow" className="size-4" /></Link>)}
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">This page is a directory reference. Confirm current manufacturer documents and the project specification before installation.</p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold">Frequently asked questions</h2>
          <div className="mt-7 grid gap-4">
            {[
              ['Why are two products used?','AU-1 Construction Sealant prepares joints, gaps, and penetrations before AU-1 LAB creates the continuous field and flashing membrane.'],
              ['How is AU-1 LAB applied?','The flyer identifies brush, roller, or standard airless spray as application options. Broad wall areas are commonly sprayed in a crosshatch pattern.'],
              ['What should installers verify?','Installers should confirm surface preparation, approved substrates, required thickness, cure conditions, and all current Tower Sealants technical documentation.'],
            ].map(([question,answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none text-sm font-extrabold">{question}<span className="float-right text-brand-red transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </main>
  )
}
