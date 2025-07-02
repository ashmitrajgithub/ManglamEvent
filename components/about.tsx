"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Calendar, Crown, Gem } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Heart,
      number: "500+",
      label: "Happy Couples",
      color: "from-amber-600 to-yellow-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Calendar,
      number: "8+",
      label: "Years Experience",
      color: "from-slate-600 to-gray-700",
      bgColor: "bg-slate-50",
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won",
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Events Planned",
      color: "from-gray-600 to-slate-600",
      bgColor: "bg-gray-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"></div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                >
                  <Crown className="h-8 w-8 text-amber-600" />
                </motion.div>
                <span className="text-amber-700 font-semibold text-lg tracking-wide uppercase">About Us</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent bg-[length:200%_100%]"
                >
                  Crafting Dreams
                </motion.span>
                <br />
                <span className="text-gray-800">Into Reality</span>
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                At <span className="font-semibold text-amber-700">Manglam Event</span>, we believe that every love story
                deserves a perfect celebration. With over 8 years of experience in creating magical weddings and
                unforgettable events, we have established ourselves as one of the premier wedding planning companies in
                India.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Our team of passionate professionals works tirelessly to transform your dreams into reality, ensuring
                every detail is meticulously planned and flawlessly executed. From intimate ceremonies to grand
                celebrations, we craft experiences that reflect your unique love story.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Gem className="mr-2 h-5 w-5" />
                  Discover Our Story
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`group hover:shadow-2xl transition-all duration-500 border-0 ${stat.bgColor} cursor-pointer`}
                >
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/60"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Why Choose <span className="text-amber-700">Manglam Event</span>?
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Heart,
                  title: "Personalized Touch",
                  description: "Every event is uniquely crafted to reflect your personal style and vision.",
                  color: "from-amber-600 to-yellow-600",
                },
                {
                  icon: Award,
                  title: "Award-Winning Team",
                  description: "Our experienced professionals have won multiple industry awards.",
                  color: "from-slate-600 to-gray-700",
                },
                {
                  icon: Crown,
                  title: "Flawless Execution",
                  description: "Meticulous planning ensures your special day goes off without a hitch.",
                  color: "from-yellow-600 to-amber-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
