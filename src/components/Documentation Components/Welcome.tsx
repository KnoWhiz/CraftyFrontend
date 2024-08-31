import React from 'react'

const Welcome = () => {
  return (
    <div className="ml-48 mt-24 flex items-center justify-center pb-24 pt-12">
      <div className="font-raleway flex h-1/3 w-3/4 flex-col items-center justify-center gap-y-4 lg:w-1/2">
        <h1 className="text-center text-title font-semibold">
          Crafty: Developer Documentation
        </h1>

        <h2 className="text-2xl font-medium leading-tight">
          Welcome developers! This comprehensive documentation guides you
          through integrating Crafty into your applications
        </h2>
      </div>
    </div>
  )
}

export default Welcome
