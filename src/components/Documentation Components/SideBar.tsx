'use client'

import React, { useEffect } from 'react'

const SideBar = () => {
  const scrollToElement = (
    event: { preventDefault: () => void },
    target: string,
  ) => {
    event.preventDefault() // Prevent the default anchor click behavior

    const element = document.getElementById(target)
    if (element) {
      const headerOffset = 100 // Adjust this value to match the height of your fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition + window.pageYOffset,
        behavior: 'smooth',
      })
    }
  }
  return (
    <aside className="font-raleway fixed left-0 top-24 flex h-[calc(100vh-6rem)] w-48 flex-col items-baseline justify-start gap-y-12 overflow-y-auto bg-main-white py-10 pl-8 pr-2 text-lg text-main-black">
      <button
        onClick={(event) => {
          scrollToElement(event, 'api-reference')
        }}
        className="flex cursor-pointer justify-start"
      >
        {' '}
        <h3 className="font-semibold">API Reference</h3>
      </button>
      <div className="flex flex-col gap-y-4">
        <button
          onClick={(event) => {
            scrollToElement(event, 'readme')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-semibold">ReadMe</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'installation')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Installation</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'api-keys')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">API Keys</h3>
        </button>
      </div>
      <div className="flex flex-col gap-y-4">
        <button
          onClick={(event) => {
            scrollToElement(event, 'cli')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-semibold">CLI</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'create')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Create</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'step')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Step</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'chapter')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Chapter</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'section')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Section</h3>
        </button>{' '}
        <button
          onClick={(event) => {
            scrollToElement(event, 'note')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Note</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'slide')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Slide</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'script')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Script</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'voice')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Voice</h3>
        </button>
        <button
          onClick={(event) => {
            scrollToElement(event, 'video')
          }}
          className="flex cursor-pointer justify-start"
        >
          <h3 className="font-normal">Video</h3>
        </button>{' '}
      </div>
    </aside>
  )
}

export default SideBar
