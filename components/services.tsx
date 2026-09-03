"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import {
  motion, useInView, useMotionValue, useTransform, useSpring,
  AnimatePresence, animate
} from "framer-motion"
import {
  Sparkles, PartyPopper, Briefcase, Music, Users, Mic2,
  Camera, Flower2, ArrowUpRight, Star, CheckCircle2, Zap
} from "lucide-react"

const WHATSAPP = "https://wa.me/917635031522?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."

const services = [
  {
    title: "Luxury Weddings",
    subtitle: "Royal Celebrations",
    description: "Bespoke royal weddings with thematic décor, custom mandaps, floral arrangements, and seamless coordination from sangeet to vidaai.",
    icon: Sparkles,
    accent: "#d4af37",
    accentRgb: "212,175,55",
    tag: "Most Popular",
    features: ["Custom Mandap Design", "Floral Architecture", "Full Coordination", "Sangeet to Vidaai"],
    number: "01",
  },
  {
    title: "Destination Weddings",
    subtitle: "Beyond Borders",
    description: "Exotic weddings across India and abroad — Goa beaches, Rajasthan palaces, or the hills of Himachal. We handle every detail.",
    icon: PartyPopper,
    accent: "#f472b6",
    accentRgb: "244,114,182",
    tag: null,
    features: ["International Planning", "Venue Scouting", "Travel Logistics"],
    number: "02",
  },
  {
    title: "Corporate Events",
    subtitle: "Brand Experiences",
    description: "Professional conferences, product launches, award nights, and team-building galas. Brand-aligned, impeccably executed.",
    icon: Briefcase,
    accent: "#60a5fa",
    accentRgb: "96,165,250",
    tag: null,
    features: ["Conferences", "Product Launches", "Award Galas"],
    number: "03",
  },
  {
    title: "Concerts & DJ Nights",
    subtitle: "Live Experiences",
    description: "High-energy sound systems, professional lighting rigs, stage fabrication, and crowd management for 100 to 10,000 attendees.",
    icon: Music,
    accent: "#4ade80",
    accentRgb: "74,222,128",
    tag: null,
    features: ["Pro Sound Systems", "Stage Design", "Lighting Rigs"],
    number: "04",
  },
  {
    title: "Political & Public Events",
    subtitle: "Large Scale Ops",
    description: "Large-scale rally management, stage setup, audio-visual infrastructure, and logistics for political and public ceremonies.",
    icon: Users,
    accent: "#fb923c",
    accentRgb: "251,146,60",
    tag: null,
    features: ["Rally Management", "AV Infrastructure", "10K+ Capacity"],
    number: "05",
  },
  {
    title: "Artist Management",
    subtitle: "Star Booking",
    description: "Booking and managing top Bollywood celebrities, classical performers, comedians, DJs, and regional artists for your event.",
    icon: Mic2,
    accent: "#f87171",
    accentRgb: "248,113,113",
    tag: null,
    features: ["Bollywood Stars", "Classical Artists", "Comedians & DJs"],
    number: "06",
  },
  {
    title: "Photography & Video",
    subtitle: "Cinematic Memories",
    description: "Cinematic wedding films, drone coverage, same-day edits, and candid photography by award-winning professionals.",
    icon: Camera,
    accent: "#c084fc",
    accentRgb: "192,132,252",
    tag: null,
    features: ["Drone Coverage", "Same-Day Edits", "Award-Winning Team"],
    number: "07",
  },
  {
    title: "Floral & Decor",
    subtitle: "Living Art",
    description: "Custom floral installations, mandap design, stage decor, table settings, and immersive themed environments.",
    icon: Flower2,
    accent: "#fb7185",
    accentRgb: "251,113,133",
    tag: null,
    features: ["Floral Installations", "Stage Decor", "Themed Environments"],
    number: "08",
  },
]

