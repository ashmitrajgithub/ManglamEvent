"use client"

import { motion } from "framer-motion"
import { Users, Calendar, Award, Star } from "lucide-react"

const stats = [
  { label: "Events Done", value: "500+", icon: <Calendar className="w-8 h-8" /> },
  { label: "Years Experience", value: "10+", icon: <Award className="w-8 h-8" /> },
  { label: "Client Satisfaction", value: "100%", icon: <Users className="w-8 h-8" /> },
  { label: "Google Rating", value: "4.9/5", icon: <Star className="w-8 h-8" /> },
]

export default function Trust() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why <span className="text-yellow-500">Mangalam Event?</span></h2>
          <p className="text-xl text-gray-400">Bihar's Most Trusted Event Management Brand</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-yellow-500 mb-4">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Preview */}
        <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/10">
           <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                   <h3 className="text-2xl font-bold mb-4">"Absolutely Magical!"</h3>
                   <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                       "Mangalam Event transformed our wedding into a fairy tale. The attention to detail, the decorations, and the management were flawless. Highly recommended!"
                   </p>
                   <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                           <img src="https://i.pravatar.cc/150?img=32" alt="Client" />
                       </div>
                       <div>
                           <p className="font-bold text-white">Aditya & Priya</p>
                           <p className="text-yellow-500 text-sm">Wedding in Patna</p>
                       </div>
                   </div>
               </div>
               <div className="flex-1 bg-black rounded-xl overflow-hidden aspect-video relative group cursor-pointer">
                   {/* Placeholder for video testimonial */}
                   <img src="https://images.unsplash.com/photo-1511285560982-1356c11d4606?auto=format&fit=crop&q=80&w=800" alt="Wedding Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                           <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-black border-b-8 border-b-transparent ml-1"></div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  )
}
