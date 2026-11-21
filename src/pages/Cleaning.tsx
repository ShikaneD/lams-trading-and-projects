import { cleaningServices } from '../data/company'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'

export default function Cleaning() {
  return (
    <>
      <PageHeader title="Cleaning services" metaTitle="Cleaning Services" intro="Proposed service categories for homes, offices and commercial properties. Contact us to discuss what you need." />
      <section className="section">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cleaningServices.map((s) => <ServiceCard key={s.title} service={s} tone="light" />)}
        </div>
      </section>
    </>
  )
}
