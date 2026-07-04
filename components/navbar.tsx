"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const PHONE = "+91 76350 31522"
const WHATSAPP = "https://wa.me/917635031522?text=Hello%20Manglam%20Event%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
      const sections = ["home", "about", "services", "gallery", "planner", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home",         href: "#home",         id: "home" },
    { name: "About",        href: "#about",        id: "about" },
    { name: "Services",     href: "#services",     id: "services" },
    { name: "Gallery",      href: "#gallery",      id: "gallery" },
    { name: "Planner",      href: "#planner",      id: "planner" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact",      href: "#contact",      id: "contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 block">
              <Image
                src="/Logoico.png"
                alt="Manglam Event"
                width={160}
                height={50}
                className="h-10 w-auto brightness-110"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className={`relative text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-amber-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-amber-400"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-xs text-white/60 hover:text-amber-400 transition-colors font-medium tracking-wide"
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2 rounded-full transition-all hover:scale-105 text-xs tracking-wide"
                >
                  Get Free Quote
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-zinc-950 border-l border-white/10 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Image src="/Logoico.png" alt="Manglam Event" width={130} height={42} className="h-8 w-auto brightness-110" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Nav Links */}
                <div className="flex-1 px-6 py-8 overflow-y-auto">
                  <nav className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                          className={`block py-3 px-4 rounded-xl text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                            activeSection === item.id
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-3 text-white/50">
                      <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                      <a href={`tel:${PHONE}`} className="text-sm hover:text-amber-400 transition-colors">{PHONE}</a>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-6 border-t border-white/10">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-all hover:scale-[1.02]">
                      Get Free Quote on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
