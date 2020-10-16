import React from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native'

const settingScreen = (props) => {
  const { navigation } = props
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20 }}>
        setting screeen
      </Text>
      <TouchableOpacity
        onPress={() => { navigation.goBack() }}
      >
        <Text> Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default settingScreen
