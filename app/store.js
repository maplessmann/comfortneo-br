import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from 'ducks'

export default createStore(reducers, composeWithDevTools())
