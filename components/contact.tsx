"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

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
      details: [
        "The Everest Hotel, Ganesh Cinema Road",
        "Opposite Vishal Mega Mart,",
        "Sitamarhi, Bihar 843302",
      ],
      color: "from-slate-600 to-gray-700",
      bgColor: "bg-slate-50",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Sat: 9 AM - 8 PM", "Sun: 10 AM - 6 PM"],
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Background animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-amber-100 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-yellow-100 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Let's Plan Your Dream Event
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us your vision. Our expert team will craft an unforgettable experience tailored just for you.
          </motion.p>
        </motion.div>

        {/* Form + Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="shadow-2xl rounded-3xl border-none">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">Free Consultation</CardTitle>
                <p className="text-gray-600">Fill out this quick form and our team will reach out shortly.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-1 font-semibold text-gray-700">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 text-lg px-4 border-2 border-gray-200 rounded-xl focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1 font-semibold text-gray-700">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 text-lg px-4 border-2 border-gray-200 rounded-xl focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-1 font-semibold text-gray-700">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+91 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 text-lg px-4 border-2 border-gray-200 rounded-xl focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1 font-semibold text-gray-700">Event Date</label>
                      <Input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="h-12 text-lg px-4 border-2 border-gray-200 rounded-xl focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-1 font-semibold text-gray-700">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full h-12 text-lg px-4 border-2 border-gray-200 rounded-xl focus:border-amber-600"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-1 font-semibold text-gray-700">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-12 text-lg px-4 border-2 border-gray-200 rounded-xl focus:border-amber-600"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-1 font-semibold text-gray-700">
                      Tell us about your dream event
                    </label>
                    <textarea
                      name="message"
                      placeholder="Describe your vision, special requests, or questions"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full text-lg px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white text-lg font-bold rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="inline mr-2" /> Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className={`shadow-lg rounded-3xl border-none ${info.bgColor} p-6 flex items-start space-x-5`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${info.color} text-white`}>
                  <info.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.810013891878!2d85.48950697565165!3d26.59047117684078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1596f6c215f%3A0x1ef6ed767755475b!2sMangalam%20event!5e0!3m2!1sen!2sin!4v1751490180164!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
