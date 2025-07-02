"use client"

import { useEffect } from "react"

export default function AIChatbot() {
  useEffect(() => {
    // Create and append the JotForm script
    const script = document.createElement("script")
    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/0197cca519fe764db55b709f4ebc758bf4be/embed.js?skipWelcome=1&maximizable=1"
    script.async = true

    // Add the script to the document head
    document.head.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">{/* The JotForm chatbot will be injected here automatically */}</div>
  )
}
