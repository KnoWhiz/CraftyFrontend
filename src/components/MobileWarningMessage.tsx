import React from 'react'

const MobileWarningMessage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-main-blue">
      <div className="font-raleway flex h-3/5 w-4/5 flex-col items-center justify-center gap-y-4 bg-main-white px-10 text-center">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Welcome to Crafty!
        </h1>
        <h3 className="text-lg font-medium sm:text-2xl">
          This page is currently under construction for mobile. Please view our
          site on desktop instead. Thank you for your patience!
        </h3>
      </div>
    </div>
  )
}

export default MobileWarningMessage
