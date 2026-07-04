"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const WHATSAPP = "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20would%20like%20to%20plan%20my%20event."

const STATS = [
  { value: "500+", label: "Events" },
  { value: "10+",  label: "Years" },
  { value: "4.9★", label: "Rating" },
  { value: "98%",  label: "Happy Clients" },
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleScrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
  }
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/11.jpeg"
          alt="Manglam Event — Luxury Wedding"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-yellow-600/8 rounded-full blur-[100px]" />
      </div>

      {/* Decorative rings */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="w-[32rem] h-[32rem] rounded-full border border-amber-500/10 absolute" />
        <div className="w-[42rem] h-[42rem] rounded-full border border-amber-500/5 absolute" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        {/* Label */}
        <motion.p
          className="section-label text-amber-400/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bihar's Premier Wedding & Event Planning
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We Don't{" "}
          <span className="italic text-gold-gradient">Organize</span>
          <br />
          Events —{" "}
          <span className="text-gold-gradient">We Create</span>
          <br />
          <span className="italic">Experiences</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          From intimate mandaps to royal celebrations, every detail is crafted to feel
          timeless, elegant, and deeply personal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            size="lg"
            onClick={handleScrollToContact}
            className="rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold px-10 py-6 text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-pulse-glow"
          >
            Plan Your Event
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToGallery}
            className="rounded-full border-white/30 px-10 py-6 text-base text-white/80 hover:bg-white/8 hover:text-white hover:border-white/60 backdrop-blur-sm transition-all hover:scale-105"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="absolute bottom-24 left-0 right-0 z-10 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="glass rounded-2xl px-8 py-4 flex gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-semibold text-amber-400 leading-none">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
