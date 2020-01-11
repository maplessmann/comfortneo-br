import classNames from 'classnames'

const Button = ({ children, onClick, type = 'button', className, ...props }) => {
  return (
    <button
      className={classNames('button', className)}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
