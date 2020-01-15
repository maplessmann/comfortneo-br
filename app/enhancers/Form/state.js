import { useState } from 'react'

const state = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  return {
    currentStep,
    setCurrentStep,
    isSubmittingForm,
    setIsSubmittingForm,
    formSubmitted,
    setFormSubmitted,
  }
}

export default state
