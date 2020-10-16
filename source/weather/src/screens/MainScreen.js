import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native'
import moment from 'moment'
import LottieView from 'lottie-react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  search,
  menu,
  backgound1,
  backgound2,
  backgound3,
  backgound4,
} from '../../assets/images'
import { BasicAttributes, OclockComponent } from '../components/index'
import { loading } from '../../assets/animations'
import { weatherAction } from '../redux/actions'

const { width } = Dimensions.get('window')
const rate = width / 375
const font = {
  bolb: {
    fontFamily: 'Gilroy-Bold',
  },
}

const MainScreen = (props) => {
  const { navigation, route } = props

  const weather = useSelector((state) => state.weather.data)
  const dispatch = useDispatch()
  const [isRefesh, setIsRefesh] = useState(false)

  const [imagene, setImagene] = useState(backgound1)
  const setimage = (weathermain) => {
    if (weathermain === 'Clouds') {
      setImagene(backgound3)
    } else if (weathermain === 'Sun') {
      setImagene(backgound4)
    } else if (weathermain === 'Snow') {
      setImagene(backgound1)
    } else {
      setImagene(backgound2)
    }
  }

  useEffect(() => {
    setimage(weather?.weather[0]?.main)
    getNewWeatherByLocation()
  }, [])

  console.tron.log({ props })

  const getNewWeatherByLocation = async () => {
    dispatch(weatherAction.getWeatherFromAPI('Ha noi'))
  }

  if (!weather) {
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
  return (

    <ImageBackground
      source={imagene}
      style={{ width }}
    >
      <SafeAreaView />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 34 * rate,
        paddingTop: 26 * rate,
      }}
      >
        <Image
          source={search}
          style={{
            width: 40 * rate,
            height: 40 * rate,
          }}
        />
        <Image
          source={menu}
          style={{
            width: 40 * rate,
            height: 40 * rate,
          }}
        />
      </View>
      <ScrollView
        style={{ marginTop: 30 * rate }}
        refreshControl={<RefreshControl
          refreshing={isRefesh}
          onRefresh={async () => {
            setIsRefesh(true)
            await getNewWeatherByLocation()
            setTimeout(() => {
              setIsRefesh(false)
            }, 1000)
          }}
        />}
      >
        <View style={{ paddingLeft: 34 * rate }}>
          <Text style={{
            fontSize: 36 * rate, fontFamily: 'Gilroy-Bold', color: '#fff',
          }}
          >
            {weather?.name}
          </Text>
          <OclockComponent />
        </View>
        <View>
          <Text style={{
            fontSize: 96 * rate, ...font.bolb, marginTop: 120 * rate, color: '#fff', marginLeft: 34 * rate,
          }}
          >
            {`${weather?.main?.temp} *`}
          </Text>
        </View>
        <View style={[styles.leftt, { flexDirection: 'row', marginTop: 28 * rate, alignItems: 'center' }]}>
          <Image
            source={{ uri: `http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png` }}
            style={{ width: 40 * rate, height: 40 * rate }}
          />
          <Text style={{
            fontSize: 24 * rate, ...font.bolb, color: '#fff', marginLeft: 3 * rate,
          }}
          >
            {weather?.weather[0]?.main}
          </Text>
        </View>

        <View style={{
          marginTop: 52 * rate,
          marginHorizontal: 27 * rate,
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#998383',
        }}
        />
        <View style={{
          flexDirection: 'row', marginLeft: 41 * rate, marginTop: 41 * rate, marginBottom: 60 * rate,
        }}
        >
          <BasicAttributes
            nameAttribute="Wind"
            valueAttribute={weather?.wind?.speed}
            unitAttribute="m/s"
            percent={0.001 * weather?.wind?.deg}
          />
          {weather?.rain ? <BasicAttributes
            nameAttribute="Rain"
            valueAttribute={weather?.rain['1h']}
            unitAttribute="mm"
            percent={0.5}
          /> : null}
          <BasicAttributes
            nameAttribute="Humidity"
            valueAttribute={weather?.main?.humidity}
            unitAttribute="%"
            percent={0.01 * weather?.main?.humidity}
          />
        </View>
      </ScrollView>

    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  leftt: {
    marginLeft: 34 * rate,
  },
})
export default MainScreen
