import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { company, navLinks } from '../data/company'
import Button from './Button'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  const link = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 py-1 text-sm font-medium transition-colors ${isActive ? 'border-gold text-gold' : 'border-transparent text-white/85 hover:text-gold'}`

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ink/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label={`${company.shortName} home`}>
          <img src={logoSrc} alt="LAMS Trading & Projects [South Africa] logo" className="h-16 w-16 bg-white p-1 object-contain ring-1 ring-gold" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} end className={link}>{l.label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={company.phoneHref} className="flex items-center gap-2 text-sm text-white/85 hover:text-gold"><Phone size={16} aria-hidden />{company.phoneDisplay}</a>
          <Button to="/contact">Get a Quote</Button>
        </div>
        <button className="p-2 text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-ink-line bg-ink lg:hidden" aria-label="Mobile">
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((l) => <NavLink key={l.to} to={l.to} end className={({ isActive }) => `py-3 text-lg ${isActive ? 'text-gold' : 'text-white'}`}>{l.label}</NavLink>)}
              <Button to="/contact" className="mt-3">Get a Quote</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
