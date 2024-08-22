import React from 'react'

const DocLabel = ({ label }: { label: string }) => {
  return (
    <div className="inline-block rounded-xl bg-line-gray p-2 text-xl">
      <p>{label}</p>
    </div>
  )
}

export default DocLabel
