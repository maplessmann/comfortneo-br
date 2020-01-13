import composeEnhancer from 'utils/composeEnhancer'

import route from './route'
import propsMapper from './propsMapper'

export default composeEnhancer(route, propsMapper)
