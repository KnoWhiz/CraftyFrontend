'use client'

import React from 'react'
import RoundButton from '../RoundButton'

interface PricingCardProps {
  title: string
  desc: string
  price: number
  onSubscribe: () => void
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  desc,
  price,
  onSubscribe,
}) => {
  return (
    <div className="font-raleway flex h-[27rem] w-[20rem] flex-col justify-between border-[1px] border-solid border-black p-8">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-base leading-6">{desc}</p>
      </div>
      <div>
        <h1 className="inline text-3xl font-semibold">${price}/</h1>
        <p className="inline text-lg leading-6">month</p>
        <RoundButton text="Subscribe" click={onSubscribe} color="blue" />
      </div>
    </div>
  )
}

export default PricingCard
