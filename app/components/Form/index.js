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
  currentStepTitle,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
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
              isSubmitting={isSubmitting}
              nextButtonText={nextButtonText}
              handlePrevButton={handlePrevButton}
            />
          </FormikForm>
        </div>
      )}
    </Formik>
  )
}

export default FormEnhancer(Form)
