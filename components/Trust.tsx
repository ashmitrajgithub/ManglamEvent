"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const reviews = [
  {
    name: "Priya & Rahul Sharma",
    shortName: "Priya & Rahul",
    event: "Destination wedding · Goa",
    date: "December 2023",
    image: "/01.jpeg",
    quote: "Manglam Event made our dream wedding come true. Every detail felt personal, beautiful, and completely effortless for us and our families.",
  },
  {
    name: "Sneha & Arjun Patel",
    shortName: "Sneha & Arjun",
    event: "Royal wedding · Udaipur",
    date: "November 2023",
    image: "/02.jpeg",
    quote: "From the first moodboard to the last guest goodbye, the team brought calm, creativity, and the kind of care you never forget.",
  },
  {
    name: "Kavya & Vikram Singh",
    shortName: "Kavya & Vikram",
    event: "Modern wedding · Patna",
    date: "October 2023",
    image: "/05.jpeg",
    quote: "They understood our style before we could explain it. The result was warm, modern, and so distinctly us — exactly what we hoped for.",
  },
  {
    name: "Ritu & Sameer Gupta",
    shortName: "Ritu & Sameer",
    event: "Corporate celebration · Delhi",
    date: "September 2023",
    image: "/04.jpeg",
    quote: "A beautifully run evening with thoughtful details at every turn. Our guests are still talking about the atmosphere and the hospitality.",
  },
]

export default function Trust() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 6500)
    return () => window.clearInterval(timer)
  }, [])

  const review = reviews[active]
  const selectReview = (index: number) => setActive((index + reviews.length) % reviews.length)

  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-[#f5f1eb] px-4 py-20 text-[#271b14] sm:px-8 md:py-28">
      {/* A quiet bronze version of the reference circle, using the same accent as the hero and services sections. */}
      <div aria-hidden="true" className="absolute -left-[33rem] -top-[10rem] h-[76rem] w-[76rem] rounded-full bg-[#a45f26]" />
      <div aria-hidden="true" className="absolute -left-[31rem] -top-[8rem] h-[72rem] w-[72rem] rounded-full bg-gradient-to-br from-[#b9783d] via-[#a45f26] to-[#8b4c1e] opacity-90" />
      <div aria-hidden="true" className="absolute -left-[25rem] top-[7rem] h-[52rem] w-[52rem] rounded-full border border-white/20 opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,.86),transparent_38%),linear-gradient(120deg,rgba(255,255,255,.04),transparent_42%,rgba(255,255,255,.5))]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[0.4rem] border border-[#e7ded3] bg-[#fffdf9] shadow-[0_30px_80px_rgba(82,52,28,.14),0_2px_8px_rgba(82,52,28,.05)] ring-1 ring-white/70 lg:min-h-[690px]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-[#eadfd3] px-7 py-9 sm:px-12 sm:py-12 lg:border-b-0 lg:border-r lg:px-16 lg:py-16">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                <span className="h-[3px] w-12 bg-[#a45f26]" />
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#25201b] sm:text-2xl">Customer Reviews</h2>
                </div>
                <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#c1ad99] sm:block">01 — 04</span>
              </div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#8b7b6e]">The kind words behind every beautiful celebration we create.</p>

              <div className="relative mt-12 min-h-[380px] pl-3 sm:mt-14">
                <svg aria-hidden="true" viewBox="0 0 120 390" className="pointer-events-none absolute left-0 top-1 h-[385px] w-[112px] overflow-visible">
                  <path d="M38 18 C 102 45, 105 91, 71 135 C 37 179, 37 219, 67 254 C 92 284, 93 325, 40 365" fill="none" stroke="#decfc1" strokeWidth="1.6" />
                  <path d="M38 18 C 99 45, 102 91, 68 135 C 35 179, 35 219, 65 254 C 89 284, 90 323, 40 365" fill="none" stroke="#f1e8df" strokeWidth="6" />
                </svg>

                <div className="relative z-10 space-y-5 sm:space-y-6">
                  {reviews.map((item, index) => {
                    const isActive = index === active
                    const offset = [0, 62, 43, 0][index]

                    return (
                      <motion.button
                        key={item.name}
                        type="button"
                        onClick={() => selectReview(index)}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        style={{ marginLeft: offset }}
                        className={`relative flex w-full max-w-[290px] items-center gap-4 text-left transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-60 hover:opacity-90"}`}
                        aria-label={`Read review from ${item.name}`}
                      >
                        <span className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 bg-[#f4ece4] transition-all duration-300 ${isActive ? "border-[#a45f26] shadow-[0_6px_18px_rgba(164,95,38,.24)]" : "border-[#e1d5c9] grayscale"}`}>
                          <Image src={item.image} alt={`${item.name} — Manglam Event client review`} fill sizes="48px" className="object-cover" />
                        </span>
                        <span className="min-w-0">
                          <span className={`block truncate text-sm ${isActive ? "font-semibold text-[#282019]" : "font-medium text-[#6f6258]"}`}>{item.shortName}</span>
                          <span className="mt-1 block truncate text-[0.68rem] text-[#a4978b]">{item.date}</span>
                          <span className="mt-1 flex items-center gap-1 text-[0.65rem] text-[#b28a63]"><Star className="h-3 w-3 fill-current" /> 4.9 on {item.event}</span>
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[470px] flex-col justify-between px-7 py-10 sm:px-14 sm:py-14 lg:px-20 lg:py-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                  className="flex h-full flex-col"
                >
                  <div className="flex items-start justify-between">
                    <Quote className="h-16 w-16 text-[#a45f26]/20 sm:h-20 sm:w-20" strokeWidth={1.1} />
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#c6b6a8]">0{active + 1} / 0{reviews.length}</span>
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex gap-1 text-[#b5793f]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#b8a89a]">Verified client</span>
                  </div>
                  <blockquote className="mt-6 max-w-2xl font-serif text-[2.2rem] font-medium italic leading-[1.06] tracking-[-0.035em] text-[#30221a] sm:text-5xl lg:text-[3.7rem]">
                    “{review.quote}”
                  </blockquote>
                  <div className="mt-auto flex items-end justify-between gap-6 pt-14">
                    <div>
                      <p className="font-serif text-2xl text-[#30221a]">{review.name}</p>
                      <p className="mt-1 text-sm text-[#88776a]">{review.event}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button type="button" onClick={() => selectReview(active - 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbcdbf] text-[#806e5e] transition hover:border-[#a45f26] hover:text-[#a45f26]" aria-label="Previous review"><ChevronLeft className="h-4 w-4" /></button>
                      <button type="button" onClick={() => selectReview(active + 1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a45f26] text-white shadow-[0_8px_20px_rgba(164,95,38,.2)] transition hover:bg-[#824819]" aria-label="Next review"><ChevronRight className="h-4 w-4" /></button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#eadfd3] px-7 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#a08e7e] sm:px-12 lg:px-16">
            <span>Manglam Event · Since 2014</span>
            <span className="hidden sm:inline">500+ celebrations · 4.9/5 client rating</span>
            <a href="#contact" className="text-[#a45f26] transition hover:text-[#824819]">Plan your story →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
