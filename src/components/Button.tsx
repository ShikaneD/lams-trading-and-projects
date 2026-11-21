import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'gold' | 'dark' | 'outline' | 'outlineLight'
interface Props { children: ReactNode; variant?: Variant; to?: string; href?: string; type?: 'button' | 'submit'; disabled?: boolean; onClick?: () => void; className?: string; external?: boolean }

const styles: Record<Variant, string> = {
  gold: 'bg-gradient-to-b from-gold-light to-gold text-ink hover:from-gold hover:to-gold-dark hover:text-white',
  dark: 'bg-ink text-white hover:bg-gold hover:text-ink',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
  outlineLight: 'border border-white/60 text-white hover:border-gold hover:text-gold',
}

export default function Button({ children, variant = 'gold', to, href, type = 'button', disabled, onClick, className = '', external }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-60 ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  return <button type={type} disabled={disabled} onClick={onClick} className={cls}>{children}</button>
}
