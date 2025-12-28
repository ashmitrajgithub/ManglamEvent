"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["All", "Wedding", "Reception", "Political", "Corporate", "Cultural"]

const portfolioItems = [
  {
    id: 1,
    title: "Royal Palace Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    description: "A grand celebration with gold and floral themes."
  },
  {
    id: 2,
    title: "Corporate Gala 2024",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    description: "Annual award night for Tech Giants."
  },
  {
    id: 3,
    title: "Grand Reception",
    category: "Reception",
    image: "https://images.unsplash.com/photo-1519225448526-7299586ec78e?auto=format&fit=crop&q=80&w=800",
    description: "Elegant evening with mesmerizing lights."
  },
  {
    id: 4,
    title: "Cultural Fest",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=800",
    description: "Celebrating traditions with colors and music."
  },
  {
    id: 5,
    title: "Political Rally",
    category: "Political",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    description: "Massive crowd management and stage setup."
  },
  {
    id: 6,
    title: "Destination Wedding Goa",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
    description: "Sunset vows by the beach."
  }
]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter)

  return (
    <section className="py-20 px-4 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-bold mb-4"
           >
             Our <span className="text-yellow-500">Masterpieces</span>
           </motion.h2>
           <p className="text-gray-400">Glimpses of the magic we create.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full border transition-all ${
                        filter === cat
                        ? "bg-yellow-500 border-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/20"
                        : "border-white/20 hover:border-yellow-500 hover:text-yellow-500 text-gray-300"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredItems.map((item) => (
                    <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider mb-2">{item.category}</span>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                View Full Gallery
            </Button>
        </div>
      </div>
    </section>
  )
}
