import React from 'react'
import DocLine from '../../Documentation Components/DocLine'

const GettingStarted = () => {
  return (
    <div className="w-full">
      <h1 className="mb-6 text-3xl font-semibold">How to Contribute</h1>
      <h3 className="mb-6 text-[26px] font-semibold">Getting Started</h3>
      <div className="flex w-full flex-col items-start justify-start gap-y-2 pl-3">
        <div>
          <h3 className="inline text-2xl font-bold">
            1. Fork the Repository:{' '}
          </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Click on the &quot;Fork&quot; button at the top right of the
            repository page.
          </h3>
        </div>
        <div>
          <h3 className="inline text-2xl font-bold">2. Clone the Fork: </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Clone your fork to your local machine using:
          </h3>
        </div>
        <DocLine
          lines={['git clone https://github.com/your-username/crafty.git']}
          label={''}
        />
        <div>
          <h3 className="inline text-2xl font-bold">3. Create a branch: </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Create a new branch for your feature or bugfix:
          </h3>
        </div>
        <DocLine
          lines={['git checkout -b feature/your-feature-name']}
          label={''}
        />
        <div>
          <h3 className="inline text-2xl font-bold">
            4. Install Dependencies:{' '}
          </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Follow the instructions in the{' '}
          </h3>
          <a
            href="https://github.com/KnoWhiz/CraftyModel/blob/main/README.md"
            className="inline cursor-pointer text-2xl font-bold text-button-blue underline"
            target="_blank"
          >
            README
          </a>
          <h3 className="inline text-2xl font-medium">
            {' '}
            to set up your development environment.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
