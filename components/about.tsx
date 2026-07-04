"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const timeline = [
  { year: "2014", title: "The Beginning",       desc: "Started with birthday parties & small gatherings in Patna.",         highlight: false },
  { year: "2017", title: "Expanded to Weddings", desc: "Executed our first destination wedding in Rajgir — a royal affair.",   highlight: false },
  { year: "2020", title: "Corporate Giants",     desc: "Partnered with top brands for product launches & award nights.",       highlight: false },
  { year: "2024", title: "Premium Experience",   desc: "Launched 3D visualization, luxury decor & artist management services.", highlight: true  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const events  = useCountUp(500, 1800, isInView)
  const years   = useCountUp(10,  1200, isInView)
  const clients = useCountUp(98,  1600, isInView)

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Text & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="section-label mb-4">Our Story</p>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Crafting Memories
              <br />
              Since{" "}
              <span className="text-gold-gradient italic">2014</span>
            </h2>

            <div className="space-y-4 text-white/55 text-base leading-relaxed mb-10">
              <p>
                What started as a small passion project in Patna has grown into Bihar's most trusted
                premium event management company. At{" "}
                <strong className="text-white/80">Manglam Event</strong>, every celebration is a
                story waiting to be told.
              </p>
              <p>
                From intimate gatherings to grand royal weddings, our journey has been defined by
                creativity, precision, and the smiles of our{" "}
                <span className="text-amber-400 font-medium">500+ happy clients</span>.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-amber-500/40 pl-5 mb-12">
              <p className="font-serif text-xl text-white/70 italic leading-relaxed">
                "We don't just arrange things; we design feelings."
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: `${events}+`, label: "Events Done" },
                { val: `${years}+`,  label: "Years Exp." },
                { val: `${clients}%`, label: "Satisfaction" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="glass-gold rounded-xl p-4 text-center"
                >
                  <div className="font-serif text-3xl font-semibold text-amber-400">{s.val}</div>
                  <div className="text-white/40 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image + Timeline */}
          <div className="relative">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden mb-10 aspect-[4/3]"
            >
              <Image
                src="/01.jpeg"
                alt="Manglam Event — Luxury Wedding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 glass-gold px-4 py-2 rounded-full">
                <span className="text-amber-400 text-sm font-medium">Est. 2014 · Patna, Bihar</span>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative border-l-2 border-amber-500/20 pl-8 space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className={`absolute -left-[41px] top-0.5 w-4 h-4 rounded-full border-2 border-black transition-all ${
                      item.highlight
                        ? "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
                        : "bg-zinc-700"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold tracking-widest ${
                      item.highlight ? "text-amber-400" : "text-white/30"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h4
                    className={`font-serif text-xl font-medium mt-0.5 ${
                      item.highlight ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
