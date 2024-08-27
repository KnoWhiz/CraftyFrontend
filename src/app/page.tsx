'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Landing Page Components/Footer'
import Features from '@/components/Landing Page Components/Features'
import Contribute from '@/components/Landing Page Components/Contribute'
import Introduction from '@/components/Landing Page Components/Introduction'
import Demo from '@/components/Landing Page Components/Demo'
import { useEffect, useState } from 'react'
import MobileWarningMessage from '@/components/MobileWarningMessage'

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
      <Introduction />
      {/*
      <Demo />
      */}
      <Features />
      <Contribute />
      <Footer />
      <NavBar />
    </div>
  )
}
