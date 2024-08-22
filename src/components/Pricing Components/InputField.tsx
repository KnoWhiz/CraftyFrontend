'use client'

import React, { useState } from 'react'

interface InputFieldProps {
  label: string
  width: string
  big?: boolean
  onChange?: (e: any) => void
  value?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  width,
  big,
  onChange,
  value,
}) => {
  const [input, setInput] = useState<string>('')

  return (
    <div className={`flex flex-col items-start justify-start w-${width}`}>
      <p className="font-raleway text-2xl font-medium text-main-black">
        {label}
      </p>
      {big ? (
        <textarea
          {...(value ? { value: value } : { value: input })}
          {...(onChange
            ? { onChange: onChange }
            : { onChange: (e) => setInput(e.target.value) })}
          aria-label="input"
          placeholder=""
          title=""
          className={`min-h-52 w-full rounded-2xl border-[1.5px] border-solid border-main-black px-4 pt-2`}
        />
      ) : (
        <input
          {...(value ? { value: value } : { value: input })}
          {...(onChange
            ? { onChange: onChange }
            : { onChange: (e) => setInput(e.target.value) })}
          aria-label="input"
          placeholder=""
          title=""
          className={`h-12 w-full rounded-2xl border-[1.5px] border-solid border-main-black px-4`}
        />
      )}
    </div>
  )
}

export default InputField
