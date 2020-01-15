import { Field, ErrorMessage } from 'formik'

const Text = ({ name, type = 'text', label, component }) => {
  return (
    <div className="field-group">
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <Field
        className="field"
        id={name}
        type={type}
        name={name}
        component={component}
      />
      {component === 'textarea' && (
        <div className="field-label -aux">
          Caso seja selecionado "Item não representativo" ou "Item necessita de
          grande revisão para ser representativo", deixe a sua sugestão para
          alteração.
        </div>
      )}
      <ErrorMessage className="field-error" component="span" name={name} />
    </div>
  )
}

export default Text
