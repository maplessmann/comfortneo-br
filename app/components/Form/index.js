import FormEnhancer from 'enhancers/Form'
import { Formik, Form as FormikForm } from 'formik'
import FormNavigation from './Navigation'
import Loader from 'components/Loader'
import SuccessMessage from 'components/SuccessMessage'
import ProgressBar from 'components/ProgressBar'

const Form = ({
  initialValues,
  handleSubmit,
  validations,
  currentStepFields,
  nextButtonText,
  handlePrevButton,
  currentStepTitle,
  isSubmittingForm,
  formSubmitted,
  currentStep,
  totalSteps,
}) => {
  return formSubmitted ? (
    <SuccessMessage />
  ) : (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <div className="form-wrapper">
          <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
          <h1 className="form-title">{currentStepTitle}</h1>
          <FormikForm className="form">
            {currentStepFields.map(
              ({ component: Component, ...props }, index) => (
                <Component key={index} {...props} />
              )
            )}
            <FormNavigation
              isSubmitting={isSubmittingForm}
              nextButtonText={nextButtonText}
              handlePrevButton={handlePrevButton}
            />
          </FormikForm>
          <Loader isVisible={isSubmittingForm} />
        </div>
      )}
    </Formik>
  )
}

export default FormEnhancer(Form)
