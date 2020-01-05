import FormEnhancer from 'enhancers/Form'
import { Formik, Form as FormikForm } from 'formik'
import FormNavigation from './Navigation'

const Form = ({
  initialValues,
  handleSubmit,
  validations,
  currentStepFields,
  nextButtonText,
  handlePrevButton,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      {({ isSubmitting }) => (
        <FormikForm className="form">
          {currentStepFields.map(
            ({ component: Component, ...props }, index) => (
              <Component key={index} {...props} />
            )
          )}
          <FormNavigation
            isSubmitting={isSubmitting}
            nextButtonText={nextButtonText}
            handlePrevButton={handlePrevButton}
          />
        </FormikForm>
      )}
    </Formik>
  )
}

export default FormEnhancer(Form)
