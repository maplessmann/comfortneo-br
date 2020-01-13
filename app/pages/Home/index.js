import PageWrapper from 'components/PageWrapper'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <PageWrapper className="home-page">
      <h1 className="title">Tradução comfortneo</h1>
      <Link to="/avaliar" className="button">Fazer avaliação</Link>
    </PageWrapper>
  )
}

export default Home
