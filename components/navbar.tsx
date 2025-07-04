"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section
      const sections = ["home", "about", "services", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/Logoico.png"
                  alt="Manglam Event"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    isScrolled
                      ? activeSection === item.id
                        ? "text-amber-700"
                        : "text-gray-800 hover:text-amber-700"
                      : activeSection === item.id
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-px ${isScrolled ? "bg-amber-700" : "bg-white"}`}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className={`font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </Button>

              <Button
                size="sm"
                className={`font-medium px-6 py-2 transition-all duration-300 ${
                  isScrolled ? "bg-amber-700 hover:bg-amber-800 text-white" : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 ${
                isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            >
              <Menu className="h-6 w-6" />
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Image src="/Logoico.png" alt="Manglam Event" width={140} height={45} className="h-8 w-auto" />
                  <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        className={`block text-lg font-medium transition-colors duration-300 ${
                          activeSection === item.id ? "text-amber-700" : "text-gray-800 hover:text-amber-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-3 text-amber-700" />
                        <span className="text-sm">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-3 text-amber-700" />
                        <span className="text-sm">info@manglamevent.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100">
                  <Button
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Quote
                  </Button>
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
