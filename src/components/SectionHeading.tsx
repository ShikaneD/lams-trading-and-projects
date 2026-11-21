interface Props { title: string; intro?: string; light?: boolean; center?: boolean }

export default function SectionHeading({ title, intro, light, center }: Props) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className={`text-4xl sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <div className={`mt-5 h-0.5 w-16 bg-gold ${center ? 'mx-auto' : ''}`} />
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-stone-light' : 'text-stone'}`}>{intro}</p>}
    </div>
  )
}
