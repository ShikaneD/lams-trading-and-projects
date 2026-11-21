import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, Info, MessageCircle, XCircle } from 'lucide-react'
import { company, constructionServices, cleaningServices } from '../data/company'
import Button from './Button'

interface Values { name: string; email: string; phone: string; service: string; message: string }
type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'sending' | 'success' | 'error' | 'unconnected'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || `https://formsubmit.co/ajax/${company.quoteEmail}`
const services = [...constructionServices, ...cleaningServices].map((s) => s.title).concat('Other')

function isSuccessfulResponse(response: unknown) {
  return typeof response === 'object'
    && response !== null
    && 'success' in response
    && (response.success === true || response.success === 'true')
}

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address, e.g. name@example.com.'
  if (!/^(\+27|0)[0-9 ]{9,12}$/.test(v.phone.trim())) e.phone = 'Enter a valid South African number, e.g. 060 788 8165.'
  if (!v.service) e.service = 'Choose the service you need.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little about the job (at least 10 characters).'
  return e
}

export default function ContactForm() {
  const [params] = useSearchParams()
  const [values, setValues] = useState<Values>({ name: '', email: '', phone: '', service: params.get('service') ?? '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const waText = encodeURIComponent(`Hello LAMS, my name is ${values.name || '…'}. I need: ${values.service || '…'}. ${values.message}`)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return
    if (!ENDPOINT) { setStatus('unconnected'); return } // no backend connected: be honest
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: `New quote request: ${values.service}` }),
      })
      const response: unknown = await res.json()
      if (!res.ok || !isSuccessfulResponse(response)) throw new Error('Form service rejected the request')
      setStatus('success')
    } catch { setStatus('error') }
  }

  const field = 'w-full border border-ink/25 bg-white px-4 py-3 text-ink focus:border-gold'
  const err = (k: keyof Values) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-700">{errors[k]}</p>
  const aria = (k: keyof Values) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  if (status === 'success') return (
    <div role="status" className="flex gap-3 border border-green-700/30 bg-green-50 p-6 text-green-900">
      <CheckCircle2 className="shrink-0" /><p>Thank you. Your quote request has been sent to {company.quoteEmail}.</p>
    </div>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className="mb-1 block text-sm font-semibold">Name</label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange} className={field} {...aria('name')} />{err('name')}</div>
        <div><label htmlFor="phone" className="mb-1 block text-sm font-semibold">Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} className={field} {...aria('phone')} />{err('phone')}</div>
      </div>
      <div><label htmlFor="email" className="mb-1 block text-sm font-semibold">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className={field} {...aria('email')} />{err('email')}</div>
      <div><label htmlFor="service" className="mb-1 block text-sm font-semibold">Service required</label>
        <select id="service" name="service" value={values.service} onChange={onChange} className={field} {...aria('service')}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>{err('service')}</div>
      <div><label htmlFor="message" className="mb-1 block text-sm font-semibold">Message</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} className={field} {...aria('message')} />{err('message')}</div>

      {status === 'error' && (
        <div role="alert" className="flex gap-3 border border-red-700/30 bg-red-50 p-4 text-red-900">
          <XCircle className="shrink-0" /><p>Your message could not be sent. Please try again, or call {company.phoneDisplay} or use WhatsApp.</p>
        </div>
      )}
      {status === 'unconnected' && (
        <div role="status" className="space-y-3 border border-gold/50 bg-gold/10 p-4 text-ink">
          <p className="flex gap-3"><Info className="shrink-0" /><span>Your details are valid, but this form is not connected to an email service yet, so nothing has been sent. Contact us directly instead:</span></p>
          <div className="flex flex-wrap gap-3">
            <Button href={`${company.whatsapp}?text=${waText}`} external variant="dark"><MessageCircle size={16} aria-hidden />Send on WhatsApp</Button>
            <Button href={company.phoneHref} variant="outline">Call {company.phoneDisplay}</Button>
          </div>
        </div>
      )}
      <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</Button>
    </form>
  )
}
