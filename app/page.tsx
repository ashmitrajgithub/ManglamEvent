import Hero from "@/components/Hero"
import UpcomingEvent from "@/components/UpcomingEvent"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Trust from "@/components/Trust"
import About from "@/components/about"
import Planner from "@/components/Planner"
import Contact from "@/components/Contact"
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
      <Planner />
      <Trust />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  )
}
