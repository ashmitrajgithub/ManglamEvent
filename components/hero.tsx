"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Check, ChevronDown, Play, Star } from "lucide-react"
import Image from "next/image"

const SERVICES = ["Weddings", "Corporate events", "Live experiences"]

const headingLine = {
  hidden: { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
}

export default function Hero() {
  const [ready, setReady] = useState(false)
  const visualRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 150, damping: 26 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3.5, 3.5]), { stiffness: 150, damping: 26 })

  useEffect(() => setReady(true), [])

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = visualRef.current?.getBoundingClientRect()
    if (!bounds) return
    mx.set((event.clientX - bounds.left) / bounds.width - 0.5)
    my.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }, [mx, my])

  const resetPointer = useCallback(() => { mx.set(0); my.set(0) }, [mx, my])
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#fbf8f2] text-[#201712]">
      <div className="pointer-events-none absolute -right-64 -top-56 h-[40rem] w-[40rem] rounded-full bg-[#f3d8ad]/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-16rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#ebd1b1]/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[1480px] flex-col px-6 pb-8 pt-28 sm:px-10 lg:px-16 lg:pt-32 xl:px-24">
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="relative z-10 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }} className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-[#a45f26] sm:text-xs"><span className="h-px w-9 bg-[#a45f26]" /> Manglam Event · Patna, Bihar</motion.div>
              <motion.h1 initial="hidden" animate={ready ? "visible" : "hidden"} className="font-serif text-[clamp(3.55rem,6.2vw,6.8rem)] font-medium leading-[.86] tracking-[-.065em]"><span className="block overflow-hidden pb-1 sm:whitespace-nowrap"><motion.span variants={headingLine} transition={{ duration: .85, delay: .12, ease: [0.22, 1, 0.36, 1] }} className="block">We make your</motion.span></span><span className="block overflow-hidden pb-1 sm:whitespace-nowrap"><motion.span variants={headingLine} transition={{ duration: .85, delay: .24, ease: [0.22, 1, 0.36, 1] }} className="block"><span className="italic text-[#ae6c32]">biggest</span> moments</motion.span></span><span className="block overflow-hidden pb-1 sm:whitespace-nowrap"><motion.span variants={headingLine} transition={{ duration: .85, delay: .36, ease: [0.22, 1, 0.36, 1] }} className="block">feel effortless.</motion.span></span></motion.h1>
              <motion.p initial={{ opacity: 0, y: 15 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .38 }} className="mt-9 max-w-lg text-[15px] leading-7 text-[#5c5047]">A full-service event company for celebrations with meaning, atmosphere, and impeccable execution—from the first idea to the final guest goodbye.</motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .52 }} className="mt-9 flex flex-wrap items-center gap-5"><button onClick={() => scrollTo("contact")} className="group inline-flex items-center gap-4 rounded-full bg-[#a45f26] px-7 py-4 text-xs font-bold uppercase tracking-[.16em] text-white shadow-[0_12px_28px_rgba(164,95,38,.24)] transition hover:-translate-y-0.5 hover:bg-[#824819]">Start planning <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button><button onClick={() => scrollTo("gallery")} className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-[#675a50] transition hover:text-[#a45f26]"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bd9d7e] transition group-hover:border-[#a45f26] group-hover:bg-[#f2e3d3]"><Play className="ml-0.5 h-3 w-3 fill-current" /></span>See our work</button></motion.div>
              <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ duration: .7, delay: .7 }} className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dfcfbd] pt-5">{SERVICES.map((service) => <span key={service} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#806e5e]"><Check className="h-3.5 w-3.5 text-[#a45f26]" />{service}</span>)}</motion.div>
            </div>

            <motion.div ref={visualRef} onPointerMove={onPointerMove} onPointerLeave={resetPointer} initial={{ opacity: 0, x: 32, scale: .97 }} animate={ready ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: 1, delay: .2 }} className="relative h-[470px] [perspective:1100px] sm:h-[590px] lg:h-[680px]">
              <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="absolute inset-0 overflow-hidden rounded-[2.75rem] bg-[#ead6bf] shadow-[0_30px_80px_rgba(77,46,24,.18)]"><Image src="/01.jpeg" alt="Manglam Event floral wedding installation" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center brightness-[1.22] saturate-[.88]" /><div className="absolute inset-0 bg-gradient-to-t from-[#21140d]/30 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#21140d]/25 to-transparent" />
                <div style={{ transform: "translateZ(55px)" }} className="absolute left-6 top-6 rounded-full border border-white/35 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-white backdrop-blur-md"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#efb66c]" /> Live beautifully</div>
                <div style={{ transform: "translateZ(55px)" }} className="absolute bottom-7 left-7 right-7 flex items-end justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-white/65">Featured production</p><p className="mt-1 font-serif text-3xl italic text-white sm:text-4xl">Royal floral evening</p></div><div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white sm:flex"><ArrowRight className="h-4 w-4 -rotate-45" /></div></div>
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-5 rounded-2xl border border-[#e0c5a5] bg-[#fffdf8]/95 px-5 py-4 shadow-xl sm:left-7"><div className="flex items-center gap-2"><div className="flex text-[#bd7b39]"><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /><Star className="h-3 w-3 fill-current" /></div><span className="text-xs font-bold text-[#6b5b4d]">4.9/5</span></div><p className="mt-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#917a66]">Loved by 500+ clients</p></motion.div>
              <div className="absolute -right-7 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full border border-dashed border-[#b87531]/45 lg:block" />
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .85 }} className="mt-16 grid max-w-xl grid-cols-3 border-t border-[#dfcfbd] pt-5 lg:mt-12">{[{ value: "500+", label: "Events delivered" }, { value: "10+", label: "Years of expertise" }, { value: "98%", label: "Happy clients" }].map((stat, i) => <div key={stat.label} className={i ? "border-l border-[#dfcfbd] pl-4 sm:pl-7" : ""}><p className="font-serif text-2xl text-[#a45f26] sm:text-3xl">{stat.value}</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.13em] text-[#806e5e]">{stat.label}</p></div>)}</motion.div>
      </div>
      <button onClick={() => scrollTo("about")} className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[9px] font-bold uppercase tracking-[.25em] text-[#a08066] lg:flex"><span>Discover</span><ChevronDown className="h-4 w-4 animate-bounce" /></button>
    </section>
  )
}
