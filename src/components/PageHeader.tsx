import { usePageMeta } from '../hooks/usePageMeta'

interface Props { title: string; intro: string; metaTitle?: string }

export default function PageHeader({ title, intro, metaTitle }: Props) {
  usePageMeta(metaTitle ?? title, intro)
  return (
    <header className="placeholder-pattern border-b-2 border-gold">
      <div className="container-x py-20 md:py-28">
        <h1 className="text-5xl text-white sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-stone-light">{intro}</p>
      </div>
    </header>
  )
}
