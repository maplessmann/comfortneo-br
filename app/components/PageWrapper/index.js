import classNames from 'classnames'

const PageWrapper = ({ children, className }) => (
  <div className={classNames('page-wrapper', className)}>
    {children}
  </div>
)

export default PageWrapper
