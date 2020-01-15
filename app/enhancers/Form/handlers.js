import createEmailBody from 'utils/createEmailBody'

const handlers = ({
  isLastStep,
  currentStep,
  setCurrentStep,
  sendFormData,
  setIsSubmittingForm,
  setFormSubmitted,
}) => {
  const goToPrevStep = () => setCurrentStep(currentStep - 1)
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  return {
    handlePrevButton: () => {
      if (currentStep === 0) return
      goToPrevStep()
    },

    handleSubmit: payload => {
      const submitForm = new Promise(resolve => resolve(payload))

      const handleStep = payload => {
        const emailBody = createEmailBody(payload)

        if (!isLastStep) {
          goToNextStep()
          return
        }

        setIsSubmittingForm(true)

        sendFormData({ emailBody })
          .then(response => {
            setFormSubmitted(true)
          })
          .catch(console.log)
      }

      return submitForm.then(handleStep)
    },
  }
}

export default handlers
