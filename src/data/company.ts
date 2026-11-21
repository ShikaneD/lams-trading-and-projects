import {
  Brush, Building, Building2, Briefcase, Construction, Droplets, Grid3x3, Hammer, HardHat,
  Home, PaintRoller, Sparkles, Truck, Wrench, Zap, type LucideIcon,
} from 'lucide-react'

/* ───────── EDIT THIS FILE to update company details, services and projects ───────── */

export const company = {
  name: 'LAMS TRADING AND PROJECTS (PTY) LTD',
  shortName: 'LAMS Trading and Projects',
  phoneDisplay: '060 788 8165',
  phoneHref: 'tel:+27607888165',
  quoteEmail: 'eugenelamola@gmail.com',
  whatsapp: 'https://wa.me/27607888165',
  hours: 'Open 24 hours (as listed on Google)',
  address: '', // TODO: add business address when available
  mapEmbedUrl: '', // TODO: paste a Google Maps "Embed a map" URL (src="...") when the address is known
  description:
    'A South African company providing dependable construction and professional cleaning services, with attention to detail on every project.',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Construction', to: '/construction' },
  { label: 'Cleaning', to: '/cleaning' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export interface Service { title: string; description: string; icon: LucideIcon; image: string }

// Proposed categories: confirm or edit. Photos go in /public/images (see README).
export const constructionServices: Service[] = [
  { title: 'General Construction', icon: HardHat, image: '/images/general-construction.png', description: 'Planning and delivery of construction work for residential and commercial properties.' },
  { title: 'Building and Renovations', icon: Building2, image: '/images/building-renovations.png', description: 'Extensions, alterations and refurbishments that update and add value to existing buildings.' },
  { title: 'Property Maintenance', icon: Wrench, image: '/images/property-maintenance.png', description: 'Routine and reactive repairs that keep properties safe, sound and presentable.' },
  { title: 'Painting', icon: PaintRoller, image: '/images/painting.png', description: 'Interior and exterior painting with careful preparation and a clean finish.' },
  { title: 'Plumbing', icon: Droplets, image: '/images/plumbing.png', description: 'Installation, repair and maintenance of water and drainage systems.' },
  { title: 'Electrical Work', icon: Zap, image: '/images/electrical-work.png', description: 'Electrical installations and repairs carried out to the required standards.' },
  { title: 'Tiling and Flooring', icon: Grid3x3, image: '/images/tiling-flooring.png', description: 'Supply and fitting of tiles and flooring for floors, walls and wet areas.' },
  { title: 'General Building Projects', icon: Hammer, image: '/images/general-building-projects.png', description: 'Other building work tailored to your brief, budget and timeline.' },
]

export const cleaningServices: Service[] = [
  { title: 'Residential Cleaning', icon: Home, image: '/images/residential-cleaning.png', description: 'Regular or once-off cleaning that keeps your home fresh and comfortable.' },
  { title: 'Commercial Cleaning', icon: Building, image: '/images/cleaning.jpg', description: 'Dependable cleaning for shops, showrooms, warehouses and other commercial premises.' },
  { title: 'Office Cleaning', icon: Briefcase, image: '/images/office-cleaning.png', description: 'A clean, professional workplace for your team and your visitors.' },
  { title: 'Deep Cleaning', icon: Sparkles, image: '/images/deep-cleaning.png', description: 'Thorough, top-to-bottom cleaning for areas that need more than a routine visit.' },
  { title: 'Move-in and Move-out Cleaning', icon: Truck, image: '/images/move-in-out-cleaning.png', description: 'Get a property ready for new occupants or ready to hand back.' },
  { title: 'Post-Construction Cleaning', icon: Construction, image: '/images/post-construction-cleaning.png', description: 'Removal of dust, debris and residue once building or renovation work is complete.' },
  { title: 'General Property Cleaning', icon: Brush, image: '/images/general-property-cleaning.png', description: 'Flexible cleaning for any other property or area you need looked after.' },
]

export const values = [
  { title: 'Quality', text: 'We aim for workmanship we are comfortable putting our name to.' },
  { title: 'Reliability', text: 'We do what we say we will do, when we say we will do it.' },
  { title: 'Professionalism', text: 'Clear communication, respect for your property and tidy work sites.' },
  { title: 'Integrity', text: 'Honest advice and transparent quotes.' },
]

export const whyChoose = [
  { title: 'Quality workmanship', text: 'Skilled work and careful finishing on every job.' },
  { title: 'Reliability', text: 'Dependable service you can plan around.' },
  { title: 'Professional service', text: 'Courteous, clear and respectful from first call to handover.' },
  { title: 'Attention to detail', text: 'We check the small things so they do not become big problems.' },
  { title: 'Customer satisfaction', text: 'Your satisfaction guides how we work.' },
  { title: 'Commitment to value', text: 'Fair pricing and lasting results.' },
]

export interface Project {
  id: string; title: string; category: 'Construction' | 'Cleaning'; description: string; image: string
}

// PLACEHOLDERS: replace with real LAMS projects and photos. Do not publish as real work until replaced.
export const projects: Project[] = [
  { id: 'p1', title: 'Renovation project', category: 'Construction', image: '/images/renovation-project.jpg', description: 'Describe the scope, location and outcome of a real renovation project here.' },
  { id: 'p2', title: 'Building project', category: 'Construction', image: '/images/building-project.jpg', description: 'Describe a general building project completed by LAMS.' },
  { id: 'p3', title: 'Painting and finishing', category: 'Construction', image: '/images/painting-finishing.jpg', description: 'Describe the painting or finishing work completed.' },
  { id: 'p4', title: 'Office cleaning', category: 'Cleaning', image: '/images/cleaning.jpg', description: 'Describe a commercial or office cleaning contract.' },
  { id: 'p5', title: 'Deep clean', category: 'Cleaning', image: '/images/cleaning.jpg', description: 'Describe a deep cleaning job for a home or business.' },
  { id: 'p6', title: 'Post-construction clean', category: 'Cleaning', image: '/images/cleaning.jpg', description: 'Describe a post-construction handover clean.' },
]

export const beforeAfter = [
  { title: 'Before and after (placeholder)', before: '/images/before-1.jpg', after: '/images/after-1.jpg' },
  { title: 'Before and after (placeholder)', before: '/images/before-2.jpg', after: '/images/after-2.jpg' },
]
