import React, { useEffect, useState } from 'react'
import {
  View, Dimensions, Image,
} from 'react-native'
import { TextStyles, Colors } from '../../assets/styles'
import {
  iconRight,
} from '../../assets/images'
import Text from './Text'

const { width } = Dimensions.get('window')
const rate = width / 375
const ElementProfileComponent = (props) => {
  const { imageRight, title, value } = props
  return (
    <View style={{
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 * rate,
    }}
    >

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <Image source={imageRight} style={{ height: 24 * rate, width: 24 * rate, marginRight: 15 * rate }} resizeMode="contain" />
        <Text style={{ ...TextStyles.heading6, color: Colors.neutralDark }}>
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>
          {value}
        </Text>
        <Image source={iconRight} style={{ height: 24 * rate, width: 24 * rate, marginLeft: 16 * rate }} resizeMode="contain" />
      </View>
    </View>
  )
}
export default ElementProfileComponent
