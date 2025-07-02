import Link from "next/link"
import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  const services = [
    "Destination Weddings",
    "Wedding Planning",
    "Venue Selection",
    "Wedding Decor",
    "Photography & Videography",
    "Corporate Events",
  ]

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Manglam Event
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Creating magical moments and unforgettable celebrations for over 8 years. Your dream wedding and event
              planning partner.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Wedding Street</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@manglamevent.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Manglam Event. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
