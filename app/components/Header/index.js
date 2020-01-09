import Navigation from 'components/Navigation'

const navigationList = [
  {
    label: 'Home',
    path: '/',
    isActive: true,
  },
  {
    label: 'Avaliação',
    path: '/avaliar/',
    isActive: false,
  },
]

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="title">Tradução Comfortneo</h1>
        <Navigation list={navigationList} />
      </div>
    </header>
  )
}

export default Header