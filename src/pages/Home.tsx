import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { company, constructionServices, cleaningServices, projects, whyChoose } from '../data/company'
import { usePageMeta } from '../hooks/usePageMeta'
import Button from '../components/Button'
import Media from '../components/Media'
import SectionHeading from '../components/SectionHeading'

const panels = [
  { title: 'Construction', to: '/construction', image: '/images/construction.jpg', tone: 'dark' as const, items: constructionServices },
  { title: 'Cleaning', to: '/cleaning', image: '/images/cleaning.jpg', tone: 'light' as const, items: cleaningServices },
]

export default function Home() {
  usePageMeta('Construction & Cleaning Services in South Africa', 'LAMS Trading and Projects delivers reliable construction and professional cleaning services in South Africa. Call 060 788 8165.')
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <div className="absolute inset-0 -z-10"><Media src="/images/construction.jpg" alt="Construction site" label="Construction work on site" eager /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="container-x flex min-h-[78vh] items-center py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl border-l-2 border-gold pl-6 sm:pl-10">
            <h1 className="text-5xl text-white sm:text-6xl lg:text-7xl">Building Excellence. Delivering Quality. Creating Lasting Value.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              LAMS Trading and Projects is committed to delivering reliable construction and professional cleaning solutions. We bring dedication, quality and attention to detail to every project.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/construction">Explore Our Services</Button>
              <Button to="/contact" variant="outlineLight">Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <h2 className="text-4xl sm:text-5xl">One team for building work and for keeping it spotless.</h2>
          <div className="space-y-5 text-lg leading-relaxed text-stone">
            <p>{company.name} provides construction and cleaning services to homes and businesses in South Africa.</p>
            <p>Whether you need a renovation, ongoing maintenance, or a property cleaned and ready for use, you deal with one company that takes responsibility for the result.</p>
            <a href={company.phoneHref} className="inline-flex items-center gap-2 font-semibold text-gold-dark hover:text-ink"><Phone size={18} aria-hidden />Call {company.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-bone-dark section">
        <div className="container-x">
          <SectionHeading title="Our core services" intro="Two service lines, one standard of workmanship." />
          <div className="grid gap-8 md:grid-cols-2">
            {panels.map((p) => (
              <Link key={p.title} to={p.to} className="group block overflow-hidden bg-ink text-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105"><Media src={p.image} alt={`${p.title} services`} label={p.image.replace('/images/', '')} tone={p.tone} /></div>
                </div>
                <div className="p-8">
                  <h3 className="text-4xl">{p.title}</h3>
                  <p className="mt-3 text-stone-light">{p.items.slice(0, 4).map((i) => i.title).join(', ')} and more.</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold group-hover:gap-3 transition-all">View {p.title.toLowerCase()} services <ArrowRight size={18} aria-hidden /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section bg-ink">
        <div className="container-x">
          <SectionHeading title="Why choose LAMS?" light />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <div key={w.title} className="border-t border-gold/60 pt-5">
                <h3 className="text-2xl text-gold">{w.title}</h3>
                <p className="mt-2 text-stone-light">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section">
        <div className="container-x">
          <SectionHeading title="Featured projects" intro="Placeholder slots for LAMS project photography. Real project images will be added here." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="aspect-[4/3] overflow-hidden"><Media src={p.image} alt={p.title} label={p.title} /></div>
            ))}
          </div>
          <Button to="/projects" variant="dark" className="mt-10">See all projects</Button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-gold-light to-gold py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl text-4xl text-ink">Have a project in mind? Tell us what you need.</h2>
          <div className="flex flex-wrap gap-4">
            <Button to="/contact" variant="dark">Request a quote</Button>
            <Button href={company.phoneHref} variant="outline">Call {company.phoneDisplay}</Button>
          </div>
        </div>
      </section>
    </>
  )
}
