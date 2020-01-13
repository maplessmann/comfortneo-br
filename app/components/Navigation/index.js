import { Link } from 'react-router-dom'
import classNames from 'classnames'
import NavigationEnhancer from 'enhancers/Navigation'

const Navigation = ({ navigationList }) => {
  return (
    <nav className="main-nav">
      <ul className="list">
        {navigationList.map(({ label, path, isActive }, index) => (
          <li className="item" key={index}>
            <Link
              className={classNames('link', { '-active': isActive })}
              to={path}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationEnhancer(Navigation)
