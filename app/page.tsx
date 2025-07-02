// import { Hero } from "@/components/hero"
// import { Services } from "@/components/services"
// import { About } from "@/components/about"
// import { Gallery } from "@/components/gallery"
// import { Testimonials } from "@/components/testimonials"
// import { Contact } from "@/components/contact"
// import { Footer } from "@/components/footer"
// import AIChatbot from "@/components/ai-chatbot"
// import { Navbar } from "@/components/navbar"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Gallery />
//       <Testimonials />
//       <Contact />
//       <Footer />
//       <AIChatbot />
//     </main>
//   )
// }


import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  )
}
