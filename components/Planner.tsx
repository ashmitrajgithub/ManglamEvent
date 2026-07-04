"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Calculator, Check, MessageCircle } from "lucide-react"

const WHATSAPP_BASE = "https://wa.me/917635031522?text="

export default function Planner() {
  const [guests, setGuests] = useState([200])
  const [eventType, setEventType] = useState("wedding")
  const [decorLevel, setDecorLevel] = useState("premium")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const calculateEstimate = () => {
    const base: Record<string, number> = { wedding: 200000, corporate: 100000, social: 50000 }
    const mult: Record<string, number> = { standard: 1, premium: 1.5, luxury: 2.5 }
    return (base[eventType] * mult[decorLevel]) + guests[0] * 800
  }

  const estimate = calculateEstimate()
  const estimateStr = `₹${(estimate / 100000).toFixed(2)} Lakhs`

  const waMessage = encodeURIComponent(
    `Hello Manglam Event! I used your event planner tool and got an estimate of ${estimateStr} for a ${eventType} event with ${guests[0]} guests and ${decorLevel} decoration. Can you share a detailed quote?`
  )

  const eventTypes = [
    { id: "wedding",   label: "Wedding",   emoji: "💍" },
    { id: "corporate", label: "Corporate", emoji: "🏢" },
    { id: "social",    label: "Social",    emoji: "🎉" },
  ]

  const decorLevels = [
    { id: "standard", label: "Standard", desc: "Elegant & Simple",    price: "₹" },
    { id: "premium",  label: "Premium",  desc: "Thematic & Rich",     price: "₹₹" },
    { id: "luxury",   label: "Luxury",   desc: "Royal & Cinematic",   price: "₹₹₹" },
  ]

  return (
    <section id="planner" className="py-24 md:py-32 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="section-label text-amber-400 mb-4">Plan Ahead</p>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Event{" "}
            <span className="text-gold-gradient italic">Cost Estimator</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Get a quick estimate for your dream event and share it directly on WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl border border-white/8 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Controls */}
          <div className="space-y-8">
            {/* Event Type */}
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                Event Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEventType(type.id)}
                    className={`py-3.5 px-2 rounded-xl border text-sm font-medium capitalize transition-all duration-200 ${
                      eventType === type.id
                        ? "bg-amber-500/15 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                        : "border-white/10 text-white/40 hover:bg-white/5 hover:text-white/70"
                    }`}
                  >
                    <div className="text-lg mb-1">{type.emoji}</div>
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                  Guest Count
                </label>
                <span className="text-amber-400 font-bold text-sm">{guests[0].toLocaleString()} Guests</span>
              </div>
              <Slider
                value={guests}
                onValueChange={setGuests}
                max={2000}
                min={50}
                step={50}
                className="py-3"
              />
              <div className="flex justify-between text-white/25 text-xs mt-1">
                <span>50</span>
                <span>2,000</span>
              </div>
            </div>

            {/* Decor Level */}
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                Decoration Level
              </label>
              <div className="space-y-2.5">
                {decorLevels.map((level) => (
                  <div
                    key={level.id}
                    onClick={() => setDecorLevel(level.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      decorLevel === level.id
                        ? "bg-amber-500/10 border-amber-500/40"
                        : "border-white/8 hover:border-white/20 hover:bg-white/3"
                    }`}
                  >
                    <div>
                      <h4 className={`font-medium text-sm ${decorLevel === level.id ? "text-amber-400" : "text-white/70"}`}>
                        {level.label}
                      </h4>
                      <p className="text-white/30 text-xs mt-0.5">{level.desc}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/25 text-sm">{level.price}</span>
                      {decorLevel === level.id && (
                        <Check className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="flex flex-col justify-center items-center glass-gold rounded-2xl p-8 text-center">
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-full mb-6">
              <Calculator className="w-8 h-8 text-amber-400" />
            </div>

            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">
              Estimated Investment
            </p>

            <motion.div
              key={estimate}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="font-serif text-5xl md:text-6xl font-semibold text-white mb-1"
            >
              ₹{(estimate / 100000).toFixed(2)}
            </motion.div>
            <p className="text-amber-400 font-medium mb-1">Lakhs*</p>
            <p className="text-white/25 text-xs mb-8">*Approximate. Actuals depend on final requirements.</p>

            <div className="w-full space-y-3">
              <a
                href={`${WHATSAPP_BASE}${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                Get Exact Quote on WhatsApp
              </a>
              <p className="text-white/25 text-xs">Our team responds within 2 hours</p>
            </div>

            {/* Breakdown */}
            <div className="w-full mt-6 pt-6 border-t border-white/8 space-y-2 text-left">
              {[
                { label: "Base Package", val: `₹${((eventType === "wedding" ? 200000 : eventType === "corporate" ? 100000 : 50000) / 1000).toFixed(0)}K` },
                { label: "Decor Multiplier", val: `×${decorLevel === "standard" ? "1.0" : decorLevel === "premium" ? "1.5" : "2.5"}` },
                { label: `${guests[0]} Guests (@₹800)`, val: `₹${(guests[0] * 800 / 1000).toFixed(0)}K` },
              ].map((row, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-white/30">{row.label}</span>
                  <span className="text-white/50">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
