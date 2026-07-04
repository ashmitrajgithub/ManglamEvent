"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Destination Wedding in Goa",
    rating: 5,
    text: "Manglam Event made our dream wedding come true! From the beautiful beachside setup to the seamless coordination, everything was absolutely perfect. Our guests are still talking about how magical it was. The attention to detail was simply incredible!",
    image: "/01.jpeg",
    location: "Goa",
    date: "December 2023",
    initials: "PR",
  },
  {
    name: "Sneha & Arjun Patel",
    event: "Royal Wedding in Rajasthan",
    rating: 5,
    text: "The team at Manglam Event exceeded all our expectations. The royal décor, flawless execution and personal attention made our wedding day absolutely perfect. We couldn't have asked for a better experience. Highly recommended to every couple!",
    image: "/02.jpeg",
    location: "Udaipur",
    date: "November 2023",
    initials: "SA",
  },
  {
    name: "Kavya & Vikram Singh",
    event: "Modern Wedding in Patna",
    rating: 5,
    text: "Professional, creative, and absolutely wonderful to work with. Manglam Event turned our vision into reality and created memories that will last a lifetime. Every single moment was perfectly planned and executed. Thank you for making our day so special!",
    image: "/05.jpeg",
    location: "Patna",
    date: "October 2023",
    initials: "KV",
  },
  {
    name: "Ritu & Sameer Gupta",
    event: "Corporate Annual Celebration",
    rating: 5,
    text: "We hired Manglam Event for our company's annual celebration and they delivered beyond our expectations. The event was professional, engaging, and perfectly organized. Our entire team loved it and the feedback from attendees was outstanding!",
    image: "/04.jpeg",
    location: "Delhi",
    date: "September 2023",
    initials: "RS",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((p) => (p + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label text-amber-400 mb-4">Love Stories</p>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            What Our{" "}
            <span className="text-gold-gradient italic">Clients Say</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base">
            Hundreds of happy couples and clients trust Manglam Event to make their most important moments unforgettable.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto mb-10"
        >
          <div className="glass rounded-3xl border border-white/8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid lg:grid-cols-2"
              >
                {/* Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-amber-500/40 mb-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="font-serif text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8">
                    "{testimonials[current].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-lg font-semibold text-amber-400">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base">{testimonials[current].name}</h4>
                      <p className="text-amber-400 text-sm">{testimonials[current].event}</p>
                      <p className="text-white/30 text-xs mt-0.5">
                        {testimonials[current].location} · {testimonials[current].date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 lg:h-auto min-h-[280px]">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].event}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent lg:block hidden" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 backdrop-blur-sm border border-white/15 text-white hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-200 flex items-center justify-center z-10 hidden lg:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 backdrop-blur-sm border border-white/15 text-white hover:border-amber-500/40 hover:bg-amber-500/10 transition-all duration-200 flex items-center justify-center z-10 hidden lg:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dots & mobile nav */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-white/15 text-white hover:border-amber-500/40 transition-colors flex items-center justify-center lg:hidden">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2 bg-amber-400"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="w-9 h-9 rounded-full border border-white/15 text-white hover:border-amber-500/40 transition-colors flex items-center justify-center lg:hidden">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass rounded-2xl border border-white/8 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+",  label: "Happy Couples" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%",   label: "Satisfaction Rate" },
              { number: "1000+", label: "Events Completed" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl md:text-4xl font-semibold text-amber-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-white/35 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
