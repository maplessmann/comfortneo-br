import formExperience from 'mock/formExperience'
import axios from 'axios'

const data = ({ currentStep }) => {
  const steps = formExperience.steps
  const currentStepFields = steps[currentStep].fields
  const currentStepTitle = steps[currentStep].header.title
  const isLastStep = steps.length === currentStep + 1
  const nextButtonText = isLastStep ? 'Enviar' : 'Avançar'

  return {
    formExperience,
    currentStepFields,
    isLastStep,
    nextButtonText,
    currentStepTitle,
    sendFormData: data =>
      axios({
        method: 'post',
        url: 'https://5dqgcno243.execute-api.us-east-1.amazonaws.com/prod',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      }),
  }
}

export default data
