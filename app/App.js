import { hot } from 'react-hot-loader/root'
import Header from 'components/Header'
import Routes from './routes'

import 'styles/main.scss'

const App = () => {
  return (
    <main className="app-layout">
      <Header />
      <Routes />
    </main>
  )
}

export default hot(App)
