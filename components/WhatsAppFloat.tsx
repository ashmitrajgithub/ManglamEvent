"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

const WHATSAPP = "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [nudge, setNudge] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    const nudgeTimer = setTimeout(() => setNudge(false), 7000)
    return () => { clearTimeout(timer); clearTimeout(nudgeTimer) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed bottom-5 right-4 z-[9000] flex flex-col items-end gap-2 sm:bottom-7 sm:right-6"
        >
          {/* Nudge tooltip */}
          <AnimatePresence>
            {nudge && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 rounded-2xl rounded-br-sm bg-white px-4 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,.15)]"
              >
                <span className="text-[11px] font-semibold text-[#2a1c14]">
                  Plan your event on WhatsApp →
                </span>
                <button
                  onClick={() => setNudge(false)}
                  aria-label="Dismiss"
                  className="ml-1 text-[#b0a09a] transition hover:text-[#2a1c14]"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Manglam Event on WhatsApp"
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.08 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_28px_rgba(37,211,102,.38)] transition-shadow hover:shadow-[0_12px_36px_rgba(37,211,102,.48)]"
          >
            {/* Ping ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
            <MessageCircle className="h-7 w-7 fill-white text-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
