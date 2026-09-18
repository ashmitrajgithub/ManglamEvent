import Hero from "@/components/hero"
import UpcomingEvent from "@/components/UpcomingEvent"
import Services from "@/components/services"
import Portfolio from "@/components/Portfolio"
import Trust from "@/components/Trust"
import About from "@/components/about"
import Faq from "@/components/Faq"
import Contact from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />
      <UpcomingEvent />
      <About />
      <Services />
      <Portfolio />
      <Trust />
      <Faq />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  )
}
