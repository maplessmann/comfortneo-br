import FormEnhancer from 'enhancers/Form'
import { Formik, Form as FormikForm } from 'formik'
import FormNavigation from './Navigation'
import Loader from 'components/Loader'

const Form = ({
  initialValues,
  handleSubmit,
  validations,
  currentStepFields,
  nextButtonText,
  handlePrevButton,
  currentStepTitle,
  isSubmittingForm,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <div className="form-wrapper">
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
