"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Sparkles, PartyPopper, Briefcase, Music, Users, Mic2,
  Camera, Flower2, ArrowRight
} from "lucide-react"

const WHATSAPP = "https://wa.me/917635031522?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."

const services = [
  {
    title: "Luxury Weddings",
    description: "Bespoke royal weddings with thematic décor, custom mandaps, floral arrangements, and seamless coordination from sangeet to vidaai.",
    icon: Sparkles,
    color: "from-amber-900/40 to-black",
    iconColor: "text-amber-400",
    glow: "rgba(251,191,36,0.2)",
    tag: "Most Popular",
  },
  {
    title: "Destination Weddings",
    description: "Exotic weddings across India and abroad — Goa beaches, Rajasthan palaces, or the hills of Himachal. We handle every detail.",
    icon: PartyPopper,
    color: "from-pink-900/40 to-black",
    iconColor: "text-pink-400",
    glow: "rgba(244,114,182,0.2)",
    tag: null,
  },
  {
    title: "Corporate Events",
    description: "Professional conferences, product launches, award nights, and team-building galas. Brand-aligned, impeccably executed.",
    icon: Briefcase,
    color: "from-blue-900/40 to-black",
    iconColor: "text-blue-400",
    glow: "rgba(96,165,250,0.2)",
    tag: null,
  },
  {
    title: "Concerts & DJ Nights",
    description: "High-energy sound systems, professional lighting rigs, stage fabrication, and crowd management for 100 to 10,000 attendees.",
    icon: Music,
    color: "from-green-900/40 to-black",
    iconColor: "text-green-400",
    glow: "rgba(74,222,128,0.2)",
    tag: null,
  },
  {
    title: "Political & Public Events",
    description: "Large-scale rally management, stage setup, audio-visual infrastructure, and logistics for political and public ceremonies.",
    icon: Users,
    color: "from-orange-900/40 to-black",
    iconColor: "text-orange-400",
    glow: "rgba(251,146,60,0.2)",
    tag: null,
  },
  {
    title: "Artist Management",
    description: "Booking and managing top Bollywood celebrities, classical performers, comedians, DJs, and regional artists for your event.",
    icon: Mic2,
    color: "from-red-900/40 to-black",
    iconColor: "text-red-400",
    glow: "rgba(248,113,113,0.2)",
    tag: null,
  },
  {
    title: "Photography & Video",
    description: "Cinematic wedding films, drone coverage, same-day edits, and candid photography by award-winning professionals.",
    icon: Camera,
    color: "from-purple-900/40 to-black",
    iconColor: "text-purple-400",
    glow: "rgba(167,139,250,0.2)",
    tag: null,
  },
  {
    title: "Floral & Decor",
    description: "Custom floral installations, mandap design, stage decor, table settings, and immersive themed environments.",
    icon: Flower2,
    color: "from-rose-900/40 to-black",
    iconColor: "text-rose-400",
    glow: "rgba(251,113,133,0.2)",
    tag: null,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label text-amber-400 mb-4">What We Do</p>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Our{" "}
            <span className="text-gold-gradient italic">Services</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base leading-relaxed">
            End-to-end event management with artistry, precision, and a touch of magic — tailored to your vision.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`relative p-6 rounded-2xl border border-white/8 bg-gradient-to-br ${service.color} overflow-hidden group cursor-pointer`}
                style={{
                  boxShadow: `0 0 0 0px ${service.glow}`,
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${service.glow}`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0px ${service.glow}`
                }}
              >
                {/* Tag */}
                {service.tag && (
                  <div className="absolute top-4 right-4 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase">
                    {service.tag}
                  </div>
                )}

                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-full h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_ease_infinite]" />
                </div>

                {/* Icon */}
                <div className={`mb-5 p-3 bg-white/5 rounded-xl inline-flex group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className={`font-serif text-xl font-semibold text-white mb-2 group-hover:${service.iconColor} transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* CTA */}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase ${service.iconColor} opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}
                >
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
