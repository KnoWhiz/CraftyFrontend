/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Demo = () => {
  return (
    <div className="font-raleway flex h-full flex-col items-center justify-center gap-y-6 pt-24">
      <h1 className="text-title font-bold">How it Works</h1>

      <iframe
        width="801"
        height="450"
        src="https://www.youtube.com/embed/OjBGrg5MEdE?rel=0&si=rFVwmBhXJaLF3ZE1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2 className="text-2xl">
        See how Crafty turns a topic into a video lecture in our video!
      </h2>
    </div>
  )
}

export default Demo
