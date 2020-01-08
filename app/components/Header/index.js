import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="main-header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avaliar/">Avaliação</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header