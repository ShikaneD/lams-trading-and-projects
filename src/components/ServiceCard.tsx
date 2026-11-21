import type { Service } from '../data/company'
import Media from './Media'
import Button from './Button'

export default function ServiceCard({ service, tone }: { service: Service; tone: 'dark' | 'light' }) {
  const Icon = service.icon
  return (
    <article className="group flex flex-col overflow-hidden bg-white shadow-sm ring-1 ring-ink/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <Media src={service.image} alt={service.title} label={service.image.replace('/images/', '')} tone={tone} />
        </div>
        <span className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center bg-ink text-gold">
          <Icon size={22} aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{service.title}</h3>
        <p className="mt-2 flex-1 text-stone">{service.description}</p>
        <Button to={`/contact?service=${encodeURIComponent(service.title)}`} variant="outline" className="mt-5 self-start">Request a quote</Button>
      </div>
    </article>
  )
}
