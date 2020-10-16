import {
  call, put, takeLatest,
} from 'redux-saga/effects'
import axios from 'axios'
import { weatherTypes } from '../types'

function* getWeatherSaga(action) {
  try {
    console.log('===============================================')
    console.log('aaaa', action.payload.data)
    console.log('===============================================')
    const weather = yield call(
      () => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${action.payload.data}&appid=1be502950243e0f0db00a0dacad257e8&units=metric`)
    )
    yield put({ type: weatherTypes.GET_WEATHER_SUCCESS, payload: { data: weather.data } })
  } catch (error) {
    yield put({ type: weatherTypes.GET_WEATHER_FAILED, payload: { error } })
  }
}

function* weatherSaga() {
  yield takeLatest(weatherTypes.GET_WEATHER, getWeatherSaga)
}
export default weatherSaga
