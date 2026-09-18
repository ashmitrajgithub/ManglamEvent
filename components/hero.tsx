"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight, Check, Play, Sparkles, Star } from "lucide-react"

const services = ["Weddings", "Corporate events", "Live experiences"]

export default function Hero() {
  const [ready, setReady] = useState(false)
  const visualRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [2.4, -2.4]), { stiffness: 160, damping: 28 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3.4, 3.4]), { stiffness: 160, damping: 28 })

  useEffect(() => setReady(true), [])

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = visualRef.current?.getBoundingClientRect()
    if (!bounds) return
    mx.set((event.clientX - bounds.left) / bounds.width - 0.5)
    my.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }, [mx, my])

  const resetPointer = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#fbf8f2] text-[#241812]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 h-[42rem] w-[42rem] rounded-full bg-[#f1d2aa]/55 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -left-44 h-[38rem] w-[38rem] rounded-full bg-[#ead0b3]/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[3%] top-[26%] font-serif text-[25rem] leading-none tracking-[-.2em] text-[#a45f26]/[0.035]">M</div>

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col px-5 pb-7 pt-28 sm:px-9 lg:px-16 lg:pt-32 xl:px-24">
        <div className="mb-8 flex items-center justify-between border-y border-[#e2d2c0] py-2 text-[9px] font-bold uppercase tracking-[.28em] text-[#907965]">
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a45f26] bg-[#a45f26] text-white shadow-[0_5px_16px_rgba(164,95,38,.2)]"><span className="font-serif text-xl leading-none">M</span></span>
            <span className="flex flex-col leading-none"><span className="font-serif text-base font-semibold tracking-[.12em] text-[#241812]">MANGLAM</span><span className="mt-1 text-[7px] font-bold tracking-[.36em] text-[#a45f26]">EVENT STUDIO</span></span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#a45f26] sm:inline-block" /> <span className="hidden sm:inline">The celebration studio</span>
          </span>
          <span className="hidden sm:block">Weddings · Corporate · Live experiences</span>
          <span>Patna · Bihar</span>
        </div>

        <div className="flex flex-1 items-start">
          <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
            <div className="relative z-10 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }} className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-[#a45f26] sm:text-xs"><span className="h-px w-10 bg-[#a45f26]" /> Manglam Event Studio <span className="text-[#c9b8a6]">/ 2014 — now</span></motion.div>

              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .9, delay: .1, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-[clamp(4rem,7.4vw,8.9rem)] font-medium leading-[.79] tracking-[-.08em]">
                We make your
                <span className="block italic text-[#ae6c32]">biggest</span>
                <span className="block">moments</span>
                <span className="block">feel effortless.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .35 }} className="mt-9 max-w-lg text-[15px] leading-7 text-[#65574e] sm:text-base">A full-service event company for celebrations with meaning, atmosphere, and impeccable execution — from the first idea to the final guest goodbye.</motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .48 }} className="mt-9 flex flex-wrap items-center gap-5">
                <button onClick={() => scrollTo("contact")} className="group inline-flex items-center gap-4 rounded-full bg-[#a45f26] px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white shadow-[0_13px_30px_rgba(164,95,38,.24)] transition hover:-translate-y-1 hover:bg-[#824819]">Start planning <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></button>
                <button onClick={() => scrollTo("gallery")} className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#675a50] transition hover:text-[#a45f26]"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c7a98c] transition group-hover:border-[#a45f26] group-hover:bg-[#f2e3d3]"><Play className="ml-0.5 h-3 w-3 fill-current" /></span>See our work</button>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ duration: .8, delay: .7 }} className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dfcfbd] pt-5">{services.map((service) => <span key={service} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.16em] text-[#806e5e]"><Check className="h-3.5 w-3.5 text-[#a45f26]" />{service}</span>)}</motion.div>
            </div>

            <motion.div ref={visualRef} onPointerMove={onPointerMove} onPointerLeave={resetPointer} initial={{ opacity: 0, x: 32, scale: .96 }} animate={ready ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: 1, delay: .18 }} className="relative h-[500px] [perspective:1200px] sm:h-[560px] lg:h-[610px]">
              <div aria-hidden="true" className="absolute right-1 top-7 h-[88%] w-[84%] rotate-[3deg] rounded-[2.5rem] border-[14px] border-[#e5c29e]/45 bg-[#f3dfca] shadow-[0_22px_60px_rgba(107,57,25,.1)]" />
              <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="absolute right-0 top-3 h-[91%] w-[88%] overflow-hidden rounded-[2.5rem] border-[7px] border-[#fff9f0] bg-[#ead6bf] shadow-[0_30px_80px_rgba(77,46,24,.22)] sm:right-3 sm:w-[84%]">
                <Image src="https://res.cloudinary.com/duewgaxov/image/upload/v1789039205/Home_page_fk5tpm.png" alt="Manglam Event floral wedding installation" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center brightness-[1.08] saturate-[.95] transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21140d]/60 via-transparent to-transparent" />
                <div style={{ transform: "translateZ(55px)" }} className="absolute left-6 top-6 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-white backdrop-blur-md"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#efb66c]" /> Live beautifully</div>
                <div style={{ transform: "translateZ(55px)" }} className="absolute bottom-7 left-7 right-7 flex items-end justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.22em] text-white/70">The Manglam signature</p><p className="mt-1 font-serif text-3xl italic text-white sm:text-4xl">Atmosphere, made personal.</p></div><div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/60 text-white sm:flex"><ArrowRight className="h-4 w-4 -rotate-45" /></div></div>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 z-10 w-[230px] overflow-hidden rounded-2xl border border-[#e4c7a8] bg-[#fffdf8]/95 shadow-[0_18px_42px_rgba(77,46,24,.2)] sm:left-1">
                <div className="relative h-28"><Image src="/dholida-nights-sponsorship.png" alt="Dholida Nights campaign" fill sizes="230px" className="object-cover object-[center_72%]" /><div className="absolute inset-0 bg-gradient-to-t from-[#2d160c]/80 to-transparent" /></div>
                <div className="p-4"><div className="flex items-center justify-between"><span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#a45f26]">Upcoming campaign</span><Sparkles className="h-3.5 w-3.5 text-[#a45f26]" /></div><p className="mt-2 font-sans text-sm font-bold uppercase tracking-[-.02em] text-[#2e1d14]">Dholida Nights</p><p className="mt-1 text-[9px] uppercase tracking-[.14em] text-[#917a66]">15 October 2026 · Sitamarhi</p></div>
              </motion.div>

              <motion.div animate={{ rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-2 top-10 flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[#a45f26]/55 bg-[#fbf8f2]/80 text-center text-[8px] font-bold uppercase leading-4 tracking-[.18em] text-[#a45f26] backdrop-blur-sm sm:-right-4 sm:h-32 sm:w-32"><span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#a45f26]/20">Create<br />the feeling</span></motion.div>
              <div className="absolute -left-10 top-24 hidden text-[9px] font-bold uppercase tracking-[.35em] text-[#a08066] [writing-mode:vertical-rl] lg:block">Celebrations with meaning</div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .85 }} className="relative mt-14 grid max-w-2xl grid-cols-3 border-t border-[#dfcfbd] pt-5 lg:mt-8">{[{ value: "500+", label: "Events delivered" }, { value: "10+", label: "Years of expertise" }, { value: "4.9/5", label: "Client rating" }].map((stat, index) => <div key={stat.label} className={index ? "border-l border-[#dfcfbd] pl-4 sm:pl-8" : ""}><p className="font-serif text-3xl text-[#a45f26] sm:text-4xl">{stat.value}</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.17em] text-[#806e5e]">{stat.label}</p></div>)}</motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-[#dfcfbd]/80 bg-[#f6eee4]/85 backdrop-blur-sm"><motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex w-max items-center gap-8 whitespace-nowrap py-3 text-[9px] font-bold uppercase tracking-[.3em] text-[#a08066]">{[...Array(2)].flatMap((_, group) => services.concat(["Manglam Event Studio", "Made for the moment"]).map((item, index) => <span key={`${group}-${index}`} className="inline-flex items-center gap-8"><span>{item}</span><span className="h-1 w-1 rounded-full bg-[#a45f26]" /></span>))}</motion.div></div>
    </section>
  )
}
