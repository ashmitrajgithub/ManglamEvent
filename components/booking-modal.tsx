"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { BookingConfirmation } from "@/components/booking-confirmation"
import { X, Calendar, User, CheckCircle, ArrowRight, ArrowLeft, Crown, Sparkles } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  selectedService: {
    title: string
    price: string
    icon: any
    color: string
  } | null
}

interface FormData {
  // Step 1: Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string

  // Step 2: Event Details
  eventType: string
  eventDate: string
  eventTime: string
  venue: string
  guestCount: string
  budget: string

  // Step 3: Service Preferences
  selectedServices: string[]
  specialRequests: string
  inspiration: string

  // Step 4: Additional Information
  hearAboutUs: string
  previousEvents: string
  timeline: string
  additionalNotes: string
}

export function BookingModal({ isOpen, onClose, selectedService }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingId, setBookingId] = useState("")
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    guestCount: "",
    budget: "",
    selectedServices: selectedService ? [selectedService.title] : [],
    specialRequests: "",
    inspiration: "",
    hearAboutUs: "",
    previousEvents: "",
    timeline: "",
    additionalNotes: "",
  })

  const totalSteps = 4

  const eventTypes = [
    "Wedding Ceremony",
    "Reception",
    "Engagement",
    "Destination Wedding",
    "Corporate Event",
    "Birthday Celebration",
    "Anniversary",
    "Other",
  ]

  const budgetRanges = [
    "Under ₹5 Lakhs",
    "₹5-10 Lakhs",
    "₹10-25 Lakhs",
    "₹25-50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "Above ₹1 Crore",
    "Let's Discuss",
  ]

  const guestCounts = ["Under 50", "50-100", "100-200", "200-300", "300-500", "500-1000", "1000+"]

  const availableServices = [
    "Complete Wedding Planning",
    "Destination Weddings",
    "Venue Selection",
    "Wedding Decor",
    "Photography & Videography",
    "Entertainment & Shows",
    "Catering Services",
    "Wedding Choreography",
    "Bridal Makeup",
    "Transportation",
    "Accommodation",
    "Vendor Management",
  ]

  const timelineOptions = ["Less than 3 months", "3-6 months", "6-12 months", "More than 1 year", "Flexible"]

  const generateBookingId = () => {
    const prefix = "ME"
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.random().toString(36).substring(2, 5).toUpperCase()
    return `${prefix}${timestamp}${random}`
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    const newBookingId = generateBookingId()
    setBookingId(newBookingId)
    console.log("Form submitted:", { ...formData, bookingId: newBookingId })

    // Close the booking modal and show confirmation
    setShowConfirmation(true)
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
    onClose()
    // Reset form
    setCurrentStep(1)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventTime: "",
      venue: "",
      guestCount: "",
      budget: "",
      selectedServices: selectedService ? [selectedService.title] : [],
      specialRequests: "",
      inspiration: "",
      hearAboutUs: "",
      previousEvents: "",
      timeline: "",
      additionalNotes: "",
    })
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const renderStep1 = () => (
    <motion.div variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        >
          <User className="h-16 w-16 text-amber-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h3>
        <p className="text-gray-600">Let's start with your basic details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">First Name *</label>
          <Input
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Last Name *</label>
          <Input
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Email Address *</label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
        <Input
          type="tel"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          required
          className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
        />
      </div>
    </motion.div>
  )

  const renderStep2 = () => (
    <motion.div variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div className="text-center mb-8">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <Calendar className="h-16 w-16 text-amber-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Event Details</h3>
        <p className="text-gray-600">Tell us about your special event</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Event Type *</label>
          <select
            value={formData.eventType}
            onChange={(e) => handleInputChange("eventType", e.target.value)}
            required
            className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Event Date *</label>
          <Input
            type="date"
            value={formData.eventDate}
            onChange={(e) => handleInputChange("eventDate", e.target.value)}
            required
            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Preferred Time</label>
          <Input
            type="time"
            value={formData.eventTime}
            onChange={(e) => handleInputChange("eventTime", e.target.value)}
            className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Guest Count *</label>
          <select
            value={formData.guestCount}
            onChange={(e) => handleInputChange("guestCount", e.target.value)}
            required
            className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
          >
            <option value="">Select guest count</option>
            {guestCounts.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Venue Preference</label>
        <Input
          placeholder="Preferred venue or location (e.g., Mumbai, Goa, Udaipur)"
          value={formData.venue}
          onChange={(e) => handleInputChange("venue", e.target.value)}
          className="border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Budget Range *</label>
        <select
          value={formData.budget}
          onChange={(e) => handleInputChange("budget", e.target.value)}
          required
          className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
        >
          <option value="">Select budget range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  )

  const renderStep3 = () => (
    <motion.div variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="h-16 w-16 text-amber-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Preferences</h3>
        <p className="text-gray-600">Choose the services you're interested in</p>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-semibold text-gray-700">Services Required *</label>
        <div className="grid md:grid-cols-2 gap-3">
          {availableServices.map((service) => (
            <motion.div key={service} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  formData.selectedServices.includes(service)
                    ? "bg-amber-50 border-amber-600 border-2 shadow-lg"
                    : "bg-white border-gray-200 border hover:border-amber-300"
                }`}
                onClick={() => handleServiceToggle(service)}
              >
                <CardContent className="p-4 flex items-center space-x-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.selectedServices.includes(service) ? "border-amber-600 bg-amber-600" : "border-gray-300"
                    }`}
                  >
                    {formData.selectedServices.includes(service) && <CheckCircle className="h-3 w-3 text-white" />}
                  </div>
                  <span className="font-medium text-gray-900">{service}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Special Requests</label>
        <Textarea
          placeholder="Any specific requirements, themes, or special requests..."
          value={formData.specialRequests}
          onChange={(e) => handleInputChange("specialRequests", e.target.value)}
          className="border-2 border-gray-200 focus:border-amber-600 rounded-xl p-4 min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Inspiration & Style</label>
        <Textarea
          placeholder="Describe your dream event style, colors, themes, or share inspiration..."
          value={formData.inspiration}
          onChange={(e) => handleInputChange("inspiration", e.target.value)}
          className="border-2 border-gray-200 focus:border-amber-600 rounded-xl p-4 min-h-[100px]"
        />
      </div>
    </motion.div>
  )

  const renderStep4 = () => (
    <motion.div variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
      <div className="text-center mb-8">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <CheckCircle className="h-16 w-16 text-amber-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Final Details</h3>
        <p className="text-gray-600">Just a few more details to complete your booking</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Planning Timeline *</label>
        <select
          value={formData.timeline}
          onChange={(e) => handleInputChange("timeline", e.target.value)}
          required
          className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
        >
          <option value="">Select timeline</option>
          {timelineOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">How did you hear about us?</label>
        <select
          value={formData.hearAboutUs}
          onChange={(e) => handleInputChange("hearAboutUs", e.target.value)}
          className="w-full border-2 border-gray-200 focus:border-amber-600 h-12 text-lg rounded-xl px-4 bg-white"
        >
          <option value="">Select option</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend/Family Referral">Friend/Family Referral</option>
          <option value="Wedding Website">Wedding Website</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Previous Client">Previous Client</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Previous Events Experience</label>
        <Textarea
          placeholder="Have you organized similar events before? Any specific challenges or preferences..."
          value={formData.previousEvents}
          onChange={(e) => handleInputChange("previousEvents", e.target.value)}
          className="border-2 border-gray-200 focus:border-amber-600 rounded-xl p-4 min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Additional Notes</label>
        <Textarea
          placeholder="Any other information you'd like to share with us..."
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
          className="border-2 border-gray-200 focus:border-amber-600 rounded-xl p-4 min-h-[80px]"
        />
      </div>

      {/* Summary Card */}
      <Card className="bg-amber-50 border-amber-200 border-2">
        <CardContent className="p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Crown className="h-5 w-5 text-amber-600 mr-2" />
            Booking Summary
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Primary Service:</span>
              <span className="font-semibold">{selectedService?.title || "Multiple Services"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Event Type:</span>
              <span className="font-semibold">{formData.eventType || "Not specified"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Guest Count:</span>
              <span className="font-semibold">{formData.guestCount || "Not specified"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Budget Range:</span>
              <span className="font-semibold">{formData.budget || "Not specified"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Services Selected:</span>
              <span className="font-semibold">{formData.selectedServices.length} services</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <>
      <AnimatePresence>
        {isOpen && !showConfirmation && (
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-white rounded-3xl">
              <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="relative">
                {/* Header */}
                <DialogHeader className="p-8 pb-4 relative overflow-hidden">
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
                    className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-yellow-100/50 opacity-50"
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {selectedService && (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${selectedService.color} flex items-center justify-center shadow-lg`}
                        >
                          <selectedService.icon className="h-6 w-6 text-white" />
                        </motion.div>
                      )}
                      <div>
                        <DialogTitle className="text-3xl font-bold text-gray-900">Book Your Dream Event</DialogTitle>
                        {selectedService && (
                          <p className="text-amber-700 font-semibold mt-1">
                            {selectedService.title} • {selectedService.price}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100 rounded-full">
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Step {currentStep} of {totalSteps}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        {Math.round((currentStep / totalSteps) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </DialogHeader>

                {/* Form Content */}
                <div className="p-8 pt-4 max-h-[60vh] overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}
                    {currentStep === 4 && renderStep4()}
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="p-8 pt-4 border-t border-gray-200 bg-gray-50/50">
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="flex items-center space-x-2 px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-amber-600 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </Button>

                    <div className="flex items-center space-x-2">
                      {[...Array(totalSteps)].map((_, index) => (
                        <motion.div
                          key={index}
                          className={`w-3 h-3 rounded-full ${index + 1 <= currentStep ? "bg-amber-600" : "bg-gray-300"}`}
                          animate={{
                            scale: index + 1 === currentStep ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: index + 1 === currentStep ? Number.POSITIVE_INFINITY : 0,
                            repeatDelay: 1,
                          }}
                        />
                      ))}
                    </div>

                    {currentStep < totalSteps ? (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={nextStep}
                          className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold shadow-lg"
                        >
                          <span>Next Step</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleSubmit}
                          className="flex items-center space-x-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold shadow-lg"
                        >
                          <CheckCircle className="h-5 w-5" />
                          <span>Submit Booking Request</span>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Booking Confirmation */}
      <BookingConfirmation
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        bookingData={{
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          budget: formData.budget,
          selectedServices: formData.selectedServices,
          bookingId: bookingId,
        }}
      />
    </>
  )
}
