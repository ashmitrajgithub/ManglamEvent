"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-8"
            >
                Let's Create <br />
                <span className="text-yellow-500">Something Magical</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
                Ready to start planning? Contact us for a free consultation. We're excited to hear your story.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                        <Phone className="w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Call Us 24/7</p>
                        <p className="text-xl font-bold">+91 98765 43210</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                        <Mail className="w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Email Us</p>
                        <p className="text-xl font-bold">hello@mangalam.event</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                        <MapPin className="w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">Visit Office</p>
                        <p className="text-xl font-bold">Kankarbagh, Patna, Bihar - 800020</p>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-4">
                {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-yellow-500">
                        {social}
                    </a>
                ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 relative">
             <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <label className="text-sm text-gray-400">Name</label>
                         <Input placeholder="John Doe" className="bg-black/50 border-white/10 focus:border-yellow-500 h-12" />
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm text-gray-400">Phone</label>
                         <Input placeholder="+91 ..." className="bg-black/50 border-white/10 focus:border-yellow-500 h-12" />
                     </div>
                 </div>

                 <div className="space-y-2">
                     <label className="text-sm text-gray-400">Event Type</label>
                     <select className="w-full h-12 bg-black/50 border border-white/10 rounded-md px-3 text-white focus:outline-none focus:border-yellow-500">
                         <option>Wedding</option>
                         <option>Corporate</option>
                         <option>Birthday</option>
                         <option>Other</option>
                     </select>
                 </div>

                 <div className="space-y-2">
                     <label className="text-sm text-gray-400">Message</label>
                     <Textarea placeholder="Tell us about your event..." className="bg-black/50 border-white/10 focus:border-yellow-500 min-h-[150px]" />
                 </div>

                 <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-6 text-lg rounded-xl">
                     Send Message <Send className="w-4 h-4 ml-2" />
                 </Button>
             </form>
          </div>

        </div>
      </div>
    </section>
  )
}
