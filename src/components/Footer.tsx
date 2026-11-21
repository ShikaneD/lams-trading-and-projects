import { Link } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import { company, constructionServices, cleaningServices, navLinks } from '../data/company'

const h = 'mb-4 font-display text-xl font-semibold text-gold'
const li = 'text-sm text-stone-light hover:text-gold'

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <img src="/logo.png" alt="LAMS Trading & Projects [South Africa] logo" className="h-32 w-32 object-contain" />
          <p className="mt-2 font-semibold">{company.name}</p>
          <p className="mt-2 max-w-xs text-sm text-stone-light">{company.description}</p>
        </div>
        <div>
          <h3 className={h}>Quick links</h3>
          <ul className="space-y-2">{navLinks.map((l) => <li key={l.to}><Link className={li} to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={h}>Construction</h3>
          <ul className="space-y-2">{constructionServices.map((s) => <li key={s.title}><Link className={li} to="/construction">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={h}>Cleaning</h3>
          <ul className="space-y-2">{cleaningServices.map((s) => <li key={s.title}><Link className={li} to="/cleaning">{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={h}>Contact</h3>
          <ul className="space-y-3 text-sm">
            <li><a className="flex items-center gap-2 text-stone-light hover:text-gold" href={company.phoneHref}><Phone size={16} aria-hidden />{company.phoneDisplay}</a></li>
            <li><a className="flex items-center gap-2 text-stone-light hover:text-gold" href={company.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden />WhatsApp us</a></li>
            <li className="text-stone-light">{company.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line py-6 text-center text-xs text-stone-light">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
