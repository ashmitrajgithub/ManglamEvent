"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X, MapPin, Calendar, ZoomIn } from "lucide-react"

const categories = ["All", "Wedding", "Reception", "Corporate", "Cultural", "Political"]

const portfolioItems = [
  {
    id: 1,
    title: "Royal Palace Wedding",
    category: "Wedding",
    image: "/01.jpeg",
    location: "Patna, Bihar",
    year: "2024",
    description: "A grand celebration with gold and floral themes.",
    size: "large",
  },
  {
    id: 2,
    title: "Garden Reception",
    category: "Reception",
    image: "/02.jpeg",
    location: "Muzaffarpur",
    year: "2024",
    description: "Elegant evening with mesmerizing string lights.",
    size: "small",
  },
  {
    id: 3,
    title: "Traditional Ceremony",
    category: "Wedding",
    image: "/03.jpeg",
    location: "Sitamarhi, Bihar",
    year: "2023",
    description: "Intimate traditional wedding with local artistry.",
    size: "small",
  },
  {
    id: 4,
    title: "Corporate Annual Gala",
    category: "Corporate",
    image: "/04.jpeg",
    location: "Patna Convention Centre",
    year: "2024",
    description: "Annual award night for a top corporate client.",
    size: "large",
  },
  {
    id: 5,
    title: "Floral Grand Wedding",
    category: "Wedding",
    image: "/05.jpeg",
    location: "Nalanda, Bihar",
    year: "2023",
    description: "Stunning floral mandap with 50,000+ flowers.",
    size: "small",
  },
  {
    id: 6,
    title: "Night Reception",
    category: "Reception",
    image: "/06.jpeg",
    location: "Darbhanga",
    year: "2024",
    description: "Enchanting night reception with LED and laser setup.",
    size: "small",
  },
  {
    id: 7,
    title: "Cultural Festival",
    category: "Cultural",
    image: "/08.jpeg",
    location: "Rajgir",
    year: "2023",
    description: "Celebrating traditions with colors, music & dance.",
    size: "large",
  },
  {
    id: 8,
    title: "Grand Celebration",
    category: "Wedding",
    image: "/13.jpeg",
    location: "Gaya, Bihar",
    year: "2024",
    description: "An opulent multi-day wedding extravaganza.",
    size: "small",
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const [lightbox, setLightbox] = useState<typeof portfolioItems[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const filteredItems =
    filter === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === filter)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" ref={ref}>
      {/* Bg accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="section-label text-amber-400 mb-4">Portfolio</p>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Our{" "}
            <span className="text-gold-gradient italic">Masterpieces</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Glimpses of the magic we create. Every image tells a story.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                  : "border border-white/15 text-white/50 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightbox(item)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  item.size === "large"
                    ? "md:col-span-2 aspect-[16/9]"
                    : "aspect-square"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-white leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-1 text-white/50 text-xs mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                    <span className="mx-1">·</span>
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 28 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full object-cover max-h-[75vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">{lightbox.category}</span>
                <h3 className="font-serif text-3xl text-white mt-1">{lightbox.title}</h3>
                <p className="text-white/50 text-sm mt-1">{lightbox.description}</p>
                <div className="flex items-center gap-2 text-white/40 text-xs mt-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lightbox.location}</span>
                  <span className="mx-1">·</span>
                  <span>{lightbox.year}</span>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2.5 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
