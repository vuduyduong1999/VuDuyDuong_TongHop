import React, { useEffect, useState } from 'react'
import { Text, Dimensions } from 'react-native'
import moment from 'moment'

const { width } = Dimensions.get('window')
const rate = width / 375
const OclockComponent = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    const timerrr = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => { clearInterval(timerrr) }
  }, [count])
  return (
    <Text style={{
      fontSize: 18 * rate,
      fontFamily: 'Gilroy-Bold',
      color: '#fff',
      marginTop: 8 * rate,
    }}
    >
      {moment().format('LT - dddd, DD MMM YYYY')}
    </Text>
  )
}
export default OclockComponent
