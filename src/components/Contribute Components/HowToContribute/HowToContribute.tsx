import React from 'react'
import GettingStarted from './GettingStarted'
import MakingChanges from './MakingChanges'
import SubmittingContribution from './SubmittingContribution'

const HowToContribute = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-24">
      <GettingStarted />
      <MakingChanges />
      <SubmittingContribution />
    </div>
  )
}

export default HowToContribute
