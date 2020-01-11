import Button from 'components/Button'

const FormNavigation = ({ handlePrevButton, isSubmitting, nextButtonText }) => {
  return (
    <div className="form-navigation">
      <Button className="-raw" onClick={handlePrevButton}>Voltar</Button>
      <Button type="submit" disabled={isSubmitting}>
        {nextButtonText}
      </Button>
    </div>
  )
}

export default FormNavigation
