import { ErrorMessage } from 'formik'
import RadioOptions from './RadioOptions'

const createMarkup = text => ({
  __html: text,
})

export default ({ options, name, label }) => {
  return (
    <div className="radio-group">
      <label dangerouslySetInnerHTML={createMarkup(label)} />
      <RadioOptions options={options} name={name} />
      <ErrorMessage className="field-error" component="span" name={name} />
    </div>
  )
}
