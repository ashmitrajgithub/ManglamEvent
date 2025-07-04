"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import { MapPin, Calendar, Home, Palette, Music, Camera, Crown, Star, ArrowRight, Check } from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    title: string
    price: string
    icon: any
    color: string
  } | null>(null)

  const services = [
    {
      icon: MapPin,
      title: "Destination Weddings",
      description:
        "Curated luxury destinations with comprehensive planning and seamless execution for your dream wedding abroad.",
      features: ["Exotic Venues", "Travel Coordination", "Local Expertise"],
      price: "₹15,00,000",
      popular: true,
    },
    {
      icon: Calendar,
      title: "Complete Wedding Planning",
      description:
        "Full-service planning from initial concept to final execution, ensuring every detail reflects your vision perfectly.",
      features: ["Full Planning", "Timeline Management", "Vendor Coordination"],
      price: "₹8,00,000",
      popular: false,
    },
    {
      icon: Home,
      title: "Premium Venue Selection",
      description:
        "Access to exclusive venues and heritage properties with expert guidance for the perfect wedding location.",
      features: ["Exclusive Access", "Site Coordination", "Negotiation Support"],
      price: "₹2,00,000",
      popular: false,
    },
    {
      icon: Palette,
      title: "Luxury Wedding Decor",
      description:
        "Bespoke decoration designs that transform venues into breathtaking spaces reflecting your personal style.",
      features: ["Custom Design", "Premium Florals", "Lighting Design"],
      price: "₹5,00,000",
      popular: true,
    },
    {
      icon: Music,
      title: "Entertainment Management",
      description:
        "Curated entertainment experiences featuring renowned artists and performers for unforgettable celebrations.",
      features: ["Celebrity Artists", "Live Performances", "Sound Production"],
      price: "₹3,00,000",
      popular: false,
    },
    {
      icon: Camera,
      title: "Cinematic Documentation",
      description:
        "Award-winning photographers and cinematographers capturing your precious moments with artistic excellence.",
      features: ["Professional Team", "Cinematic Films", "Same Day Edits"],
      price: "₹4,00,000",
      popular: true,
    },
  ]

  const handleGetQuote = (service: (typeof services)[0]) => {
    setSelectedService({
      title: service.title,
      price: service.price,
      icon: service.icon,
      color: "from-amber-600 to-yellow-600",
    })
    setIsBookingModalOpen(true)
  }

  return (
    <>
      <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden" ref={ref}>
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <Crown className="h-6 w-6 text-amber-600" />
              <span className="text-amber-700 font-medium text-sm uppercase tracking-[0.2em]">Premium Services</span>
              <Crown className="h-6 w-6 text-amber-600" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 leading-tight"
            >
              Luxury Wedding
              <span className="block font-normal bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Crafting extraordinary celebrations with meticulous attention to detail, ensuring your special day exceeds
              every expectation.
            </motion.p>
          </motion.div>

          {/* Professional Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <Card className="h-full bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-amber-200 relative overflow-hidden">
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-amber-700" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4 font-light">{service.description}</p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Starting from</span>
                          <div className="text-2xl font-semibold text-gray-900">{service.price}</div>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleGetQuote(service)}
                        className="w-full bg-white border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300 font-medium py-2.5 group/btn"
                      >
                        <span>Get Detailed Quote</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-3xl p-12 md:p-16 border border-amber-100">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Ready to Begin Your
                  <span className="block font-normal bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
                    Wedding Journey?
                  </span>
                </h3>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                  Schedule a complimentary consultation with our wedding specialists to discuss your vision and explore
                  how we can bring your dream celebration to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button
                    size="lg"
                    onClick={() => {
                      setSelectedService(null)
                      setIsBookingModalOpen(true)
                    }}
                    className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-medium px-8 py-4 rounded-xl flex-1 bg-white"
                  >
                    View Our Portfolio
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">500+ Celebrations</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <Crown className="h-4 w-4 text-amber-600" />
                    <span className="font-medium">8 Years Excellence</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium">100% Satisfaction</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </>
  )
}

export default Services
