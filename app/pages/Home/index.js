import PageWrapper from 'components/PageWrapper'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <PageWrapper className="home-page">
      <Link to="/avaliar" className="button">
        Fazer avaliação
      </Link>
      <img
        src="https://traducao-comfortneo.000webhostapp.com/images/comfort_neo_scale.png"
        className="image"
      />
    </PageWrapper>
  )
}

export default Home
