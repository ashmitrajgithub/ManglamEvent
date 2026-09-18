"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, BriefcaseBusiness, Camera, Flower2, Mic2, Music2, PartyPopper, Sparkles, Users } from "lucide-react"

const WHATSAPP = "https://wa.me/917635031522?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."

const services = [
  { title: "Luxury weddings", kicker: "01 / Royal celebrations", description: "Bespoke mandaps, floral architecture and flawless coordination from sangeet to vidaai.", icon: Sparkles, color: "#ad6b32" },
  { title: "Destination weddings", kicker: "02 / Beyond borders", description: "From Goa beaches to Rajasthan palaces, we make every destination feel effortless.", icon: PartyPopper, color: "#b26b76" },
  { title: "Corporate events", kicker: "03 / Brand experiences", description: "Conferences, launches and award nights that feel as considered as your brand.", icon: BriefcaseBusiness, color: "#47799c" },
  { title: "Concerts & DJ nights", kicker: "04 / Live experiences", description: "Stage, sound, lights and crowd energy engineered for unforgettable nights.", icon: Music2, color: "#4d8060" },
  { title: "Public events", kicker: "05 / Large scale ops", description: "Reliable production, AV infrastructure and logistics for high-footfall events.", icon: Users, color: "#b56c37" },
  { title: "Artist management", kicker: "06 / Star booking", description: "The right performers, booked and managed with calm, precise execution.", icon: Mic2, color: "#a94f4f" },
  { title: "Photo & film", kicker: "07 / Cinematic memories", description: "Candid photography, drone coverage and wedding films with a point of view.", icon: Camera, color: "#76599b" },
  { title: "Floral & decor", kicker: "08 / Living art", description: "Immersive installations and themed environments made around your story.", icon: Flower2, color: "#b35c72" },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-90px" })

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-[#f4efe7] px-5 py-24 text-[#241a15] md:px-8 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(rgba(164,95,38,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(164,95,38,.055) 1px, transparent 1px)", backgroundSize: "92px 92px", maskImage: "linear-gradient(to bottom, black, transparent 76%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-8 h-96 w-96 rounded-full bg-[#e7cba9]/45 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#ead7c4]/55 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, ease: "easeOut" }} className="relative mb-14 overflow-hidden rounded-[1.75rem] border border-[#e1d1bf] bg-[#fbf8f2]/90 px-6 py-8 shadow-[0_18px_55px_rgba(83,53,30,.08)] backdrop-blur-sm sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#ad6b32]/15" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#ad6b32]/10" />
          <div className="relative z-10 flex flex-col justify-between gap-9 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a45f26] sm:text-xs"><span className="h-px w-9 bg-[#a45f26]" /> What we do <span className="text-[#a99280]">/ 08 disciplines</span></p>
              <h2 className="max-w-4xl font-serif text-[clamp(2.4rem,7vw,7rem)] font-medium leading-[.82] tracking-[-.075em] text-[#261b16]">Everything your<br /><span className="italic text-[#ad6b32]">moment deserves.</span></h2>
            </div>
            <div className="max-w-sm md:pb-1 md:text-right">
              <p className="text-sm leading-6 text-[#756459]">From the first spark to the final guest goodbye, one composed team shapes every detail around your story.</p>
              <div className="mt-6 flex items-center gap-3 md:justify-end"><span className="h-2 w-2 rounded-full bg-[#ad6b32] shadow-[0_0_12px_rgba(173,107,50,.42)]" /><span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9d8977]">Strategy · craft · atmosphere</span></div>
            </div>
          </div>
          <div className="relative z-10 mt-9 flex items-center justify-between border-t border-[#e1d1bf] pt-4 text-[9px] font-bold uppercase tracking-[0.26em] text-[#ae9b89]"><span>Manglam Event Studio</span><span className="hidden sm:block">Built for the moment</span><span>01 — 08</span></div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.a key={service.title} href={WHATSAPP} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: index * .06, ease: "easeOut" }} whileHover={{ y: -5 }} className={`group relative overflow-hidden rounded-[1.25rem] border border-[#e2d4c5] bg-[#fffdf9] p-6 shadow-[0_10px_30px_rgba(78,51,29,.04)] transition-all duration-300 hover:border-[#c8aa8e] hover:shadow-[0_18px_38px_rgba(78,51,29,.1)] ${index === 0 ? "sm:col-span-2 lg:col-span-2 min-h-[300px]" : "min-h-[268px]"}`}>
                <div aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" style={{ background: service.color }} />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-8 flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e5d8ca] bg-[#faf4ec] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" style={{ color: service.color }}><Icon className="h-5 w-5" strokeWidth={1.7} /></span><span className="font-serif text-3xl leading-none text-[#e7d9ca] transition-colors group-hover:text-[#c9a88a]">{service.kicker.slice(0, 2)}</span></div>
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em]" style={{ color: service.color }}>{service.kicker.slice(5)}</p>
                    <h3 className={`${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"} font-serif leading-none tracking-[-.03em] text-[#2e211a]`}>{service.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-[#806f61]">{service.description}</p>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a38d79] transition-colors group-hover:text-[#a45f26]">Plan this service <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
