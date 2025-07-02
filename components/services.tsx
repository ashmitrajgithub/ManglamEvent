"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import {
  MapPin,
  Calendar,
  Home,
  Palette,
  Music,
  Users,
  Camera,
  Zap,
  Settings,
  Heart,
  ArrowRight,
  Crown,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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
        "Create magical moments in exotic locations around the world with our expert destination wedding planning services.",
      features: ["Exotic Locations", "Travel Coordination", "Local Vendors", "Cultural Integration"],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      popular: true,
      price: "Starting ₹15L",
      rating: 4.9,
      projects: 85,
    },
    {
      icon: Calendar,
      title: "Complete Wedding Planning",
      description:
        "Full-service wedding planning from concept to execution, ensuring your special day is absolutely perfect.",
      features: ["Full Planning", "Timeline Management", "Vendor Coordination", "Day-of Coordination"],
      color: "from-amber-600 to-yellow-600",
      bgColor: "bg-amber-50",
      hoverColor: "hover:bg-amber-100",
      popular: true,
      price: "Starting ₹8L",
      rating: 4.8,
      projects: 120,
    },
    {
      icon: Home,
      title: "Premium Venue Selection",
      description:
        "Find the perfect venue that matches your vision and budget with our extensive network of premium locations.",
      features: ["Premium Venues", "Budget Options", "Site Visits", "Negotiation Support"],
      color: "from-slate-600 to-gray-700",
      bgColor: "bg-slate-50",
      hoverColor: "hover:bg-slate-100",
      price: "Starting ₹2L",
      rating: 4.7,
      projects: 95,
    },
    {
      icon: Palette,
      title: "Luxury Wedding Decor",
      description:
        "Transform your venue with stunning decorations that reflect your personal style and create unforgettable ambiance.",
      features: ["Custom Themes", "Floral Arrangements", "Lighting Design", "Stage Setup"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
      price: "Starting ₹5L",
      rating: 4.9,
      projects: 110,
    },
    {
      icon: Music,
      title: "Entertainment & Shows",
      description:
        "Keep your guests entertained with live music, DJs, and performers for an unforgettable celebration.",
      features: ["Live Bands", "DJ Services", "Cultural Performances", "Celebrity Artists"],
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      price: "Starting ₹3L",
      rating: 4.6,
      projects: 75,
    },
    {
      icon: Users,
      title: "Grand Entrances",
      description: "Make a spectacular entrance with our creative and memorable bride and groom entry arrangements.",
      features: ["Grand Entrances", "Traditional Ceremonies", "Modern Concepts", "Special Effects"],
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
      price: "Starting ₹1L",
      rating: 4.8,
      projects: 65,
    },
    {
      icon: Camera,
      title: "Cinematic Photography",
      description: "Capture every precious moment with our professional photography and videography services.",
      features: ["Professional Photographers", "Cinematic Videos", "Drone Coverage", "Same Day Edit"],
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      popular: true,
      price: "Starting ₹4L",
      rating: 4.9,
      projects: 140,
    },
    {
      icon: Zap,
      title: "Wedding Choreography",
      description: "Learn beautiful dance routines for your special moments with our expert choreographers.",
      features: ["Dance Training", "Couple Choreography", "Group Performances", "Bollywood Style"],
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
      price: "Starting ₹50K",
      rating: 4.7,
      projects: 55,
    },
    {
      icon: Settings,
      title: "Vendor Management",
      description: "Seamless coordination with all vendors to ensure smooth execution of your wedding day.",
      features: ["Vendor Network", "Quality Control", "Timeline Coordination", "Budget Management"],
      color: "from-gray-600 to-slate-600",
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
      price: "Starting ₹1.5L",
      rating: 4.8,
      projects: 90,
    },
  ]

  const handleGetQuote = (service: (typeof services)[0]) => {
    setSelectedService({
      title: service.title,
      price: service.price,
      icon: service.icon,
      color: service.color,
    })
    setIsBookingModalOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 8,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <section
        id="services"
        className="py-32 relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/50"
        ref={ref}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-amber-200/60 to-yellow-200/60 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 5,
            }}
            className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-yellow-200/50 to-orange-200/50 rounded-full blur-3xl"
          />

          {/* Floating Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, -15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
              }}
            >
              <Sparkles className="h-4 w-4 text-amber-400/60" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                <Crown className="h-10 w-10 text-amber-600" />
              </motion.div>
              <motion.span
                className="text-amber-700 font-bold text-xl tracking-wider uppercase bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Our Premium Services
              </motion.span>
              <motion.div
                animate={{
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Crown className="h-10 w-10 text-amber-600" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl lg:text-7xl font-bold mb-10 leading-tight"
            >
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={isInView ? { backgroundPosition: "100% 50%" } : { backgroundPosition: "0% 50%" }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="bg-gradient-to-r from-amber-700 via-yellow-600 via-amber-800 to-yellow-700 bg-clip-text text-transparent bg-[length:300%_100%]"
              >
                Luxury Wedding
              </motion.span>
              <br />
              <motion.span
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Experiences
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light"
            >
              From intimate ceremonies to grand celebrations, we craft bespoke experiences that transform your dreams
              into extraordinary realities with unmatched elegance and sophistication.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center items-center space-x-12 mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 inline-flex"
            >
              {[
                { number: "500+", label: "Happy Couples", icon: Heart },
                { number: "50+", label: "Awards Won", icon: Star },
                { number: "8+", label: "Years Excellence", icon: Crown },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <Card
                  className={`relative overflow-hidden border-0 shadow-xl hover:shadow-3xl transition-all duration-700 ${service.bgColor} ${service.hoverColor} cursor-pointer h-full backdrop-blur-sm bg-opacity-90`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Animated Background Pattern */}
                  <motion.div
                    animate={{
                      opacity: hoveredCard === index ? 0.1 : 0,
                      scale: hoveredCard === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />

                  <CardHeader className="text-center pb-6 relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-2xl relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-white/20 rounded-3xl"
                      />
                      <service.icon className="h-12 w-12 text-white relative z-10" />
                    </motion.div>

                    {/* Service Title */}
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-500 mb-3 leading-tight">
                      {service.title}
                    </CardTitle>

                    {/* Rating and Projects */}
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-semibold text-gray-700">{service.rating}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{service.projects} projects</span>
                    </div>

                    {/* Price */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 inline-block shadow-md border border-white/60"
                    >
                      <span className="text-lg font-bold text-amber-700">{service.price}</span>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="text-center space-y-6 flex-1 flex flex-col relative z-10">
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg flex-1 font-light">{service.description}</p>

                    {/* Enhanced Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.1 + idx * 0.1 }}
                          className="flex items-center justify-center space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: idx * 0.5,
                              ease: "easeInOut",
                            }}
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          </motion.div>
                          <span className="font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="pt-4"
                    >
                      <Button
                        onClick={() => handleGetQuote(service)}
                        className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            x: [-100, 100],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                        <span className="relative z-10 flex items-center justify-center">
                          Get Quote
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </motion.div>
                        </span>
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredCard === index ? 0.6 : 0,
                      scale: hoveredCard === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl blur-xl -z-10"
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 rounded-3xl p-16 text-white shadow-3xl relative overflow-hidden">
              {/* Animated Background Pattern */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform rotate-45"></div>
              </motion.div>

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center justify-center mb-8"
                >
                  <Sparkles className="h-8 w-8 mr-3" />
                  <h3 className="text-5xl font-bold">Ready to Create Magic?</h3>
                  <Sparkles className="h-8 w-8 ml-3" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-2xl mb-12 opacity-95 max-w-4xl mx-auto font-light leading-relaxed"
                >
                  Let our award-winning team transform your vision into an extraordinary celebration that exceeds every
                  expectation and creates memories to last a lifetime.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="lg"
                      onClick={() => {
                        setSelectedService(null)
                        setIsBookingModalOpen(true)
                      }}
                      className="bg-white text-amber-700 hover:bg-gray-50 font-bold px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-xl relative overflow-hidden group"
                    >
                      <motion.div
                        animate={{
                          x: [-100, 100],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 4,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"
                      />
                      <span className="relative z-10 flex items-center">
                        <Calendar className="mr-3 h-6 w-6" />
                        Book Free Consultation
                      </span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-3 border-white text-white hover:bg-white hover:text-amber-700 font-bold px-12 py-4 rounded-2xl transition-all duration-500 text-xl bg-transparent backdrop-blur-sm"
                    >
                      <Crown className="mr-3 h-6 w-6" />
                      View Portfolio
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex justify-center items-center space-x-8 mt-12 text-white/90"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Money Back Guarantee</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </>
  )
}