/* ─── Floating Particle ─── */
function Particle({ color, delay, x, y, size, duration }: {
  color: string; delay: number; x: number; y: number; size: number; duration: number
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
        filter: "blur(1px)",
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, -10, 0],
        opacity: [0.15, 0.5, 0.15],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (!isInView || !ref.current) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return controls.stop
  }, [isInView, value, suffix])
  return <span ref={ref}>0{suffix}</span>
}

/* ─── 3D Tilt Card (Hero) ─── */
function HeroCard3D({ service, isInView }: { service: typeof services[0]; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 })
  const glowX   = useTransform(mouseX, [-0.5, 0.5], ["20%", "80%"])
  const glowY   = useTransform(mouseY, [-0.5, 0.5], ["20%", "80%"])
  const shineX  = useTransform(mouseX, [-0.5, 0.5], ["-60%", "120%"])
  const shineY  = useTransform(mouseY, [-0.5, 0.5], ["-60%", "120%"])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }, [mouseX, mouseY])

  const Icon = service.icon

  // Generate particles client-side only to avoid SSR hydration mismatch
  type ParticleData = { x: number; y: number; size: number; delay: number; color: string; duration: number }
  const [particles, setParticles] = useState<ParticleData[]>([])
  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: i * 0.4,
        duration: 5 + Math.random() * 4,
        color: `rgba(${service.accentRgb},${0.3 + Math.random() * 0.4})`,
      }))
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="perspective-[1200px] h-full" style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full min-h-[500px] rounded-3xl cursor-pointer"
      >
        {/* Card body */}
        <div
          className="relative h-full rounded-3xl overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(${service.accentRgb},0.12) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 80%, rgba(${service.accentRgb},0.06) 0%, transparent 50%),
              #ffffff
            `,
            border: `1px solid rgba(${service.accentRgb},${hovered ? 0.4 : 0.12})`,
            boxShadow: hovered
              ? `0 20px 60px rgba(${service.accentRgb},0.18), 0 0 0 1px rgba(${service.accentRgb},0.25)`
              : `0 4px 20px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.07)`,
            transition: "border 0.4s, box-shadow 0.4s",
          }}
        >
          {/* Floating particles */}
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}

          {/* Holographic mouse-following shine */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(${service.accentRgb},0.12) 0%, transparent 60%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />

          {/* Diagonal shimmer overlay */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: shineY,
              left: shineX,
              width: "200px",
              height: "200px",
              background: `conic-gradient(from 0deg, transparent, rgba(${service.accentRgb},0.08), transparent)`,
              filter: "blur(20px)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />

          {/* Top glowing border line */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.3, scaleX: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 right-0 h-[2px] origin-center"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.accent}, rgba(${service.accentRgb},0.6), transparent)`,
            }}
          />

          {/* Animated corner accents */}
          {[["top-0 left-0", "0 0", "right bottom"],
            ["top-0 right-0", "0 0", "left bottom"],
          ].map(([pos, origin, _], i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-8 h-8 pointer-events-none`}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{ transformOrigin: origin }}
            >
              <div
                className={`w-full h-full border-t-2 ${i === 0 ? "border-l-2 rounded-tl-3xl" : "border-r-2 rounded-tr-3xl"}`}
                style={{ borderColor: service.accent + "80" }}
              />
            </motion.div>
          ))}

          {/* 3D lifted content layer */}
          <div
            className="relative z-10 p-8 md:p-10 flex flex-col h-full"
            style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                {/* Animated icon */}
                <motion.div
                  animate={hovered
                    ? { scale: 1.1, rotate: [0, -5, 5, 0], y: -4 }
                    : { scale: 1, rotate: 0, y: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, rgba(${service.accentRgb},0.25), rgba(${service.accentRgb},0.06))`,
                    border: `1px solid rgba(${service.accentRgb},0.3)`,
                    boxShadow: hovered ? `0 0 30px rgba(${service.accentRgb},0.4), inset 0 0 20px rgba(${service.accentRgb},0.1)` : "none",
                    transition: "box-shadow 0.4s",
                  }}
                >
                  <Icon style={{ color: service.accent }} className="w-8 h-8" />
                  {/* Icon inner glow pulse */}
                  <AnimatePresence>
                    {hovered && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.4, 0], scale: [1, 1.8] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ border: `1px solid rgba(${service.accentRgb},0.5)` }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                {service.tag && (
                  <motion.span
                    animate={hovered ? { scale: 1.05 } : { scale: 1 }}
                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full"
                    style={{
                      background: `rgba(${service.accentRgb},0.15)`,
                      color: service.accent,
                      border: `1px solid rgba(${service.accentRgb},0.4)`,
                      boxShadow: hovered ? `0 0 16px rgba(${service.accentRgb},0.3)` : "none",
                      transition: "box-shadow 0.3s",
                    }}
                  >
                    <Star className="w-2.5 h-2.5 fill-current" />
                    {service.tag}
                  </motion.span>
                )}
              </div>

              {/* Giant number watermark */}
              <motion.span
                animate={hovered ? { opacity: 0.18, scale: 1.05 } : { opacity: 0.07, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="font-mono font-black text-7xl md:text-9xl leading-none select-none"
                style={{ color: service.accent }}
              >
                {service.number}
              </motion.span>
            </div>

            <div className="flex-1 flex flex-col">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.35em] mb-2"
                style={{ color: `rgba(${service.accentRgb},0.65)` }}
              >
                {service.subtitle}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-stone-500 text-base leading-relaxed mb-8 max-w-sm">
                {service.description}
              </p>

              {/* Feature chips with stagger */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((feat, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full cursor-default"
                    style={{
                      background: `rgba(${service.accentRgb},0.08)`,
                      border: `1px solid rgba(${service.accentRgb},0.2)`,
                      color: "rgba(0,0,0,0.65)",
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3" style={{ color: service.accent }} />
                    {feat}
                  </motion.span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest px-7 py-3.5 rounded-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}, rgba(${service.accentRgb},0.7))`,
                    color: "#ffffff",
                    boxShadow: hovered
                      ? `0 12px 40px rgba(${service.accentRgb},0.5), 0 0 0 1px rgba(${service.accentRgb},0.3)`
                      : `0 4px 20px rgba(${service.accentRgb},0.3)`,
                    transition: "box-shadow 0.4s",
                  }}
                >
                  {/* Button shimmer */}
                  <motion.div
                    className="absolute inset-0"
                    animate={hovered ? { x: ["−100%", "200%"] } : { x: "-100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      skewX: "-12deg",
                    }}
                  />
                  <span className="relative">Plan My Wedding</span>
                  <ArrowUpRight className="w-4 h-4 relative" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ─── 3D Small Card ─── */
function SmallCard3D({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 400, damping: 35 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 400, damping: 35 })
  const glowX   = useTransform(mouseX, [-0.5, 0.5], ["15%", "85%"])
  const glowY   = useTransform(mouseY, [-0.5, 0.5], ["15%", "85%"])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }, [mouseX, mouseY])

  const Icon = service.icon

  // Generate particles client-side only to avoid SSR hydration mismatch
  type ParticleData = { x: number; y: number; size: number; delay: number; color: string; duration: number }
  const [particles, setParticles] = useState<ParticleData[]>([])
  useEffect(() => {
    setParticles(
      Array.from({ length: 5 }, (_, i) => ({
        x: 20 + Math.random() * 60,
        y: 10 + Math.random() * 80,
        size: 1.5 + Math.random() * 2,
        delay: i * 0.5,
        duration: 5 + Math.random() * 4,
        color: `rgba(${service.accentRgb},${0.25 + Math.random() * 0.3})`,
      }))
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ perspective: "800px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative cursor-pointer"
      >
        <div
          className="relative min-h-[220px] rounded-2xl overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 20% 20%, ${service.accent}18 0%, transparent 60%), #ffffff`,
            border: `1px solid rgba(${service.accentRgb},${hovered ? 0.4 : 0.09})`,
            boxShadow: hovered
              ? `0 12px 40px ${service.accent}22, 0 0 0 1px ${service.accent}35`
              : `0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.07)`,
            transition: "border 0.35s, box-shadow 0.35s",
          }}
        >
          {/* Particles */}
          {particles.map((p, i) => (
            <Particle key={i} {...p} />
          ))}

          {/* Mouse-following glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(${service.accentRgb},0.1) 0%, transparent 55%)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />

          {/* Top accent bar */}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0.4, opacity: hovered ? 1 : 0.25 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 right-0 h-[1.5px] origin-center"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.accent} 50%, transparent)`,
            }}
          />

          {/* Left accent bar (vertical) */}
          <motion.div
            animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="absolute top-0 left-0 bottom-0 w-[1.5px] origin-top"
            style={{
              background: `linear-gradient(180deg, ${service.accent}, transparent)`,
            }}
          />

          {/* 3D z-lifted content */}
          <div
            className="relative z-10 p-6 flex flex-col h-full"
            style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
          >
            {/* Icon row */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                animate={hovered
                  ? { scale: 1.12, rotate: 8, y: -3 }
                  : { scale: 1, rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, rgba(${service.accentRgb},0.22), rgba(${service.accentRgb},0.06))`,
                  border: `1px solid rgba(${service.accentRgb},0.28)`,
                  boxShadow: hovered ? `0 0 20px rgba(${service.accentRgb},0.4)` : "none",
                  transition: "box-shadow 0.3s",
                }}
              >
                <Icon style={{ color: service.accent }} className="w-[18px] h-[18px]" />

                {/* Pulse ring on hover */}
                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      initial={{ opacity: 0.5, scale: 1 }}
                      animate={{ opacity: 0, scale: 2 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      style={{ border: `1px solid rgba(${service.accentRgb},0.6)` }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.span
                animate={hovered ? { opacity: 0.2 } : { opacity: 0.06 }}
                transition={{ duration: 0.35 }}
                className="font-mono font-black text-4xl leading-none select-none"
                style={{ color: service.accent }}
              >
                {service.number}
              </motion.span>
            </div>

            {/* Text */}
            <p
              className="text-[9px] font-bold uppercase tracking-[0.3em] mb-1"
              style={{ color: `rgba(${service.accentRgb},0.6)` }}
            >
              {service.subtitle}
            </p>
            <h3 className="font-serif text-[1.15rem] font-bold text-stone-900 leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-stone-500 text-[11px] leading-relaxed mb-4 flex-1">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-1.5 mb-4">
              {service.features.slice(0, 2).map((feat, i) => (
                <motion.div
                  key={i}
                  animate={hovered ? { x: 3 } : { x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={hovered ? { scale: 1.3 } : { scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: service.accent, boxShadow: hovered ? `0 0 6px ${service.accent}` : "none" }}
                  />
                  <span className="text-stone-600 text-xs font-medium">{feat}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest mt-auto px-4 py-2 rounded-full w-fit"
              style={{
                background: `rgba(${service.accentRgb},0.12)`,
                color: service.accent,
                border: `1px solid rgba(${service.accentRgb},0.35)`,
                boxShadow: `0 0 12px rgba(${service.accentRgb},0.2)`,
              }}
            >
              Get Quote <ArrowUpRight className="w-3 h-3" />
            </motion.a>
          </div>
        </div>

        {/* 3D shadow plane beneath card */}
        <motion.div
          animate={hovered
            ? { scaleX: 0.88, opacity: 0.4, y: 16 }
            : { scaleX: 0.75, opacity: 0.1, y: 8 }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-4 left-4 right-4 h-8 rounded-2xl pointer-events-none"
          style={{
            background: service.accent,
            filter: "blur(20px)",
          }}
        />
      </motion.div>
    </div>
  )
}

/* ─── Animated Background Mesh ─── */
function AnimatedMesh() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft warm orbs */}
      {[
        { color: "212,175,55", top: "10%", left: "15%", size: 500, duration: 20, delay: 0, opacity: 0.08 },
        { color: "244,114,182", top: "60%", right: "10%", size: 400, duration: 25, delay: 5, opacity: 0.06 },
        { color: "96,165,250", top: "40%", left: "50%", size: 350, duration: 18, delay: 10, opacity: 0.06 },
        { color: "74,222,128", bottom: "10%", left: "30%", size: 300, duration: 22, delay: 3, opacity: 0.06 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: (orb as any).left,
            right: (orb as any).right,
            bottom: (orb as any).bottom,
            background: `rgba(${orb.color},${orb.opacity})`,
          }}
          animate={{
            scale: [1, 1.2, 0.9, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            opacity: [0.5, 0.9, 0.6, 0.5],
          }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  )
}


/* ─── Main Export ─── */
export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const [heroService, ...smallServices] = services

  return (
    <section
      id="services"
      className="py-28 md:py-36 bg-[#faf8f3] relative overflow-hidden"
      ref={ref}
    >
      <AnimatedMesh />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <motion.div
              animate={{ scaleX: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-px w-14 bg-gradient-to-r from-transparent to-amber-400/70"
            />
            <Zap className="w-3 h-3 text-amber-400" fill="#d4af37" />
            <span className="text-amber-700 text-xs font-black uppercase tracking-[0.3em]">
              What We Do
            </span>
            <Zap className="w-3 h-3 text-amber-400" fill="#d4af37" />
            <motion.div
              animate={{ scaleX: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="h-px w-14 bg-gradient-to-l from-transparent to-amber-400/70"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 mb-6 leading-[1.05]"
          >
            Our{" "}
            <span
              className="italic relative inline-block"
              style={{
                background: "linear-gradient(135deg, #d4af37 0%, #f0d060 40%, #d4af37 60%, #b8860b 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "goldShift 4s ease infinite",
              }}
            >
              Services
              {/* Underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left"
                style={{
                  background: "linear-gradient(90deg, #d4af37, #f0d060, #d4af37)",
                }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed"
          >
            End-to-end event management with artistry, precision, and a touch of magic —
            <br className="hidden md:block" /> tailored to every vision, every dream, every occasion.
          </motion.p>

          {/* Animated stat counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-12 mt-12"
          >
            {[
              { value: 500, suffix: "+", label: "Events Delivered" },
              { value: 8, suffix: "", label: "Service Categories" },
              { value: 100, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                className="text-center cursor-default"
              >
                <p
                  className="text-2xl md:text-3xl font-black font-serif text-stone-900"
                  style={{
                    background: "linear-gradient(135deg, #d4af37, #f0d060)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
          {/* Hero Card — spans 2 cols × 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotateX: "8deg" }}
            animate={isInView ? { opacity: 1, scale: 1, rotateX: "0deg" } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 lg:row-span-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            <HeroCard3D service={heroService} isInView={isInView} />
          </motion.div>

          {/* Small cards */}
          {smallServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: (index + 1) * 0.09,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <SmallCard3D service={service} index={index} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-stone-400 text-sm mb-7 tracking-wide">
            Not sure which service fits your event? Let us help.
          </p>
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest px-9 py-4 rounded-full relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #b8860b 100%)",
              backgroundSize: "200% 100%",
              color: "#000",
              boxShadow: "0 8px 40px rgba(212,175,55,0.35)",
              animation: "goldShift 3s ease infinite",
            }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none hidden"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                skewX: "-12deg",
              }}
            />
            <Star className="w-4 h-4 fill-current relative z-10" />
            <span className="relative z-10">Speak with Our Expert Planners</span>
            <ArrowUpRight className="w-4 h-4 relative z-10" />
          </motion.a>
        </motion.div>
      </div>

      {/* CSS for gold gradient animation */}
      <style jsx global>{`
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
