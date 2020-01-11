import classNames from 'classnames'

const PageWrapper = ({ children, className }) => (
  <div className={classNames('page-wrapper', className)}>
    <div className="container">
      {children}
    </div>
  </div>
)

export default PageWrapper
