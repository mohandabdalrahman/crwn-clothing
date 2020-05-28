import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

const middleWares = []

if (process.env.NODE_ENV === 'production') {
  middleWares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares))
export const persistor = persistStore(store)
