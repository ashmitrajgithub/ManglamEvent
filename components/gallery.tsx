"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Crown } from "lucide-react"

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    { id: "all", name: "All Events", count: 120 },
    { id: "weddings", name: "Weddings", count: 85 },
    { id: "destinations", name: "Destinations", count: 25 },
    { id: "decor", name: "Decor", count: 40 },
    { id: "corporate", name: "Corporate", count: 15 },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "weddings",
      image: "/01.jpeg?height=500&width=400&text=Elegant+Wedding+Ceremony",
      title: "Elegant Wedding Ceremony",
      location: "Udaipur Palace",
      likes: 245,
    },
    {
      id: 2,
      category: "destinations",
      image: "/02.jpeg?height=600&width=400&text=Beach+Destination+Wedding",
      title: "Beach Destination Wedding",
      location: "Goa Beaches",
      likes: 189,
    },
    {
      id: 3,
      category: "decor",
      image: "/03.jpeg?height=500&width=400&text=Luxury+Wedding+Decor",
      title: "Luxury Wedding Decor",
      location: "Mumbai",
      likes: 156,
    },
    {
      id: 4,
      category: "corporate",
      image: "/04.jpeg?height=400&width=400&text=Corporate+Event",
      title: "Corporate Annual Event",
      location: "Delhi",
      likes: 98,
    },
    {
      id: 5,
      category: "weddings",
      image: "/05.jpeg?height=600&width=400&text=Traditional+Wedding",
      title: "Traditional Wedding",
      location: "Jaipur",
      likes: 312,
    },
    {
      id: 6,
      category: "destinations",
      image: "/06.jpeg?height=500&width=400&text=Mountain+Wedding",
      title: "Mountain Wedding",
      location: "Shimla Hills",
      likes: 203,
    },
    {
      id: 7,
      category: "decor",
      image: "/08.jpeg?height=400&width=400&text=Romantic+Table+Setting",
      title: "Romantic Table Setting",
      location: "Bangalore",
      likes: 167,
    },
    {
      id: 8,
      category: "weddings",
      image: "/13.jpeg?height=600&width=400&text=Grand+Reception",
      title: "Grand Reception",
      location: "Chennai",
      likes: 278,
    },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-amber-50"></div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Eye className="h-8 w-8 text-amber-600" />
            </motion.div>
            <span className="text-amber-700 font-semibold text-lg tracking-wide uppercase">Portfolio</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            >
              <Eye className="h-8 w-8 text-amber-600" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Our Beautiful
            </motion.span>
            <br />
            <span className="text-gray-800">Creations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Explore our portfolio of stunning weddings and events that showcase our creativity, attention to detail, and
            commitment to excellence.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white shadow-lg"
                      : "border-2 border-amber-600 text-amber-700 hover:bg-amber-50"
                  } font-semibold px-6 py-3 rounded-full transition-all duration-300`}
                >
                  {category.name}
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"
                  >
                    {category.count}
                  </motion.span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image || "/13.jpeg"}
                      alt={item.title}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    />

                    {/* Content Overlay */}
                    <motion.div
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl font-bold mb-2"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-amber-200 mb-3 flex items-center"
                      >
                        <span className="mr-2">📍</span>
                        {item.location}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Heart className="h-4 w-4 text-amber-400" />
                          </motion.div>
                          <span className="text-sm">{item.likes}</span>
                        </div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-900 border-0 rounded-full"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Top Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                    >
                      <Heart className="h-4 w-4 text-amber-600" />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 inline-block"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Want to see more of our work?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-gray-600 mb-6"
            >
              Discover hundreds of beautiful weddings and events in our complete portfolio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Crown className="mr-2 h-5 w-5" />
                View Complete Gallery
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
