import { useState } from 'react'
import { beforeAfter, projects } from '../data/company'
import PageHeader from '../components/PageHeader'
import Media from '../components/Media'

const filters = ['All', 'Construction', 'Cleaning'] as const

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = projects.filter((p) => filter === 'All' || p.category === filter)
  return (
    <>
      <PageHeader title="Our work" metaTitle="Projects" intro="Our project gallery. The entries below are placeholders until real LAMS project photographs are added." />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f}
                className={`px-5 py-2 text-sm font-semibold transition-colors ${filter === f ? 'bg-ink text-gold' : 'border border-ink/30 hover:border-gold'}`}>{f}</button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <figure key={p.id} className="group relative aspect-[4/3] overflow-hidden">
                <Media src={p.image} alt={p.title} label={p.image.replace('/images/', '')} tone={p.category === 'Cleaning' ? 'light' : 'dark'} />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/95 via-ink/60 to-transparent p-5 text-white opacity-0 transition-opacity duration-300 focus-within:opacity-100 group-hover:opacity-100">
                  <span className="text-sm text-gold">{p.category}</span>
                  <span className="font-display text-2xl">{p.title}</span>
                  <span className="text-sm text-white/80">{p.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <h2 className="mb-8 mt-20 text-4xl">Before and after</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {beforeAfter.map((b, i) => (
              <div key={i}>
                <div className="grid grid-cols-2 gap-2">
                  {[['Before', b.before], ['After', b.after]].map(([label, src]) => (
                    <div key={label} className="relative aspect-[4/3] overflow-hidden">
                      <Media src={src} alt={`${label}: ${b.title}`} label={src.replace('/images/', '')} />
                      <span className="absolute left-0 top-0 bg-ink px-3 py-1 text-xs font-semibold text-gold">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-sm text-stone">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
