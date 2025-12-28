"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  PartyPopper,
  Music,
  Mic2,
  Briefcase,
  Building2,
  Users,
  Star,
  Sparkles
} from "lucide-react"

const services = [
  {
    title: "Luxury Weddings",
    description: "Creating royal, dream-like weddings with bespoke themes.",
    icon: <Sparkles className="w-12 h-12 text-yellow-500" />,
    bg: "bg-gradient-to-br from-purple-900 to-black"
  },
  {
    title: "Destination Weddings",
    description: "Seamless planning for exotic locations worldwide.",
    icon: <PartyPopper className="w-12 h-12 text-pink-500" />,
    bg: "bg-gradient-to-br from-pink-900 to-black"
  },
  {
    title: "Corporate Events",
    description: "Professional conferences, product launches & galas.",
    icon: <Briefcase className="w-12 h-12 text-blue-500" />,
    bg: "bg-gradient-to-br from-blue-900 to-black"
  },
  {
    title: "Concerts & DJ Nights",
    description: "High-energy sound, light & stage setups.",
    icon: <Music className="w-12 h-12 text-green-500" />,
    bg: "bg-gradient-to-br from-green-900 to-black"
  },
  {
    title: "Political & Public Events",
    description: "Large-scale crowd management & stage fabrication.",
    icon: <Users className="w-12 h-12 text-orange-500" />,
    bg: "bg-gradient-to-br from-orange-900 to-black"
  },
  {
    title: "Artist Management",
    description: "Booking celebrities, singers & performers.",
    icon: <Mic2 className="w-12 h-12 text-red-500" />,
    bg: "bg-gradient-to-br from-red-900 to-black"
  }
]

export default function Services() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-yellow-500">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We bring your vision to life with precision and creativity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className={`relative p-8 rounded-2xl border border-white/10 ${service.bg} overflow-hidden group cursor-pointer`}
            style={{ perspective: "1000px" }}
        >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-full inline-block backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                <div className="flex items-center text-yellow-500 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    Learn More <span className="ml-2">→</span>
                </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
        </motion.div>
    )
}
