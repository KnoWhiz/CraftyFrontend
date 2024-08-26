'use client'
import React, { useState } from 'react'
import InputField from '../Pricing Components/InputField'
import RoundButton from '../RoundButton'
import ConfirmationPopup from '../ConfirmationPopup'

const Contact = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [showConfirmationPopup, setShowConfirmationPopup] =
    useState<boolean>(false)

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('submitted')
    console.log('Current values:', { name, email, message })

    // Reset input fields
    setName('')
    setEmail('')
    setMessage('')

    setShowConfirmationPopup(true)
  }

  return (
    <div className="flex items-center gap-x-20 px-24 pb-10 pt-40">
      <div className="font-raleway flex h-full w-full flex-col items-baseline justify-start gap-y-6 leading-8">
        <h1 className="mb-3 text-title font-bold">Contact</h1>
        <h3 className="text-2xl font-medium">
          We would love to answer any questions or concerns you may have{' '}
        </h3>
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          width="1/4"
        />
        <InputField
          label="Email"
          width="1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Message"
          width="1/2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          big
        />
        <div className="flex w-full justify-end">
          <RoundButton click={handleSubmit} text={'Submit'} color={'blue'} />
        </div>
      </div>
      {showConfirmationPopup && (
        <ConfirmationPopup
          onClose={() => {
            setShowConfirmationPopup(false)
          }}
          text={'Message sent! We hope to get back to you soon!'}
        />
      )}
    </div>
  )
}

export default Contact
