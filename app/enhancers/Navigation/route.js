import { useLocation } from 'react-router-dom'

const route = () => {
  const location = useLocation()

  return {
    location,
  }
}

export default route
