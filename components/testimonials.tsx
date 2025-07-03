"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Priya & Rahul Sharma",
      event: "Destination Wedding in Goa",
      rating: 5,
      text: "Manglam Event made our dream wedding come true! From the beautiful beachside setup to the seamless coordination, everything was absolutely perfect. Our guests are still talking about how magical and unforgettable our wedding was. The attention to detail was incredible!",
      clientImage: "/r1.jpg", // Client image
      uniqueImage: "/r2.jpg", // Unique image for this testimonial
      location: "Goa",
      date: "December 2023",
    },
    {
      name: "Sneha & Arjun Patel",
      event: "Royal Wedding in Rajasthan",
      rating: 5,
      text: "The team at Manglam Event exceeded all our expectations and more. The attention to detail, the beautiful royal decor, and the flawless execution made our wedding day absolutely perfect. We couldn't have asked for a better wedding planning experience. Highly recommended!",
      clientImage: "/images/client2.jpg", // Client image
      uniqueImage: "/r1.jpg", // Unique image for this testimonial
      location: "Udaipur",
      date: "November 2023",
    },
    {
      name: "Kavya & Vikram Singh",
      event: "Modern Wedding in Mumbai",
      rating: 5,
      text: "Professional, creative, and absolutely wonderful to work with. Manglam Event turned our vision into reality and created memories that will last a lifetime. Every moment was perfectly planned and executed. Thank you for making our day so incredibly special!",
      clientImage: "/images/client3.jpg", // Client image
      uniqueImage: "/images/mumbai-wedding.jpg", // Unique image for this testimonial
      location: "Mumbai",
      date: "October 2023",
    },
    {
      name: "Ritu & Sameer Gupta",
      event: "Corporate Annual Celebration",
      rating: 5,
      text: "We hired Manglam Event for our company's annual celebration, and they delivered beyond our expectations. The event was professional, engaging, and perfectly organized. Our entire team loved it and we received amazing feedback from all attendees!",
      clientImage: "/images/client4.jpg", // Client image
      uniqueImage: "/images/delhi-celebration.jpg", // Unique image for this testimonial
      location: "Delhi",
      date: "September 2023",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gray-50" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-amber-600" />
            <span className="text-amber-700 font-semibold text-lg tracking-wide uppercase">Testimonials</span>
            <Heart className="h-8 w-8 text-amber-600" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">

<span className="text-gray-900">What Our Clients</span>

<br />

<span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent">

  Say About Us

</span>

</motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy couples and clients have to say about their
            incredible experience with Manglam Event.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          <Card className="border-0 shadow-2xl bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid lg:grid-cols-2"
                >
                  {/* Content Side */}
                  <div className="p-12 lg:p-16 flex flex-col justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <Quote className="h-16 w-16 text-amber-600 mb-8" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-start mb-8"
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                        >
                          <Star className="h-7 w-7 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed italic font-light"
                    >
                      "{testimonials[currentTestimonial].text}"
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex items-center space-x-6"
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={testimonials[currentTestimonial].clientImage}
                        alt={testimonials[currentTestimonial].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-amber-200 shadow-lg transition-transform transform hover:scale-105"
                      />
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-amber-700 font-semibold mb-1">{testimonials[currentTestimonial].event}</p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].date}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative h-96 lg:h-auto"
                  >
                    <img
                      src={testimonials[currentTestimonial].uniqueImage}
                      alt={testimonials[currentTestimonial].event}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 rounded-lg" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <motion.div
            whileHover={{ backgroundColor: "rgba(255, 235, 59, 0.2)" }} // Change background color on hover
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm border-2 border-amber-600 text-amber-700 w-14 h-14 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ backgroundColor: "rgba(255, 235, 59, 0.2)" }} // Change background color on hover
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm border-2 border-amber-600 text-amber-700 w-14 h-14 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center space-x-4 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`group transition-all duration-300`}
            >
              <motion.div
                animate={{
                  scale: index === currentTestimonial ? 1.1 : 1,
                  rotate: index === currentTestimonial ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  scale: { duration: 0.3 },
                  rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
                className={`w-16 h-16 rounded-full border-4 overflow-hidden transition-all duration-300 ${
                  index === currentTestimonial ? "border-amber-600 shadow-lg" : "border-gray-300 hover:border-amber-400"
                }`}
              >
                <img
                  src={testimonial.clientImage}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{
                  color: index === currentTestimonial ? "#b45309" : "#9ca3af",
                }}
                className="mt-2 text-xs font-medium transition-colors duration-300"
              >
                {testimonial.name.split(" ")[0]}
              </motion.div>
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/70"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Happy Couples", color: "text-amber-700" },
              { number: "4.9/5", label: "Average Rating", color: "text-yellow-600" },
              { number: "98%", label: "Satisfaction Rate", color: "text-orange-600" },
              { number: "1000+", label: "Events Completed", color: "text-amber-800" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
