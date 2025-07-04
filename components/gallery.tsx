"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Heart, MapPin, Star } from "lucide-react"

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "weddings", name: "Weddings" },
    { id: "destinations", name: "Destinations" },
    { id: "decor", name: "Decor" },
    { id: "corporate", name: "Corporate" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "weddings",
      image: "/01.jpeg",
      title: "Royal Palace Wedding",
      location: "Udaipur Palace",
      year: "2024",
    },
    {
      id: 2,
      category: "destinations",
      image: "/02.jpeg",
      title: "Beach Destination Wedding",
      location: "Goa",
      year: "2024",
    },
    {
      id: 3,
      category: "decor",
      image: "/03.jpeg",
      title: "Luxury Wedding Decor",
      location: "Mumbai",
      year: "2023",
    },
    {
      id: 4,
      category: "corporate",
      image: "/04.jpeg",
      title: "Corporate Annual Event",
      location: "Delhi",
      year: "2024",
    },
    {
      id: 5,
      category: "weddings",
      image: "/05.jpeg",
      title: "Traditional Wedding",
      location: "Jaipur",
      year: "2023",
    },
    {
      id: 6,
      category: "destinations",
      image: "/06.jpeg",
      title: "Mountain Wedding",
      location: "Shimla",
      year: "2024",
    },
    {
      id: 7,
      category: "decor",
      image: "/08.jpeg",
      title: "Elegant Reception",
      location: "Bangalore",
      year: "2023",
    },
    {
      id: 8,
      category: "weddings",
      image: "/13.jpeg",
      title: "Grand Celebration",
      location: "Chennai",
      year: "2024",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-amber-700 font-medium text-sm uppercase tracking-wider">Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 leading-tight">
            Our Recent
            <span className="block font-normal bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Discover our portfolio of exceptional weddings and events, showcasing our commitment to excellence and
            attention to detail.
          </p>

          {/* Clean Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "border-amber-600 text-amber-700 hover:bg-amber-50 bg-white"
                } font-medium px-6 py-2 rounded-full transition-all duration-300`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Professional Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image || "/13.jpeg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Clean Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <span className="text-amber-200">{item.year}</span>
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="bg-white/90 hover:bg-white text-gray-900 border-0 rounded-full w-10 h-10 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Interested in Our Work?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              View our complete portfolio and see how we can bring your vision to life with our professional event
              planning services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 flex-1">
                View Full Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-8 py-3 flex-1 bg-white"
              >
                Contact Us
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-amber-500" />
                <span>500+ Events</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-red-500" />
                <span>8 Years Experience</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div>
                <span>Professional Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
