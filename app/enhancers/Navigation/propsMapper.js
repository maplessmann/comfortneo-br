const propsMapper = ({ location }) => {
  const isCurrentPath = path => path === location.pathname

  const navigationList = [
    {
      label: 'Home',
      path: '/',
      isActive: isCurrentPath('/'),
    },
    {
      label: 'Avaliação',
      path: '/avaliar',
      isActive: isCurrentPath('/avaliar'),
    },
  ]

  return {
    navigationList,
  }
}

export default propsMapper
