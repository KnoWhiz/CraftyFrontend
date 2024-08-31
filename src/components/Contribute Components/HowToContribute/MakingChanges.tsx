import React from 'react'

const MakingChanges = () => {
  return (
    <div className="w-full">
      <h3 className="mb-6 text-[26px] font-semibold">Making Changes</h3>
      <div className="flex w-full flex-col items-start justify-start gap-y-0.5 pl-3">
        <div>
          <h3 className="inline text-2xl font-bold">1. Code: </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Implement your feature or bugfix. Ensure your code follows the
            project&apos;s coding standards.
          </h3>
        </div>
        <div>
          <h3 className="inline text-2xl font-bold">2. Test: </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Write tests to cover your changes and ensure all existing tests
            pass.
          </h3>
        </div>
        <div>
          <h3 className="inline text-2xl font-bold">3. Document: </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Update the documentation to reflect your changes if applicable.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default MakingChanges
