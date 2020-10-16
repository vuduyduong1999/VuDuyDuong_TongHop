import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')
const rate = width / 375

const font = {
  bolb: {
    fontFamily: 'Gilroy-Bold',
  },
}

const BasicAttributes = (props) => {
  const {
    nameAttribute, valueAttribute, unitAttribute, percent,
  } = props
  return (
    <View style={{ marginRight: 53 * rate, height: 150 }}>
      <Text style={{ ...font.bolb, fontSize: 24 * rate, color: 'rgba(255,255,255,0.7)' }}>{nameAttribute}</Text>
      <Text style={{ ...font.bolb, fontSize: 36 * rate, color: 'rgba(255,255,255,1)' }}>{valueAttribute}</Text>
      <Text style={{
        ...font.bolb, fontSize: 24 * rate, color: 'rgba(255,255,255,1)', marginBottom: 9 * rate,
      }}
      >
        {unitAttribute}
      </Text>
      <Progress.Bar progress={percent} width={60 * rate} height={2 * rate} color="#1BED62" borderWidth={0} backgroundColor="#C4C4C4" />
    </View>
  )
}
BasicAttributes.prototype = {

  nameAttribute: PropTypes.string.isRequired,
  valueAttribute: PropTypes.string.isRequired,
  unitAttribute: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
}
export default BasicAttributes
