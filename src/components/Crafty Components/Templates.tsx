/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import TemplateSelectPopup from './TemplateSelectPopup'

interface TemplatesProps {
  onSelect: () => void
}

const Templates: React.FC<TemplatesProps> = ({ onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [showIndex, setShowIndex] = useState<number>(-1)
  const [showTemplatePopup, setShowTemplatePopup] = useState<boolean>(false)

  const handleSelectThumb = (index: number) => {
    setSelectedIndex(index)
    onSelect()
  }

  const handleOpenThumb = (index: number) => {
    setShowIndex(index)
    setShowTemplatePopup(true)
  }

  return (
    <div className="flex max-w-[50%] flex-col items-start justify-start gap-y-8">
      <h1 className="text-3xl font-semibold">Slide Template File</h1>
      <div className="flex flex-col items-start justify-start gap-y-0 text-base leading-tight">
        <p className="font-bold">Click and select a slide template!</p>
        <p className="font-normal">
          Specifies the template file for generating slides. Default value is 3
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-x-2 gap-y-8">
        {[...Array(8)].map((_, index) => (
          <div
            className="relative cursor-pointer drop-shadow-lg"
            key={index}
            onClick={() => {
              handleOpenThumb(index)
            }}
          >
            <img
              src={`./assets/thumbnails/thumb-${index + 1}.png`}
              alt={`template ${index + 1} thumbnail`}
            />
            <div
              className={`absolute inset-0 ${
                selectedIndex === index
                  ? 'border-[3px] border-solid border-[#175DCC]'
                  : ''
              }`}
            ></div>
          </div>
        ))}
      </div>
      {showTemplatePopup && (
        <TemplateSelectPopup
          onSelect={() => {
            handleSelectThumb(showIndex)
            setShowTemplatePopup(false)
          }}
          onClose={() => {
            setShowTemplatePopup(false)
          }}
          template={`./assets/thumbnails/thumb-${showIndex + 1}.png`}
        />
      )}
    </div>
  )
}

export default Templates
