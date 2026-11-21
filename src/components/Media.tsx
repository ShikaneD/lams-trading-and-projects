import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Brush, Building2, HardHat, Sparkles } from 'lucide-react'

interface Props { src?: string; alt: string; label?: string; tone?: 'dark' | 'light'; eager?: boolean; className?: string }

/** Shows the photo if the file exists in /public/images, otherwise a clearly-marked placeholder. */
export default function Media({ src, alt, label, tone = 'dark', eager, className = '' }: Props) {
  const [failed, setFailed] = useState(!src)
  const reduceMotion = useReducedMotion()
  const imageSrc = src?.startsWith('/')
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src

  if (!failed && imageSrc) {
    return (
      <motion.img
        src={imageSrc}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        whileHover={reduceMotion ? undefined : { scale: 1.035 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.55, ease: 'easeOut' } }}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  const text = `${alt} ${label ?? ''}`.toLowerCase()
  const PlaceholderIcon = text.includes('clean') || text.includes('office')
    ? (text.includes('deep') || text.includes('after') ? Sparkles : Brush)
    : text.includes('building') || text.includes('project') || text.includes('renovation')
      ? Building2
      : HardHat

  return (
    <motion.div
      role="img"
      aria-label={`Placeholder image: ${alt}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`placeholder-pattern animated-placeholder ${tone === 'light' ? 'light text-gold-dark' : 'text-gold/70'} flex h-full w-full flex-col items-center justify-center gap-3 ${className}`}>
      <motion.div
        aria-hidden
        className="placeholder-icon"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}>
        <PlaceholderIcon size={44} strokeWidth={1.5} />
      </motion.div>
      <span className="max-w-[85%] text-center text-xs font-semibold tracking-wide">{label ?? 'Animated visual'}</span>
    </motion.div>
  )
}
