import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Navigation = ({ list }) => {
  return (
    <nav className="main-nav">
      <ul className="list">
        {list.map(({ label, path, isActive }, index) => (
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

export default Navigation
