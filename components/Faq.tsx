"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Manglam Events kya karta hai?",
    answer:
      "Manglam Event Bihar ka ek full-service wedding aur event planning company hai. Hum luxury weddings, destination weddings, corporate events, concerts, cultural programmes, photography, floral decor aur artist management services provide karte hain — 2014 se Sitamarhi, Bihar mein based hain.",
  },
  {
    question: "Kin cities mein Manglam Event ki service milti hai?",
    answer:
      "Hum Sitamarhi se operate karte hain aur poore Bihar mein service dete hain — Patna, Muzaffarpur, Darbhanga, Motihari, Hajipur, Vaishali aur surrounding districts. Destination weddings ke liye hum pan-India kaam karte hain — Rajasthan, Goa, Kerala, Himachal Pradesh tak.",
  },
  {
    question: "Wedding planning ki pricing kya hai aur booking kaise hoti hai?",
    answer:
      "Packages ₹2 lakh se shuru hote hain intimate ceremonies ke liye aur ₹50 lakh+ tak jate hain luxury destination weddings ke liye. Booking ke liye WhatsApp karein +91 76350 31522 par ya website par form bharein. Pehli consultation bilkul free hai aur hum 2 ghante mein reply karte hain.",
  },
  {
    question: "Kya Manglam Event destination weddings plan karta hai?",
    answer:
      "Haan. Hum destination weddings plan karte hain poore India mein — Rajasthan ke palaces, Goa ke beaches, Kerala ke backwaters aur Himachal ke hill stations par. Humari team logistics, vendor coordination, travel aur decor sab handle karti hai kisi bhi location par.",
  },
  {
    question: "Kya photography aur videography bhi milti hai?",
    answer:
      "Bilkul. Hum complete photo aur film packages offer karte hain — candid photography, traditional photography, drone coverage, pre-wedding shoots aur cinematic wedding films. Sab kuch ek hi team se.",
  },
  {
    question: "Celebrity ya artist booking bhi kar sakte hain?",
    answer:
      "Haan. Humara artist management division Bollywood artists, folk singers, DJs, standup comedians aur celebrity performers ki bookings handle karta hai — weddings, corporate events aur concerts ke liye. Contracts se lekar on-day logistics tak sab hum manage karte hain.",
  },
  {
    question: "Manglam Event kitne saalon se kaam kar raha hai?",
    answer:
      "Manglam Event 2014 mein shuru hua tha Sitamarhi, Bihar mein. 10+ saal ke experience mein humne 500+ events deliver kiye hain aur 4.9/5 ka client rating maintain kiya hai. Hum Bihar ka sabse trusted event management company hain.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative overflow-hidden bg-[#fbf8f2] px-5 py-24 text-[#221915] md:px-8 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-0 h-[30rem] w-[30rem] rounded-full bg-[#f1d2aa]/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#ead0b3]/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 border-b border-[#e2d2c0] pb-8">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a45f26] sm:text-xs">
            <span className="h-px w-8 bg-[#a45f26]" /> Aksar pooche jaate hain
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-medium leading-[.86] tracking-[-.07em] text-[#241812]">
            Sawalon ke <span className="italic text-[#ae6c32]">jawab.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#65574e]">
            Manglam Event ke baare mein sabse zyada pooche jaane waale sawal. Kuch aur poochna ho toh seedha WhatsApp karein.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border-b border-[#e2d2c0]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#a45f26]"
                aria-expanded={openIndex === index}
              >
                <span itemProp="name" className="font-serif text-lg font-medium leading-snug text-[#241812] sm:text-xl">
                  {faq.question}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9c8b6] bg-[#f6ede3] text-[#a45f26] transition-colors">
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="pb-6 text-[15px] leading-7 text-[#65574e]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-[1.5rem] border border-[#e2d2c0] bg-[#fffdf8] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="font-serif text-2xl text-[#241812]">Aur kuch poochna hai?</p>
            <p className="mt-1 text-sm text-[#65574e]">Hum seedha WhatsApp par available hain — 2 ghante mein reply karte hain.</p>
          </div>
          <a
            href="https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20have%20a%20question."
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#a45f26] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.18em] text-white shadow-[0_10px_24px_rgba(164,95,38,.22)] transition hover:-translate-y-0.5 hover:bg-[#824819]"
          >
            WhatsApp karo
          </a>
        </div>
      </div>
    </section>
  )
}
