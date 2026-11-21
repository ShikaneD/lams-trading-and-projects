import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../data/company'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact us" metaTitle="Contact Us" intro="Call, message us on WhatsApp, or send your details and we will respond about your project." />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div><h2 className="text-3xl">{company.name}</h2></div>
            <ul className="space-y-5">
              <li className="flex gap-4"><Phone className="mt-1 shrink-0 text-gold-dark" aria-hidden /><div><p className="font-semibold">Phone</p><a className="text-stone hover:text-gold-dark" href={company.phoneHref}>{company.phoneDisplay}</a></div></li>
              <li className="flex gap-4"><Clock className="mt-1 shrink-0 text-gold-dark" aria-hidden /><div><p className="font-semibold">Business hours</p><p className="text-stone">{company.hours}</p></div></li>
              <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-gold-dark" aria-hidden /><div><p className="font-semibold">Address</p><p className="text-stone">{company.address || 'To be added.'}</p></div></li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href={company.phoneHref} variant="dark"><Phone size={16} aria-hidden />Call now</Button>
              <Button href={company.whatsapp} external><MessageCircle size={16} aria-hidden />WhatsApp</Button>
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-ink/15">
              {company.mapEmbedUrl
                ? <iframe title="Map showing LAMS location" src={company.mapEmbedUrl} loading="lazy" className="h-full w-full border-0" />
                : <div className="placeholder-pattern light flex h-full items-center justify-center p-6 text-center text-sm font-medium text-gold-dark">Google Maps placeholder: add the business address and map embed URL in src/data/company.ts</div>}
            </div>
          </div>
          <div className="bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-10">
            <h2 className="mb-6 text-3xl">Request a quote</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
