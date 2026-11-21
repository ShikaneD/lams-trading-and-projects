import { company, values } from '../data/company'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'

// Editable placeholder copy: replace with the company's own wording.
const pillars = [
  { title: 'Our commitment to quality', text: 'We take care over materials, methods and finishing so that the work performs and looks right.' },
  { title: 'Professionalism and reliability', text: 'We communicate clearly, arrive prepared and respect your property and your time.' },
  { title: 'Customer satisfaction', text: 'A job is only done when you are happy with it.' },
  { title: 'Our approach to service delivery', text: 'We listen to your brief, agree the scope and cost, deliver the work, and check it with you at handover.' },
]

export default function About() {
  return (
    <>
      <PageHeader title="About Us" intro="A South African company providing construction and cleaning services." />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading title="Company overview" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>{company.name} provides construction and professional cleaning services. We aim to give clients one dependable partner for building, maintaining and cleaning their properties.</p>
              <p className="border-l-2 border-gold pl-4 text-base">Editable: add your company story, team and service areas here when ready.</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="border-t border-gold pt-4">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-2 text-stone">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-ink">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div><h2 className="text-4xl text-gold">Our mission</h2><p className="mt-4 text-lg text-stone-light">To deliver reliable construction and cleaning services that meet our clients’ needs with quality, honesty and care.</p></div>
          <div><h2 className="text-4xl text-gold">Our vision</h2><p className="mt-4 text-lg text-stone-light">To be a trusted name in construction and property services across South Africa.</p></div>
        </div>
        <div className="container-x mt-16">
          <h2 className="mb-8 text-4xl text-white">Our values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border border-ink-line p-6"><h3 className="text-2xl text-gold">{v.title}</h3><p className="mt-2 text-stone-light">{v.text}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
