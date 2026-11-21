import { constructionServices } from '../data/company'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'

export default function Construction() {
  return (
    <>
      <PageHeader title="Construction services" metaTitle="Construction Services" intro="Proposed service categories for building, renovation and maintenance work. Contact us to discuss your project." />
      <section className="section">
        <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {constructionServices.map((s) => <ServiceCard key={s.title} service={s} tone="dark" />)}
        </div>
      </section>
    </>
  )
}
