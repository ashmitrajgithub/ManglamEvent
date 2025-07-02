"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Play, Star } from "lucide-react"
import Particles from "react-tsparticles"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/01.jpeg",
      title: "Timeless Elegance",
      subtitle: "Awaits You",
      description: "Sophisticated celebrations with unparalleled luxury and refined taste.",
    },
    {
      image: "/03.jpeg",
      title: "Destination Dreams",
      subtitle: "Come True",
      description: "Exotic locations, breathtaking views, unforgettable moments worldwide.",
    },
    {
      image: "/13.jpeg",
      title: "Luxury Redefined",
      subtitle: "Perfection Delivered",
      description: "Every detail crafted to perfection with world-class luxury and sophistication.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Navbar />

      {/* Optional Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Fallback Image Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.05, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Particles Layer */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 1.5 },
            move: { speed: 0.3 },
            opacity: { value: 0.3 },
            color: { value: "#ffffff" },
          },
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center text-white px-6 max-w-6xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div className="flex items-center justify-center mb-8">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 500+ couples</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold leading-tight mb-4 font-serif"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl font-light text-yellow-200 mb-6 font-serif"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 text-gray-200"
            >
              {slides[currentSlide].description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-10 py-4 text-white shadow-xl hover:bg-white/20 transition">
              Plan Your Wedding
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-10 py-4 text-white shadow-xl hover:bg-white/20 transition"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { number: "500+", label: "Happy Couples" },
              { number: "8+", label: "Years Experience" },
              { number: "50+", label: "Awards Won" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 200 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-yellow-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-yellow-400" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
