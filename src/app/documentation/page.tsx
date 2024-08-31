'use client'

import NavBar from '@/components/NavBar'
import SideBar from '@/components/Documentation Components/SideBar'
import Welcome from '@/components/Documentation Components/Welcome'
import Api from '@/components/Documentation Components/Api'
import Readme from '@/components/Documentation Components/Readme'
import Cli from '@/components/Documentation Components/Cli'
import Footnote from '@/components/Documentation Components/Footnote'
import MobileWarningMessage from '@/components/MobileWarningMessage'
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
      <SideBar />
      <Welcome />
      <Api />
      <Readme />
      <Cli />
      <Footnote />
    </div>
  )
}
