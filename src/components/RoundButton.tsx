'use client'

import React, { useEffect, useState } from 'react'

interface RoundButtonProps {
  click: () => void
  text: string
  color: string
  border?: boolean
  textColor?: string
}

const RoundButton: React.FC<RoundButtonProps> = ({
  click,
  text,
  color,
  border,
  textColor,
}) => {
  const [borderStyle, setBorderStyle] = useState<string>('')

  useEffect(() => {
    if (border) {
      setBorderStyle('border-solid border-[1.5px] border-black')
    } else {
      setBorderStyle('')
    }
  }, [border])

  return (
    <button
      type="button"
      style={{ cursor: 'pointer' }}
      onClick={click}
      className={`h-12 w-44 rounded-full text-2xl font-medium ${textColor ? `text-${textColor}` : `text-main-white`} transform transition-transform hover:scale-105 active:scale-95 ${
        color === 'green'
          ? 'bg-button-green'
          : color === 'blue'
            ? 'bg-button-blue'
            : 'bg-none'
      } ${borderStyle}`}
    >
      {text}
    </button>
  )
}

export default RoundButton
