import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import createEncryptor from 'redux-persist-transform-encrypt'
import createSagaMiddleware from 'redux-saga'
import reactotron from '../../configs/ReactotronConfig'
import rootReducer from '../reducers'

import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const encryptor = createEncryptor({
  secretKey: 'dualeomapnhuheo',
  onError(error) {
    // Handle the error.
  },
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],

}
const composeEnhancers = compose
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeEnhancers(
  reactotron.createEnhancer(),
  applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga)
persistStore(store)

export default store
