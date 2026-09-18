import Link from "next/link"
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react"

const PHONE = "+91 76350 31522"
const EMAIL = "info@manglamevents.in"
const WHATSAPP = "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20would%20like%20to%20discuss%20my%20event."

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Our story", href: "#about" },
  { name: "What we do", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Get in touch", href: "#contact" },
]

const services = [
  "Weddings & celebrations",
  "Corporate experiences",
  "Decor & floral design",
  "Live events & concerts",
  "Production & hospitality",
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#24160f] text-[#f8eee5]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-56 -top-64 h-[42rem] w-[42rem] rounded-full border border-[#c48750]/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full border border-[#c48750]/15" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-16 sm:px-8 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_.72fr_.85fr_1fr] lg:gap-12">
          <div>
            <Link href="#home" className="group inline-flex flex-col leading-none" aria-label="Manglam Event home">
              <span className="font-serif text-4xl font-semibold tracking-[.09em] text-[#fff8f1] transition-colors group-hover:text-[#efb66c]">MANGLAM</span>
              <span className="mt-2 text-[9px] font-bold tracking-[.52em] text-[#d8914e]">EVENT STUDIO</span>
            </Link>
            <p className="mt-8 max-w-sm text-[15px] leading-7 text-[#c5b1a0]">We design celebrations with feeling — from the first spark of an idea to the final guest goodbye.</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#efb66c] transition-colors hover:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c48750]/40 bg-[#c48750]/10 transition group-hover:bg-[#a45f26]"><MessageCircle className="h-4 w-4" /></span>Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>

            <div className="mt-12 flex items-center gap-3">
              {[
                { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/manglamevent" },
                { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/manglamevent" },
                { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/@manglamevent" },
              ].map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={`Follow Manglam Event on ${label}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#c5b1a0] transition-all hover:-translate-y-1 hover:border-[#d8914e] hover:bg-[#a45f26] hover:text-white"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#d8914e]"><span className="h-px w-7 bg-[#d8914e]" /> Explore</p>
            <ul className="space-y-3.5">
              {navigation.map((item) => <li key={item.name}><Link href={item.href} className="group inline-flex items-center gap-2 text-sm text-[#c5b1a0] transition-colors hover:text-white"><span className="h-px w-0 bg-[#d8914e] transition-all group-hover:w-4" />{item.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#d8914e]"><span className="h-px w-7 bg-[#d8914e]" /> Expertise</p>
            <ul className="space-y-3.5">
              {services.map((service) => <li key={service}><Link href="#services" className="group inline-flex items-center gap-2 text-sm text-[#c5b1a0] transition-colors hover:text-white"><span className="h-px w-0 bg-[#d8914e] transition-all group-hover:w-4" />{service}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#d8914e]"><span className="h-px w-7 bg-[#d8914e]" /> Find us here</p>
            <address className="not-italic space-y-5">
              <a href="https://maps.google.com/?q=Cinema+Road+Sitamarhi+Bihar" target="_blank" rel="noreferrer" aria-label="View Manglam Event Studio on Google Maps" className="group flex items-start gap-3 text-sm leading-6 text-[#c5b1a0] transition hover:text-white"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#d8914e]" /><span>Cinema Road, Near Vishal Mega Mart,<br />Sitamarhi, Bihar – 843302</span></a>
              <a href={`tel:${PHONE}`} aria-label={`Call Manglam Event at ${PHONE}`} className="group flex items-center gap-3 text-sm text-[#c5b1a0] transition hover:text-white"><Phone className="h-4 w-4 shrink-0 text-[#d8914e]" />{PHONE}</a>
              <a href={`mailto:${EMAIL}`} aria-label={`Email Manglam Event at ${EMAIL}`} className="group flex items-center gap-3 text-sm text-[#c5b1a0] transition hover:text-white"><Mail className="h-4 w-4 shrink-0 text-[#d8914e]" />{EMAIL}</a>
            </address>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[1.25rem] border border-[#c48750]/30 bg-gradient-to-r from-[#3b2315] to-[#2e1a11] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d8914e]">Have a date in mind?</p>
              <p className="mt-2 font-serif text-3xl leading-none text-[#fff8f1] sm:text-4xl">Let&apos;s make it unforgettable.</p>
            </div>
            <Link href="#contact" className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#d8914e] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.18em] text-[#24160f] transition hover:bg-[#efb66c]"><span>Plan your event</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[.16em] text-[#957e6d] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Manglam Event Studio. All rights reserved.</p>
          <div className="flex gap-5"><Link href="#" className="transition hover:text-[#efb66c]">Privacy</Link><Link href="#" className="transition hover:text-[#efb66c]">Terms</Link></div>
        </div>
      </div>
    </footer>
  )
}
