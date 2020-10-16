import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import AsyncStorage from '@react-native-community/async-storage'
import todoReducer from './reducer'

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

const persistedReducer = persistReducer(persistConfig, todoReducer)

const store = createStore(persistedReducer)
persistStore(store)
export default store
