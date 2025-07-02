"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  Clock,
  User,
  MapPin,
  Crown,
  Sparkles,
  Download,
  Share2,
  Heart,
  Star,
  ArrowRight,
  X,
} from "lucide-react"

interface BookingConfirmationProps {
  isOpen: boolean
  onClose: () => void
  bookingData: {
    name: string
    email: string
    phone: string
    eventType: string
    eventDate: string
    guestCount: string
    budget: string
    selectedServices: string[]
    bookingId: string
  }
}

export function BookingConfirmation({ isOpen, onClose, bookingData }: BookingConfirmationProps) {
  const nextSteps = [
    {
      step: 1,
      title: "Confirmation Call",
      description: "Our team will call you within 24 hours to discuss your requirements in detail",
      icon: Phone,
      timeframe: "Within 24 hours",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      step: 2,
      title: "Detailed Consultation",
      description: "Schedule a comprehensive consultation to plan every aspect of your dream event",
      icon: Calendar,
      timeframe: "Within 2-3 days",
      color: "from-amber-600 to-yellow-600",
      bgColor: "bg-amber-50",
    },
    {
      step: 3,
      title: "Custom Proposal",
      description: "Receive a detailed proposal with timeline, budget breakdown, and service options",
      icon: Crown,
      timeframe: "Within 5-7 days",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
    },
    {
      step: 4,
      title: "Planning Begins",
      description: "Once approved, we'll start bringing your vision to life with our expert team",
      icon: Sparkles,
      timeframe: "After approval",
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
    },
  ]

  const quickActions = [
    {
      title: "Download Booking Details",
      description: "Get a PDF copy of your booking information",
      icon: Download,
      action: "download",
      color: "from-slate-600 to-gray-700",
    },
    {
      title: "Share with Partner",
      description: "Share booking details with your partner or family",
      icon: Share2,
      action: "share",
      color: "from-pink-600 to-rose-600",
    },
    {
      title: "View Our Portfolio",
      description: "Get inspired by our previous work",
      icon: Star,
      action: "portfolio",
      color: "from-amber-600 to-yellow-600",
    },
  ]

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "download":
        // Implement PDF download
        console.log("Downloading booking details...")
        break
      case "share":
        // Implement sharing functionality
        if (navigator.share) {
          navigator.share({
            title: "My Wedding Booking - Manglam Event",
            text: `I just booked my ${bookingData.eventType} with Manglam Event! Booking ID: ${bookingData.bookingId}`,
            url: window.location.href,
          })
        }
        break
      case "portfolio":
        // Navigate to portfolio
        window.open("#gallery", "_self")
        onClose()
        break
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0 bg-white rounded-3xl border-0">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-amber-200/40 to-yellow-200/40 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: 5,
                  }}
                  className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"
                />

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, -10, 0],
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
                      top: `${15 + i * 10}%`,
                      left: `${5 + i * 11}%`,
                    }}
                  >
                    <Sparkles className="h-3 w-3 text-amber-400/50" />
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="absolute top-6 right-6 z-50 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <X className="h-5 w-5 text-gray-600" />
              </motion.button>

              <div className="relative z-10 p-8 max-h-[95vh] overflow-y-auto">
                {/* Success Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className="relative inline-block mb-8"
                  >
                    <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                      <CheckCircle className="h-16 w-16 text-white" />
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -inset-4 bg-emerald-400/30 rounded-full"
                    />
                  </motion.div>

                  <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <motion.span
                      initial={{ backgroundPosition: "0% 50%" }}
                      animate={{ backgroundPosition: "100% 50%" }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent bg-[length:200%_100%]"
                    >
                      Booking Confirmed!
                    </motion.span>
                  </motion.h1>

                  <motion.p variants={itemVariants} className="text-2xl text-gray-600 mb-4 font-light">
                    Thank you, <span className="font-semibold text-amber-700">{bookingData.name}</span>! Your dream
                    event planning journey begins now.
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/60 inline-block"
                  >
                    <div className="flex items-center space-x-3">
                      <Crown className="h-6 w-6 text-amber-600" />
                      <span className="text-lg font-bold text-gray-900">
                        Booking ID: <span className="text-amber-700">{bookingData.bookingId}</span>
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Booking Summary */}
                <motion.div variants={itemVariants} className="mb-12">
                  <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-8">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                        >
                          <Heart className="h-8 w-8 text-amber-600 mr-4" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900">Your Event Details</h2>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <User className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Contact Information</h3>
                              <p className="text-gray-600">{bookingData.name}</p>
                              <p className="text-gray-600">{bookingData.email}</p>
                              <p className="text-gray-600">{bookingData.phone}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Event Details</h3>
                              <p className="text-gray-600">{bookingData.eventType}</p>
                              <p className="text-gray-600">
                                {new Date(bookingData.eventDate).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                              <p className="text-gray-600">{bookingData.guestCount} guests</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Budget Range</h3>
                              <p className="text-gray-600 text-lg font-semibold text-amber-700">{bookingData.budget}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <Crown className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">Selected Services</h3>
                              <div className="space-y-1">
                                {bookingData.selectedServices.slice(0, 3).map((service, index) => (
                                  <p key={index} className="text-gray-600 text-sm">
                                    • {service}
                                  </p>
                                ))}
                                {bookingData.selectedServices.length > 3 && (
                                  <p className="text-amber-600 text-sm font-medium">
                                    +{bookingData.selectedServices.length - 3} more services
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="md:col-span-2 lg:col-span-1">
                          <Card className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white border-0 h-full">
                            <CardContent className="p-6 flex flex-col justify-center h-full text-center">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Sparkles className="h-12 w-12 mx-auto mb-4" />
                              </motion.div>
                              <h3 className="text-xl font-bold mb-2">Premium Planning</h3>
                              <p className="text-amber-100 mb-4">
                                You've chosen our premium wedding planning experience
                              </p>
                              <div className="flex items-center justify-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Next Steps */}
                <motion.div variants={itemVariants} className="mb-12">
                  <div className="text-center mb-10">
                    <motion.h2
                      variants={itemVariants}
                      className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Clock className="h-8 w-8 text-amber-600 mr-4" />
                      </motion.div>
                      What Happens Next?
                    </motion.h2>
                    <p className="text-xl text-gray-600 font-light">
                      Here's your personalized roadmap to your dream event
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {nextSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative"
                      >
                        <Card
                          className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${step.bgColor} overflow-hidden h-full`}
                        >
                          <CardContent className="p-8 relative">
                            {/* Step Number */}
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                              className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                            >
                              <span className="text-xl font-bold text-gray-900">{step.step}</span>
                            </motion.div>

                            <div className="flex items-start space-x-6">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                              >
                                <step.icon className="h-8 w-8 text-white" />
                              </motion.div>

                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4 text-lg">{step.description}</p>
                                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                                  <span className="text-sm font-semibold text-gray-700 flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-amber-600" />
                                    {step.timeframe}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div variants={itemVariants} className="mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <p className="text-lg text-gray-600">Things you can do right now</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card
                          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm"
                          onClick={() => handleQuickAction(action.action)}
                        >
                          <CardContent className="p-6 text-center">
                            <motion.div
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                              className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg`}
                            >
                              <action.icon className="h-8 w-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                            <p className="text-gray-600 mb-4">{action.description}</p>
                            <Button
                              variant="outline"
                              className="border-2 border-gray-300 hover:border-amber-600 hover:bg-amber-50 transition-all duration-300 bg-transparent"
                            >
                              <ArrowRight className="h-4 w-4 mr-2" />
                              Get Started
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                    <CardContent className="p-10 relative">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-yellow-600/20"
                      />

                      <div className="relative z-10 text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Phone className="h-16 w-16 mx-auto mb-6 text-amber-400" />
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                          Our dedicated team is here to help you every step of the way. Don't hesitate to reach out with
                          any questions or concerns.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                          <div className="text-center">
                            <Phone className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                            <p className="text-gray-300">+91 98765 43210</p>
                            <p className="text-gray-300">Available 24/7</p>
                          </div>
                          <div className="text-center">
                            <Mail className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-300">info@manglamevent.com</p>
                            <p className="text-gray-300">Quick response guaranteed</p>
                          </div>
                          <div className="text-center">
                            <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-400" />
                            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                            <p className="text-gray-300">Mumbai, Maharashtra</p>
                            <p className="text-gray-300">By appointment</p>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white font-bold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
                          >
                            <Phone className="mr-3 h-6 w-6" />
                            Call Now for Priority Support
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
