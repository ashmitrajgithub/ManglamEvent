"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-xl border-b border-amber-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/manglam event (1).png"
                alt="Nikosta"
                width={160} // Increased width
                height={60} // Increased height
                className="h-10 sm:h-12 md:h-14 w-auto" // Adjusted height classes for responsiveness
                priority
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-ping"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-amber-400 transition-all duration-300 font-medium text-lg group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-2 border-amber-400 text-white hover:bg-amber-50/10 bg-transparent font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold px-8 py-2 rounded-full shadow-lg hover:shadow-amber-400/40 transition-all duration-300 hover:scale-105">
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-amber-50/10">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-gradient-to-br from-black/90 via-gray-900 to-gray-800 backdrop-blur-md"
            >
              <div className="flex flex-col space-y-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium text-white hover:text-amber-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 mt-8 pt-8 border-t border-white/20">
                  <Button
                    variant="outline"
                    className="border-2 border-amber-400 text-white bg-transparent rounded-full"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
