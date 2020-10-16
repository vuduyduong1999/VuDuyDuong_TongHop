import React, { useState, useEffect } from 'react'
import {
  View,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import LottieView from 'lottie-react-native'
import { useDispatch } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { loading } from '../../assets/animations'
import { weatherAction } from '../redux/actions'

const SplashScreenn = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  useEffect(() => {
    getOldWeather()
  }, [])

  const getOldWeather = async () => {
    dispatch(weatherAction.getWeatherFromAPI('Ho chi minh'))
    SplashScreen.hide()
    navigation.replace('MainScreen')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        source={loading}
        loop
        autoPlay
      />
    </View>
  )
}
export default SplashScreenn
