"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Memories <br/> Since <span className="text-yellow-500">2014</span></h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        What started as a small passion project in Patna has now grown into Bihar's premium event management company. At <strong>Mangalam Event</strong>, we believe every celebration is a story waiting to be told.
                    </p>
                    <p>
                        From intimate gatherings to grand royal weddings, our journey has been defined by creativity, perfection, and the smiles of our 500+ happy clients.
                    </p>

                    <div className="pt-6">
                         <div className="h-1 w-20 bg-yellow-500 mb-6" />
                         <h3 className="text-xl font-bold text-white mb-2">Our Philosophy</h3>
                         <p className="italic">"We don't just arrange things; we design feelings."</p>
                    </div>
                </div>
            </motion.div>

            <div className="relative">
                 {/* Timeline / Visual Story */}
                 <div className="relative border-l-2 border-yellow-500/30 pl-8 space-y-12">
                     <TimelineItem year="2014" title="The Beginning" desc="Started with birthday parties & small gatherings." />
                     <TimelineItem year="2017" title="Expanded to Weddings" desc="Executed our first destination wedding in Rajgir." />
                     <TimelineItem year="2020" title="Corporate Giants" desc="Partnered with top brands for launch events." />
                     <TimelineItem year="2024" title="Premium Experience" desc="Launched 3D visualization & luxury decor services." highlight />
                 </div>
            </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, title, desc, highlight = false }: { year: string, title: string, desc: string, highlight?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-black ${highlight ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)]' : 'bg-gray-600'}`} />
            <span className={`text-sm font-bold tracking-wider ${highlight ? 'text-yellow-500' : 'text-gray-500'}`}>{year}</span>
            <h4 className={`text-xl font-bold mt-1 ${highlight ? 'text-white' : 'text-gray-200'}`}>{title}</h4>
            <p className="text-gray-400 mt-2">{desc}</p>
        </motion.div>
    )
}
