'use client'

import React from 'react'
import RoundButton from '../RoundButton'

import { usePathname, useRouter } from 'next/navigation'

const Contribute = () => {
  const router = useRouter()

  const handleContribute = () => {
    router.push('/contribute')
  }

  return (
    <div className="font-raleway flex h-[30rem] flex-col items-center justify-center gap-y-2">
      <h1 className="text-title font-semibold">Help Shape the Future</h1>
      <h2 className="mb-10 text-2xl leading-tight">
        Empower educators through our open source project
      </h2>
      <RoundButton text="Contribute" color="blue" click={handleContribute} />
    </div>
  )
}

export default Contribute
