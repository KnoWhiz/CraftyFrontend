'use client'

import React, { useState } from 'react'
import RoundButton from '../RoundButton'

interface SignUpPopupProps {
  onSubmit: () => void
  onClose: () => void
}

const SignUpPopup: React.FC<SignUpPopupProps> = ({ onSubmit, onClose }) => {
  const [email, setEmail] = useState<string>('')
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false)

  const handleOnChange = (email: string) => {
    setEmail(email)

    // don't remember from where i copied this code, but this works.
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(email)) {
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="font-raleway relative flex h-[26rem] w-[50rem] flex-col items-center justify-center gap-y-10 bg-white py-10">
        <div className="absolute left-6 top-6">
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
            cursor="pointer"
          >
            <path
              d="M10.5 11.3973L3.35421 18.2361C3.08685 18.492 2.74657 18.6199 2.33337 18.6199C1.92018 18.6199 1.5799 18.492 1.31254 18.2361C1.04518 17.9802 0.911499 17.6546 0.911499 17.2591C0.911499 16.8637 1.04518 16.538 1.31254 16.2822L8.45837 9.44338L1.31254 2.60459C1.04518 2.34872 0.911499 2.02306 0.911499 1.62762C0.911499 1.23218 1.04518 0.906528 1.31254 0.650655C1.5799 0.394782 1.92018 0.266846 2.33337 0.266846C2.74657 0.266846 3.08685 0.394782 3.35421 0.650655L10.5 7.48944L17.6459 0.650655C17.9132 0.394782 18.2535 0.266846 18.6667 0.266846C19.0799 0.266846 19.4202 0.394782 19.6875 0.650655C19.9549 0.906528 20.0886 1.23218 20.0886 1.62762C20.0886 2.02306 19.9549 2.34872 19.6875 2.60459L12.5417 9.44338L19.6875 16.2822C19.9549 16.538 20.0886 16.8637 20.0886 17.2591C20.0886 17.6546 19.9549 17.9802 19.6875 18.2361C19.4202 18.492 19.0799 18.6199 18.6667 18.6199C18.2535 18.6199 17.9132 18.492 17.6459 18.2361L10.5 11.3973Z"
              fill="#1C1B1F"
            />
          </svg>
        </div>
        <div className="flex flex-col items-baseline gap-y-2">
          <h1 className="text-3xl font-normal">
            Expertise to Engaging Videos - Try Crafty!
          </h1>
          <h1 className="text-3xl font-semibold">Sign up for early access!</h1>
        </div>
        <input
          className="h-14 w-2/3 rounded-xl bg-main-gray px-6 text-xl font-light text-black placeholder:text-xl placeholder:font-light placeholder:text-black"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            handleOnChange(e.target.value)
          }}
        />
        <RoundButton
          text="Submit"
          color="green"
          click={() => {
            isValidEmail ? onSubmit() : {}
          }}
        />
      </div>
    </div>
  )
}

export default SignUpPopup
