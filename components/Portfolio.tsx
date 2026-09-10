"use client"

import Image from "next/image"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { ArrowUpRight, Calendar, MapPin, X, ZoomIn } from "lucide-react"
import { useRef, useState } from "react"

type GalleryItem = {
  id: number
  title: string
  category: string
  image: string
  location: string
  year: string
  description: string
}

const categories = ["All", "Haldi", "Mehndi", "Wedding", "Reception", "Corporate", "Decor", "Dandiya"]

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Royal Palace Wedding", category: "Wedding", image: "/01.jpeg", location: "Patna, Bihar", year: "2024", description: "A grand celebration with gold and floral themes." },
  { id: 2, title: "Garden Reception", category: "Reception", image: "/02.jpeg", location: "Muzaffarpur", year: "2024", description: "An elegant evening wrapped in lights." },
  { id: 3, title: "Haldi in Bloom", category: "Haldi", image: "/05.jpeg", location: "Patna, Bihar", year: "2024", description: "Sunshine, marigolds and a little bit of mischief." },
  { id: 4, title: "Mehndi Courtyard", category: "Mehndi", image: "/08.jpeg", location: "Rajgir, Bihar", year: "2023", description: "Colour, craft and a courtyard full of stories." },
  { id: 5, title: "Dholida Nights", category: "Dandiya", image: "/dholida-nights-sponsorship.png", location: "Sitamarhi, Bihar", year: "2026", description: "A high-energy celebration built for every rhythm." },
  { id: 6, title: "Corporate Annual Gala", category: "Corporate", image: "/04.jpeg", location: "Patna Convention Centre", year: "2024", description: "A polished award night for a top corporate client." },
  { id: 7, title: "Floral Grand Wedding", category: "Decor", image: "/13.jpeg", location: "Gaya, Bihar", year: "2024", description: "A floral installation designed as living art." },
  { id: 8, title: "Night Reception", category: "Reception", image: "/06.jpeg", location: "Darbhanga", year: "2024", description: "An after-dark reception with LED and laser light." },
  { id: 9, title: "Traditional Ceremony", category: "Wedding", image: "/03.jpeg", location: "Sitamarhi, Bihar", year: "2023", description: "Intimate rituals with a modern point of view." },
]

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-90px" })
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState("All")
  const [previewCategory, setPreviewCategory] = useState("All")
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)
  const previewPool = previewCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === previewCategory)
  const previewItems = previewPool.length > 0 ? previewPool.slice(0, 5) : galleryItems.slice(0, 5)

  return (
    <section id="gallery" ref={ref} className="relative overflow-hidden bg-[#fbf8f2] px-5 py-24 text-[#241a15] md:px-8 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-16 h-[30rem] w-[30rem] rounded-full bg-[#e6c6a4]/35 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#ead5c2]/45 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, ease: "easeOut" }} className="flex flex-col justify-between gap-8 border-b border-[#dfcfbd] pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a45f26] sm:text-xs"><span className="h-px w-9 bg-[#a45f26]" /> Our gallery <span className="text-[#a99280]">/ 09 stories</span></p>
            <h2 className="max-w-4xl font-serif text-[clamp(3.3rem,7vw,7rem)] font-medium leading-[.82] tracking-[-.075em]">Scenes that stay<br /><span className="italic text-[#b36b32]">with you.</span></h2>
          </div>
          <div className="max-w-sm md:text-right"><p className="text-sm leading-6 text-[#756459]">A living archive of the celebrations, details and little in-between moments we have made together.</p><button type="button" onClick={() => { setFilter("All"); setShowAll(true) }} className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#241a15] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#a45f26]">View all work <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:rotate-45"><ArrowUpRight className="h-3.5 w-3.5" /></span></button></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1, ease: "easeOut" }} className="mt-7 flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          <span className="mr-2 shrink-0 text-[9px] font-bold uppercase tracking-[0.22em] text-[#a99280]">Browse by</span>
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setPreviewCategory(category)} className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all ${previewCategory === category ? "border-[#a45f26] bg-[#a45f26] text-white shadow-[0_8px_18px_rgba(164,95,38,.16)]" : "border-[#dfcfbd] bg-[#fbf8f2]/70 text-[#887463] hover:border-[#b98962] hover:text-[#a45f26]"}`}>{category}</button>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .9, delay: .15, ease: "easeOut" }} className="relative mt-14 overflow-x-auto overflow-y-visible py-4 [scrollbar-width:none] sm:mt-20">
          <div aria-hidden="true" className="pointer-events-none absolute left-[-12%] right-[-12%] top-1/2 h-px bg-[#d7c5b1]" />
          <div className="relative flex min-w-[720px] items-end justify-center gap-3 px-5 sm:min-w-0 sm:gap-4 lg:gap-5">
            {previewItems.map((item, index) => (
              <motion.button key={item.id} type="button" onClick={() => { setFilter(item.category); setShowAll(true) }} whileHover={{ y: -12, scale: 1.03, rotate: 0 }} transition={{ duration: .3, ease: "easeOut" }} className={`group relative block w-[150px] overflow-hidden rounded-[1.1rem] border border-[#e1d1bf] bg-[#ead8c4] shadow-[0_18px_35px_rgba(76,48,28,.14)] sm:w-[18%] ${index === 2 ? "sm:w-[22%]" : ""} ${index === 0 || index === 4 ? "h-[245px] sm:h-[330px]" : index === 2 ? "h-[285px] sm:h-[390px]" : "h-[265px] sm:h-[365px]"}`} style={{ rotate: index === 0 ? -7 : index === 1 ? -3 : index === 2 ? 1 : index === 3 ? 4 : 7 }}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 150px, 18vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5" />
                <div className="absolute bottom-4 left-4 right-4 text-left"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f2c78e]">{item.category}</p><p className="mt-1 line-clamp-2 font-serif text-lg leading-none text-white">{item.title}</p></div>
                <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/20 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"><ZoomIn className="h-3.5 w-3.5" /></span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-between border-t border-[#dfcfbd] pt-5 text-[9px] font-bold uppercase tracking-[0.24em] text-[#a99280]"><span>01 — 05 / featured frames</span><span className="hidden sm:block">Click a frame to explore the category</span><button type="button" onClick={() => { setFilter("All"); setShowAll(true) }} className="text-[#a45f26] transition-colors hover:text-[#6d3e20]">Open archive <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" /></button></div>
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-[#211712]/75 p-3 backdrop-blur-md sm:p-6" onClick={() => setShowAll(false)}>
            <motion.div initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 22, scale: .98 }} transition={{ duration: .35, ease: "easeOut" }} className="mx-auto min-h-full max-w-7xl rounded-[1.5rem] bg-[#fbf8f2] p-5 shadow-2xl sm:min-h-0 sm:p-9 lg:p-12" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-start justify-between gap-6 border-b border-[#dfcfbd] pb-7"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a45f26]">The complete archive</p><h3 className="font-serif text-4xl tracking-[-.05em] sm:text-6xl">Every frame, <span className="italic text-[#b36b32]">every feeling.</span></h3></div><button type="button" onClick={() => setShowAll(false)} aria-label="Close gallery" className="rounded-full border border-[#dfcfbd] p-3 text-[#756459] transition-colors hover:border-[#a45f26] hover:text-[#a45f26]"><X className="h-5 w-5" /></button></div>
              <div className="my-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">{categories.map((category) => <button key={category} type="button" onClick={() => setFilter(category)} className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all ${filter === category ? "border-[#241a15] bg-[#241a15] text-white" : "border-[#dfcfbd] text-[#806f61] hover:border-[#a45f26] hover:text-[#a45f26]"}`}>{category}</button>)}</div>
              <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{filteredItems.map((item, index) => <motion.button type="button" layout key={item.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: index * .04, ease: "easeOut" }} onClick={() => setLightbox(item)} className="group relative aspect-[1.18] overflow-hidden rounded-[1.15rem] border border-[#e1d1bf] bg-[#ead8c4] text-left"><Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /><div className="absolute bottom-4 left-4 right-4"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f2c78e]">{item.category}</p><p className="mt-1 font-serif text-2xl leading-none text-white">{item.title}</p><p className="mt-2 flex items-center gap-1 text-[10px] text-white/60"><MapPin className="h-3 w-3" />{item.location}<span className="mx-1">·</span><Calendar className="h-3 w-3" />{item.year}</p></div></motion.button>)}</motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md" onClick={() => setLightbox(null)}>
            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .3, ease: "easeOut" }} className="relative w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-[#1c120e]" onClick={(event) => event.stopPropagation()}>
              <div className="relative h-[68vh] min-h-[360px]"><Image src={lightbox.image} alt={lightbox.title} fill sizes="100vw" className="object-contain" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent px-6 pb-6 pt-24 sm:px-9"><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f2c78e]">{lightbox.category}</p><h4 className="mt-1 font-serif text-3xl text-white sm:text-4xl">{lightbox.title}</h4><p className="mt-2 text-sm text-white/65">{lightbox.description}</p></div></div>
              <button type="button" onClick={() => setLightbox(null)} aria-label="Close image" className="absolute right-4 top-4 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-black/80"><X className="h-5 w-5" /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
