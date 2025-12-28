"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, Check } from "lucide-react"

export default function Planner() {
  const [guests, setGuests] = useState([200])
  const [eventType, setEventType] = useState("wedding")
  const [decorLevel, setDecorLevel] = useState("premium")

  const calculateEstimate = () => {
    let basePrice = 50000
    if (eventType === "wedding") basePrice = 200000
    if (eventType === "corporate") basePrice = 100000

    let multiplier = 1
    if (decorLevel === "standard") multiplier = 1
    if (decorLevel === "premium") multiplier = 1.5
    if (decorLevel === "luxury") multiplier = 2.5

    const guestCost = guests[0] * 800 // approx per plate + basic arrangements

    return (basePrice * multiplier) + guestCost
  }

  const estimate = calculateEstimate()

  return (
    <section className="py-20 bg-zinc-900 text-white" id="planner">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Plan Your <span className="text-yellow-500">Event</span></h2>
            <p className="text-gray-400">Get a quick cost estimate for your dream event.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/40 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="space-y-8">
                {/* Event Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Event Type</label>
                    <div className="grid grid-cols-3 gap-4">
                        {['wedding', 'corporate', 'social'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setEventType(type)}
                                className={`py-3 rounded-xl border capitalize transition-all ${
                                    eventType === type
                                    ? 'bg-yellow-600/20 border-yellow-500 text-yellow-500'
                                    : 'border-white/10 hover:bg-white/5 text-gray-400'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Guest Count */}
                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-medium text-gray-300">Guest Count</label>
                        <span className="text-yellow-500 font-bold">{guests[0]} Guests</span>
                    </div>
                    <Slider
                        value={guests}
                        onValueChange={setGuests}
                        max={2000}
                        step={50}
                        className="py-4"
                    />
                </div>

                {/* Decor Level */}
                 <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Decoration Level</label>
                    <div className="space-y-3">
                        {[
                            { id: 'standard', label: 'Standard', desc: 'Elegant & Simple' },
                            { id: 'premium', label: 'Premium', desc: 'Thematic & Rich' },
                            { id: 'luxury', label: 'Luxury', desc: 'Royal & Cinematic' },
                        ].map((level) => (
                            <div
                                key={level.id}
                                onClick={() => setDecorLevel(level.id)}
                                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                                    decorLevel === level.id
                                    ? 'bg-yellow-600/10 border-yellow-500'
                                    : 'border-white/10 hover:border-white/30'
                                }`}
                            >
                                <div>
                                    <h4 className={`font-bold ${decorLevel === level.id ? 'text-yellow-500' : 'text-white'}`}>{level.label}</h4>
                                    <p className="text-xs text-gray-400">{level.desc}</p>
                                </div>
                                {decorLevel === level.id && <Check className="w-5 h-5 text-yellow-500" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Result Panel */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-br from-yellow-900/20 to-black p-8 rounded-2xl border border-yellow-500/20 text-center">
                <div className="bg-yellow-500/10 p-4 rounded-full mb-6">
                    <Calculator className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Estimated Cost</h3>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    ₹{(estimate / 100000).toFixed(2)} Lakhs*
                </div>
                <p className="text-xs text-gray-500 mb-8">*Approximate estimation. Actuals may vary.</p>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-6 text-lg rounded-xl mb-4">
                    Get Exact Quote on WhatsApp
                </Button>
                <p className="text-xs text-gray-400">Our team will contact you within 24 hours.</p>
            </div>
        </div>
      </div>
    </section>
  )
}
