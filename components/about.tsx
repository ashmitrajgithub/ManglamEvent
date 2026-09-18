"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Check, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const milestones = [
  { year: "2014", title: "A small beginning", description: "Birthday celebrations and intimate gatherings in Patna." },
  { year: "2017", title: "Into weddings", description: "Our first destination wedding in Rajgir opened a new chapter." },
  { year: "2020", title: "Bigger stages", description: "Brands, launches and award nights joined the story." },
  { year: "2024", title: "The next frame", description: "3D visualisation, luxury decor and artist management." },
]

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const startedAt = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, start, target])

  return value
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const events = useCountUp(500, inView)
  const years = useCountUp(10, inView, 1100)
  const clients = useCountUp(98, inView, 1300)

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-[#f4efe7] px-5 py-24 text-[#221915] md:px-8 md:py-32" itemScope itemType="https://schema.org/Organization">
      {/* AI-readable factual summary — always in HTML, visible to crawlers */}
      <div className="sr-only">
        <h2>About Manglam Event</h2>
        <p itemProp="description">
          Manglam Event is a professional wedding and event planning company founded in 2014 and headquartered at Cinema Road, Near Vishal Mega Mart, Sitamarhi, Bihar, India – 843302.
          The company provides full-service event management including luxury wedding planning, destination wedding planning, corporate event management, concerts and DJ nights,
          public and cultural events, artist management, wedding photography and videography, and floral and decor design.
          Manglam Event serves clients across Bihar including Sitamarhi, Patna, Muzaffarpur, Darbhanga, Motihari, Hajipur, and Vaishali,
          and also plans destination weddings and events across India.
          Since 2014, the company has delivered over 500 events and maintains a 4.9 out of 5 star client rating with a 98% client satisfaction rate.
          Contact: phone +91 76350 31522, email info@manglamevents.in, website https://manglamevents.in.
        </p>
        <meta itemProp="name" content="Manglam Event" />
        <meta itemProp="foundingDate" content="2014" />
        <meta itemProp="telephone" content="+917635031522" />
        <meta itemProp="email" content="info@manglamevents.in" />
        <meta itemProp="url" content="https://manglamevents.in" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-56 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#e8cda8]/45 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-14rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#e2c5a8]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, ease: "easeOut" }} className="mb-14 flex flex-col justify-between gap-5 border-b border-[#cdbba7] pb-6 sm:flex-row sm:items-end">
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a45f26] sm:text-xs"><span className="h-px w-8 bg-[#a45f26]" /> Our story</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#927e6d]">2014 — now · Patna, Bihar</p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8, delay: .06, ease: "easeOut" }} className="max-w-xl font-serif text-[clamp(3.2rem,6vw,6.4rem)] font-medium leading-[.88] tracking-[-.07em]">
              We turn occasions into <span className="italic text-[#b76f31]">stories.</span>
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .18, ease: "easeOut" }} className="mt-8 max-w-lg space-y-4 text-[15px] leading-7 text-[#65574e]">
              <p>What began as a small passion project has grown into a full-service event studio for celebrations with soul, atmosphere and a point of view.</p>
              <p>We bring creative direction, production discipline and a deeply personal touch to every room we enter.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -15 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .25, ease: "easeOut" }} className="mt-9 flex max-w-lg gap-4 border-l-2 border-[#b76f31]/60 pl-5">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-[#b76f31]" strokeWidth={1.6} />
              <p className="font-serif text-xl italic leading-7 text-[#43362f]">We don&apos;t just arrange things; we design how a moment feels.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .34, ease: "easeOut" }} className="mt-12 grid max-w-lg grid-cols-3 border-t border-[#cdbba7] pt-5">
              {[
                { value: `${events}+`, label: "events delivered" },
                { value: `${years}+`, label: "years of craft" },
                { value: `${clients}%`, label: "happy clients" },
              ].map((stat, index) => (
                <div key={stat.label} className={index ? "border-l border-[#cdbba7] pl-4 sm:pl-7" : ""}>
                  <p className="font-serif text-3xl text-[#a45f26] sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#927e6d]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 28, scale: .97 }} animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: .9, delay: .1, ease: "easeOut" }} className="relative mx-auto w-full max-w-[600px]">
            <div className="relative aspect-[.92] overflow-hidden rounded-[2rem] bg-[#dec6ae] shadow-[0_28px_70px_rgba(74,46,26,.18)] sm:aspect-[1.08]">
              <Image src="https://res.cloudinary.com/duewgaxov/image/upload/v1789039205/Home_page_fk5tpm.png" alt="A beautifully produced Manglam Event entrance" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-center brightness-[0.88] saturate-[0.9] transition-transform duration-1000 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21140d]/70 via-transparent to-[#21140d]/10" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:left-7 sm:top-7"><span className="h-1.5 w-1.5 rounded-full bg-[#efb66c]" />Behind every detail</div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8"><div><p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">The Manglam way</p><p className="mt-1 font-serif text-2xl italic text-white sm:text-3xl">Details make the memory.</p></div><span className="hidden text-[10px] font-bold uppercase tracking-[0.24em] text-white/55 sm:block">01 / 04</span></div>
            </div>
            <div className="absolute -bottom-10 -left-5 hidden w-48 overflow-hidden rounded-2xl border-8 border-[#f4efe7] bg-[#d8bfa6] shadow-[0_18px_45px_rgba(74,46,26,.18)] sm:block sm:w-56"><div className="relative aspect-[.9]"><Image src="/04.jpeg" alt="Manglam Event stage styling" fill sizes="224px" className="object-cover object-center" /></div></div>
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-[#b76f31]/40 bg-[#f8f1e8]/90 px-4 py-3 text-center shadow-lg backdrop-blur-md sm:block"><p className="font-serif text-2xl text-[#a45f26]">10</p><p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#927e6d]">years of craft</p></div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8, delay: .38, ease: "easeOut" }} className="mt-24 border-t border-[#cdbba7] pt-8 lg:mt-32">
          <div className="mb-8 flex items-center justify-between"><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a45f26]">A story in four chapters</p><span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-[#927e6d] sm:block">Keep scrolling →</span></div>
          <div className="grid gap-8 md:grid-cols-4 md:gap-5">
            {milestones.map((item, index) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .48 + index * .1, ease: "easeOut" }} className="relative border-l border-[#cdbba7] pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
                <div className="absolute -left-[4px] top-0 h-2 w-2 rounded-full bg-[#b76f31] md:-top-[4px] md:left-0" />
                <p className="font-serif text-3xl text-[#b76f31]">{item.year}</p>
                <h3 className="mt-2 font-serif text-xl text-[#332720]">{item.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-6 text-[#88796c]">{item.description}</p>
                {index === milestones.length - 1 && <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a45f26]"><Check className="h-3.5 w-3.5" /> Still writing</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
