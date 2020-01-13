import { Field, ErrorMessage } from 'formik'

const Text = ({ name, type = 'text', label, ...props }) => {
  return (
    <div className="field-group">
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <Field className="field" id={name} type={type} name={name} {...props} />
      <ErrorMessage className="field-error" component="span" name={name} />
    </div>
  )
}

export default Text