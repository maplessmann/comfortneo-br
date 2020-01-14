import { useState } from 'react'

const state = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)

  return {
    currentStep,
    setCurrentStep,
    isSubmittingForm,
    setIsSubmittingForm,
  }
}

export default state
