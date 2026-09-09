"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, CalendarDays, MapPin, Sparkles, Ticket, Zap } from "lucide-react"

const WHATSAPP =
  "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20want%20to%20know%20more%20about%20Dholida%20Nights."

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function UpcomingEvent() {
  return (
    <section id="upcoming-event" className="relative overflow-hidden bg-[#050605] px-3 py-5 text-white sm:px-5 sm:py-8 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.12] bg-[#090b0a] shadow-[0_35px_100px_rgba(0,0,0,0.48)] sm:rounded-[2rem]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
              backgroundSize: "104px 104px",
              maskImage: "linear-gradient(to bottom, black, transparent 78%)",
            }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full bg-[#c8ff00]/[0.08] blur-[100px]"
            animate={{ opacity: [0.3, 0.65, 0.3], scale: [0.92, 1.04, 0.92] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 grid min-h-[470px] grid-cols-1 lg:grid-cols-[0.93fr_1.07fr]">
            <div className="relative flex flex-col justify-between overflow-hidden border-b border-white/[0.1] px-7 py-8 sm:px-10 sm:py-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-12">
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent" />
              <div>
                <motion.div variants={reveal} transition={{ duration: 0.65, ease: "easeOut" }} className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#c8ff00] sm:text-xs">
                  <Zap className="h-4 w-4 fill-current" strokeWidth={2.2} />
                  New event — Autumn 2026
                </motion.div>
                <motion.p variants={reveal} transition={{ duration: 0.65, ease: "easeOut" }} className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white/40 sm:text-xs">
                  Manglam Event presents
                </motion.p>
                <motion.h2 variants={reveal} transition={{ duration: 0.75, ease: "easeOut" }} className="max-w-[650px] font-sans text-[clamp(3.35rem,7.1vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-white">
                  Dholida
                  <span className="block text-[#c8ff00]">Nights.</span>
                </motion.h2>
                <motion.p variants={reveal} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-7 max-w-[420px] text-sm leading-6 text-white/55 sm:text-base">
                  Sitamarhi&apos;s biggest dandiya night. Come for the rhythm, stay for the spectacle.
                </motion.p>
              </div>

              <div className="mt-10">
                <motion.div variants={reveal} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="mb-7 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.11em] text-white/65">
                  <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#c8ff00]" strokeWidth={1.8} />15 October 2026</span>
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#c8ff00]" strokeWidth={1.8} />Hisarya Bhawan, Sitamarhi</span>
                </motion.div>
                <motion.div variants={reveal} transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }} className="flex flex-wrap items-center gap-4">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 rounded-full bg-[#c8ff00] px-5 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-[#090b0a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4ff4a]">
                    <Ticket className="h-4 w-4" strokeWidth={2.3} />
                    Reserve now
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
                  </a>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">Limited entry</span>
                </motion.div>
              </div>
            </div>

            <motion.div variants={reveal} transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }} className="group relative min-h-[310px] overflow-hidden bg-[#1c0b0c] lg:min-h-[470px]">
              <Image src="/dholida-nights-sponsorship.png" alt="Dholida Nights dancers celebrating at a festive event" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-[center_78%] brightness-[0.78] saturate-[1.08] transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#090b0a_0%,rgba(9,11,10,.46)_22%,transparent_64%),linear-gradient(0deg,rgba(9,11,10,.72),transparent_46%,rgba(72,5,14,.18))]" />
              <div className="absolute inset-0 bg-[#7e0a18]/15 mix-blend-color" />
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-[#c8ff00]/50 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#c8ff00] backdrop-blur-md sm:left-9 sm:top-9">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c8ff00] shadow-[0_0_12px_#c8ff00]" />
                Official artwork
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 sm:bottom-9 sm:left-9 sm:right-9">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#c8ff00]">One night · every rhythm</p>
                  <p className="mt-2 font-sans text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-3xl">Dance after dark.</p>
                </div>
                <span className="hidden text-[10px] font-bold uppercase tracking-[0.24em] text-white/55 sm:block">01 / 03</span>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-3 border-t border-white/[0.1] p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-[0.74fr_1.26fr]">
            <motion.div variants={reveal} transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }} className="group relative min-h-[220px] overflow-hidden rounded-[1.25rem] border border-white/[0.1] bg-[#0d0f0e] p-6 sm:min-h-[245px] sm:p-8">
              <Image src="/02.jpeg" alt="Decorative celebration lights at a Manglam Event" fill sizes="(max-width: 640px) 100vw, 35vw" className="object-cover opacity-25 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-[#080a09]/65 to-transparent" />
              <div className="relative flex h-full flex-col justify-end">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.27em] text-[#c8ff00]">The experience</p>
                <h3 className="font-sans text-3xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-4xl">Music.<br />Dance.<br />Magic.</h3>
                <span className="mt-5 inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.23em] text-white/55 transition-colors group-hover:text-[#c8ff00]">Explore the night <ArrowUpRight className="h-4 w-4" /></span>
              </div>
            </motion.div>

            <motion.div variants={reveal} transition={{ duration: 0.75, delay: 0.24, ease: "easeOut" }} className="relative min-h-[220px] overflow-hidden rounded-[1.25rem] border border-[#c8ff00]/20 bg-[#10160a] p-6 sm:min-h-[245px] sm:p-8">
              <div aria-hidden="true" className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-[#c8ff00]/15" />
              <div aria-hidden="true" className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-[#c8ff00]/10" />
              <div className="relative flex h-full flex-col justify-between sm:flex-row sm:items-end sm:gap-8">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8ff00]/35 bg-[#c8ff00]/[0.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c8ff00]"><Sparkles className="h-3 w-3" /> Save the date</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.27em] text-white/45">Your next unforgettable night</p>
                  <p className="mt-3 max-w-[400px] font-sans text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-4xl">Bring your<br /><span className="text-[#c8ff00]">people.</span></p>
                </div>
                <div className="mt-8 shrink-0 sm:mt-0 sm:text-right">
                  <p className="text-4xl font-black tracking-[-0.07em] text-white sm:text-5xl">15<span className="text-[#c8ff00]">/10</span></p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">Thursday · 2026</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c8ff00] hover:text-[#c8ff00]">Get details <ArrowUpRight className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-white/[0.1] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.26em] text-white/30 sm:px-8">
            <span>Manglam Event Studio</span>
            <span className="hidden sm:inline">Dholida Nights · Sitamarhi</span>
            <span>2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
