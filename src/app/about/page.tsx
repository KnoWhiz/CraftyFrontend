'use client'

import About from '@/components/About Components/About'
import MobileWarningMessage from '@/components/MobileWarningMessage'
import NavBar from '@/components/NavBar'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust the width threshold as needed
    }

    // Set initial state
    handleResize()

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobile) {
    return <MobileWarningMessage />
  }
  return (
    <div className="h-screen">
      <NavBar />
      <About />
    </div>
  )
}
