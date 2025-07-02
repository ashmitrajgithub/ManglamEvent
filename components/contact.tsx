"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@manglamevent.com", "bookings@manglamevent.com"],
      color: "from-amber-600 to-yellow-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Wedding Street, Bandra West", "Mumbai, Maharashtra 400050"],
      color: "from-slate-600 to-gray-700",
      bgColor: "bg-slate-50",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
    },
  ]

  const eventTypes = [
    "Wedding Planning",
    "Destination Wedding",
    "Corporate Event",
    "Birthday Celebration",
    "Ring Ceremony",
    "Other",
  ]

  const budgetRanges = ["Under ₹5 Lakhs", "₹5-10 Lakhs", "₹10-25 Lakhs", "₹25-50 Lakhs", "₹50 Lakhs+", "Let's Discuss"]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white" ref={ref}>
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <MessageCircle className="h-8 w-8 text-amber-600" />
            </motion.div>
            <span className="text-amber-700 font-semibold text-lg tracking-wide uppercase">Contact Us</span>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 0.5 }}
            >
              <MessageCircle className="h-8 w-8 text-amber-600" />
            </motion.div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Let's Plan Your
            </motion.span>
            <br />
            <span className="text-gray-800">Dream Event</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start planning your dream event? Contact us today for a free consultation and let's bring your
            vision to life with our expert planning and flawless execution.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-12 mb-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="border-0 shadow-2xl bg-white">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
                    >
                      <Calendar className="mr-3 h-8 w-8 text-amber-600" />
                    </motion.div>
                    Get Your Free Consultation
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
                          />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
                          />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Event Date</label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                          <Input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Event Type *</label>
                        <motion.select
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Budget Range</label>
                        <motion.select
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-semibold text-gray-700">Tell us about your dream event</label>
                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        name="message"
                        placeholder="Describe your vision, preferences, and any special requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border-2 border-gray-200 focus:border-amber-600 text-lg rounded-xl p-4 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <MessageCircle className="inline mr-3 h-6 w-6" />
                        Send Message & Get Free Consultation
                      </button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${info.bgColor}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <info.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 + idx * 0.1 }}
                            className="text-gray-600 text-lg mb-2 leading-relaxed"
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white">
                <CardContent className="p-8 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Phone className="h-12 w-12 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-amber-100 mb-6 text-lg">Call us now for instant assistance</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-amber-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Call +91 98765 43210
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-r from-amber-100 to-yellow-100 flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 }}
                className="text-center text-gray-600"
              >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  <MapPin className="h-16 w-16 mx-auto mb-6 text-amber-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Beautiful Office</h3>
                <p className="text-lg mb-2">123 Wedding Street, Bandra West</p>
                <p className="text-lg">Mumbai, Maharashtra 400050</p>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3"
              >
                <MapPin className="h-6 w-6 text-amber-600" />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
