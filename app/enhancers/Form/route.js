import { useHistory } from 'react-router-dom'

const route = () => {
  const history = useHistory()
  const goToSuccessPage = () => history.push('/sucesso')

  return {
    goToSuccessPage,
  }
}

export default route