import { weatherTypes } from '../types'

export const getWeatherFromAPI = (data) => {
  return {
    type: weatherTypes.GET_WEATHER,
    payload: { data },
  }
}
