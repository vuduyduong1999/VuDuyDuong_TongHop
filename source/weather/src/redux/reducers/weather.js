import { weatherTypes } from '../types'

const initStore = {}

const weatherReducer = (state = initStore, action) => {
  switch (action.type) {
    case weatherTypes.GET_WEATHER_SUCCESS:
      // const data = action.payload
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default weatherReducer
