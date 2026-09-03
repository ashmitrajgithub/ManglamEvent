"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"

const PHONE = "+91 76350 31522"
const EMAIL = "info@manglamevent.com"
const ADDRESS = "Cinema Road, Near Vishal Mega Mart, Sitamarhi, Bihar – 843302"
const WHATSAPP = "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20would%20like%20to%20discuss%20my%20event."

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us 24/7",
    value: PHONE,
    href: `tel:${PHONE}`,
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: MapPin,
    label: "Visit Our Office",
    value: ADDRESS,
    href: "https://maps.google.com/?q=Sitamarhi+Bihar",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
]

const eventTypes = ["Wedding", "Corporate Event", "Birthday Party", "Cultural Event", "Political Event", "Concert / DJ Night", "Other"]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "Wedding", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `New Inquiry from Website\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent Type: ${form.type}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/917635031522?text=${msg}`, "_blank")
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", phone: "", email: "", type: "Wedding", message: "" })
    }, 4000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#faf8f3] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-amber-700 text-xs font-bold uppercase tracking-[0.35em] mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-5">
            Let's Create{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #b45309, #d97706)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >Something Magical</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-base">
            Ready to start planning? Reach out for a free consultation — we'd love to hear your story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={i}
                  href={info.href}
                  target={i === 2 ? "_blank" : undefined}
                  rel={i === 2 ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-start gap-4 p-5 rounded-2xl border ${info.border} ${info.bg} hover:shadow-md transition-all duration-300 group`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-white border ${info.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm ${info.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">{info.label}</p>
                    <p className={`font-medium text-sm leading-relaxed ${info.color}`}>{info.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp — Instant Response
            </motion.a>

            {/* Social links */}
            <div className="pt-4">
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-full border border-stone-200 text-stone-500 text-xs font-medium hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8 md:p-10 relative overflow-hidden"
          >
            {/* Submitted overlay */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center z-20 gap-4"
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h3 className="font-serif text-2xl text-stone-900">Message Sent!</h3>
                <p className="text-stone-500 text-sm text-center max-w-xs">
                  Redirecting you to WhatsApp. Our team will respond within 2 hours.
                </p>
              </motion.div>
            )}

            <h3 className="font-serif text-2xl text-stone-900 mb-7">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-stone-400 font-bold uppercase tracking-widest">Your Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-stone-400 font-bold uppercase tracking-widest">Phone *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs text-stone-400 font-bold uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="rahul@example.com"
                  className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                />
              </div>

              {/* Event type */}
              <div className="space-y-1.5">
                <label className="text-xs text-stone-400 font-bold uppercase tracking-widest">Event Type *</label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full h-12 px-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  {eventTypes.map((t) => (
                    <option key={t} value={t} className="bg-white">{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs text-stone-400 font-bold uppercase tracking-widest">Your Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your dream event — date, location, guest count, budget..."
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(180,83,9,0.25)] shadow-md"
              >
                <Send className="w-4 h-4" />
                Send Message via WhatsApp
              </button>

              <p className="text-stone-400 text-xs text-center">
                Your message will be sent securely via WhatsApp. We respond within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
