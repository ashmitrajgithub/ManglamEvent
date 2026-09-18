"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, CalendarDays, CheckCircle, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"

const PHONE = "+91 76350 31522"
const EMAIL = "info@manglamevents.in"
const ADDRESS = "Cinema Road, Near Vishal Mega Mart, Sitamarhi, Bihar – 843302"
const WHATSAPP = "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20would%20like%20to%20discuss%20my%20event."
const eventTypes = ["Wedding", "Corporate Event", "Birthday Party", "Cultural Event", "Political Event", "Concert / DJ Night", "Other"]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "Wedding", message: "" })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const message = encodeURIComponent(
      `New Inquiry from Website\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent Type: ${form.type}\nMessage: ${form.message}`,
    )
    window.open(`https://wa.me/917635031522?text=${message}`, "_blank")
    setSubmitted(true)
    window.setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", phone: "", email: "", type: "Wedding", message: "" })
    }, 4000)
  }

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-[#f4efe7] px-5 py-24 text-[#261b15] sm:px-8 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#e7caa9]/45 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#e6c5a3]/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a45f26] sm:text-xs"><span className="h-px w-9 bg-[#a45f26]" /> Get in touch</p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.6rem,6vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-[#261b15]">Your next beautiful<br /><span className="italic text-[#ad6b32]">chapter starts here.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#756459] md:pb-2">Have a date, a dream, or just a feeling? Tell us a little about it. We&apos;ll bring the right people, ideas, and energy to the table.</p>
        </motion.div>

        <div className="grid overflow-hidden rounded-[1.8rem] border border-[#e1d1bf] bg-[#fffdf9] shadow-[0_28px_80px_rgba(83,53,30,.12)] lg:grid-cols-[0.83fr_1.17fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden bg-[#24160f] p-7 text-white sm:p-10 lg:min-h-[720px] lg:p-12"
          >
            <Image src="/11.jpeg" alt="A Manglam Event celebration entrance glowing at night" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,12,7,.58)_0%,rgba(22,12,7,.18)_35%,rgba(22,12,7,.93)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(218,139,73,.38),transparent_42%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/25 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#efb66c]" /> Manglam Event Studio</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">Now booking 2026</span>
              </div>

              <div>
                <p className="mb-4 max-w-xs font-serif text-3xl italic leading-none text-[#f3c78f] sm:text-4xl">Let&apos;s make it feel like you.</p>
                <p className="max-w-sm text-sm leading-6 text-white/70">Full-service planning, design, and on-ground production for celebrations that deserve more than ordinary.</p>

                <div className="mt-9 grid gap-3 border-t border-white/20 pt-6 sm:grid-cols-2">
                  <a href={`tel:${PHONE}`} className="group flex items-center gap-3 text-sm text-white/85 transition hover:text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#f3c78f] transition group-hover:bg-[#a45f26]"><Phone className="h-4 w-4" /></span>
                    <span><span className="block text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">Call directly</span><span className="mt-1 block">{PHONE}</span></span>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3 text-sm text-white/85 transition hover:text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#f3c78f] transition group-hover:bg-[#a45f26]"><Mail className="h-4 w-4" /></span>
                    <span><span className="block text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">Write to us</span><span className="mt-1 block">{EMAIL}</span></span>
                  </a>
                </div>

                <div className="mt-5 flex items-start gap-3 border-t border-white/20 pt-5 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f3c78f]" />
                  <a href="https://maps.google.com/?q=Sitamarhi+Bihar" target="_blank" rel="noreferrer" className="leading-6 transition hover:text-white">{ADDRESS}</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
            className="relative p-7 sm:p-10 lg:p-12"
          >
            {submitted && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#fffdf9]/95 p-8 text-center backdrop-blur-sm">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2e3d3] text-[#a45f26]"><CheckCircle className="h-8 w-8" /></span>
                <h3 className="font-serif text-3xl text-[#2a1c14]">We&apos;re on our way.</h3>
                <p className="max-w-xs text-sm leading-6 text-[#756459]">Your details are ready in WhatsApp. Our team will respond within two hours.</p>
              </motion.div>
            )}

            <div className="flex items-start justify-between gap-5 border-b border-[#e8ded3] pb-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#a45f26]">Start a conversation</p>
                <h3 className="mt-3 font-serif text-4xl leading-none tracking-[-0.04em] text-[#2a1c14] sm:text-5xl">Tell us everything.</h3>
              </div>
              <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#d9c5b1] text-[#a45f26] sm:flex"><ArrowUpRight className="h-5 w-5" /></div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#927e6d]">Your name *</span><input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Rahul Sharma" className="mt-2 h-12 w-full border-b border-[#d9cabc] bg-transparent px-0 text-sm text-[#2a1c14] placeholder-[#b7a99b] outline-none transition focus:border-[#a45f26]" /></label>
                <label className="block"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#927e6d]">Phone *</span><input required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="+91 98765 43210" className="mt-2 h-12 w-full border-b border-[#d9cabc] bg-transparent px-0 text-sm text-[#2a1c14] placeholder-[#b7a99b] outline-none transition focus:border-[#a45f26]" /></label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#927e6d]">Email address</span><input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="rahul@example.com" className="mt-2 h-12 w-full border-b border-[#d9cabc] bg-transparent px-0 text-sm text-[#2a1c14] placeholder-[#b7a99b] outline-none transition focus:border-[#a45f26]" /></label>
                <label className="relative block"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#927e6d]">Event type *</span><select required value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} className="mt-2 h-12 w-full appearance-none border-b border-[#d9cabc] bg-transparent px-0 text-sm text-[#2a1c14] outline-none transition focus:border-[#a45f26]">{eventTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select><span className="pointer-events-none absolute bottom-4 right-0 text-[#a45f26]">⌄</span></label>
              </div>
              <label className="block"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#927e6d]">Tell us about the occasion</span><textarea rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Date, city, guest count, or the feeling you want to create..." className="mt-3 w-full resize-none rounded-xl border border-[#e2d6ca] bg-[#fbf8f2] p-4 text-sm leading-6 text-[#2a1c14] placeholder-[#b7a99b] outline-none transition focus:border-[#a45f26] focus:bg-white" /></label>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button type="submit" className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#a45f26] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_26px_rgba(164,95,38,.2)] transition hover:-translate-y-0.5 hover:bg-[#824819]"><Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /> Send enquiry</button>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d4bda7] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a45f26] transition hover:bg-[#f6eadf]"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#e8ded3] pt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a08d7c]"><span className="inline-flex items-center gap-2"><Clock3 className="h-3.5 w-3.5 text-[#a45f26]" /> Replies within 2 hours</span><span className="inline-flex items-center gap-2"><CalendarDays className="h-3.5 w-3.5 text-[#a45f26]" /> Free first consultation</span></div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
