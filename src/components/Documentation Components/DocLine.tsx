import React from 'react'

const DocLine = ({ lines, label }: { lines: string[]; label: string }) => {
  const docLines = lines.map((line, index) => (
    <p
      key={index}
      className={`${line.substring(0, 1) === '#' ? `font-extralight` : `font-normal`} font-raleway text-base text-black`}
    >
      {line}
    </p>
  ))

  return (
    <div className="w-full">
      {label !== '' && <p className="mb-4 text-main-black">{label}</p>}
      <div className="flex w-full flex-col items-start justify-start bg-line-gray">
        <ul className="my-4 ml-4 text-xl">{docLines}</ul>
      </div>
    </div>
  )
}

export default DocLine
