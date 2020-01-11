import { ErrorMessage } from 'formik'
import RadioOptions from './RadioOptions'
import TranslationBox from 'components/TranslationBox'

export default ({ options, name, label }) => {
  return (
    <div className="field-group radio-group">
      <TranslationBox translation={label} />
      <RadioOptions options={options} name={name} />
      <ErrorMessage className="field-error" component="span" name={name} />
    </div>
  )
}
