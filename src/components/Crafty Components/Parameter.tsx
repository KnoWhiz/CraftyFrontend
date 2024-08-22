import React, { useState } from 'react'

interface ParameterProps {
  title: string
  desc: string
  isDropdown: boolean
  getInput?: (e: any) => void
  defaultValue?: number
}

const Parameter: React.FC<ParameterProps> = ({
  title,
  desc,
  isDropdown,
  getInput,
  defaultValue,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [dropdownValue, setDropdownValue] = useState<number>(0)

  return (
    <div className="items-between flex w-full flex-col justify-start">
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="flex flex-row items-center justify-between gap-x-12">
        <p className="text-base font-normal">{desc}</p>
        {isDropdown ? (
          <div
            className="relative flex cursor-pointer flex-col gap-y-1"
            onClick={() => {
              showDropdown ? setShowDropdown(false) : setShowDropdown(true)
            }}
          >
            <div className="relative flex h-10 w-24 items-center justify-center rounded-2xl border-2 border-black bg-main-white px-4 text-center text-xl">
              <p>{dropdownValue}</p>
              <div className="absolute right-3 top-1/2">
                <svg
                  width="10"
                  height="4"
                  viewBox="0 0 10 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: showDropdown ? 'scaleY(-1)' : 'scaleY(1)',
                  }}
                >
                  <path
                    d="M4.99967 3.68751L0.833008 0.0416756H9.16634L4.99967 3.68751Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </div>
            </div>
            {showDropdown && (
              <div className="absolute top-11 z-10 flex w-24 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-main-white text-xl">
                {[...Array(11)].map((_, index) => (
                  <div
                    className="relative w-full cursor-pointer text-center drop-shadow-lg hover:bg-main-gray hover:drop-shadow-none"
                    key={index}
                    onClick={() => {
                      setDropdownValue(index)
                      setShowDropdown(false)
                    }}
                  >
                    {index}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <input
            className="h-10 w-24 rounded-2xl border-2 border-black px-4 text-center"
            defaultValue={defaultValue}
            onChange={getInput}
          />
        )}
      </div>
    </div>
  )
}

export default Parameter
