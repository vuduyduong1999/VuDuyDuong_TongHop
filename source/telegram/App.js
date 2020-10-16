import React, { useEffect, useState } from 'react'
import {
  View, Text, Dimensions, SafeAreaView, Image, ScrollView,
} from 'react-native'
import { IMAGE } from './assets/image'
import { Colors, font } from './assets/style'

const { width } = Dimensions.get('window')
const rate = width / 375
const App = (props) => {
  const { } = props
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{
        flex: 1, paddingHorizontal: 30 * rate, paddingTop: 40 * rate, paddingBottom: 50 * rate,
      }}
      >
        <SafeAreaView />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={IMAGE.back} style={{ height: 18 * rate, width: 10 * rate }} />
          <Text style={{
            ...font.bold, color: Colors.blue, fontSize: 25 * rate, marginLeft: 28 * rate,
          }}
          >
            @wdlam
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 34 * rate }}>
          <Image source={IMAGE.avatar} style={{ height: 82 * rate, width: 82 * rate }} />
          <View style={{ marginLeft: 18 * rate }}>
            <Text style={{
              ...font.bold, color: Colors.black, fontSize: 23 * rate,
            }}
            >
              Gloria Mckinney
            </Text>
            <Text style={{
              ...font.regular, color: Colors.grey, fontSize: 17 * rate,
            }}
            >
              +375(29)9638433
            </Text>
          </View>
        </View>

        <View style={{
          marginTop: 34 * rate,
          borderBottomWidth: 2 * rate,
          borderBottomColor: Colors.grey_light,
          paddingBottom: 25 * rate,
        }}
        >

          <Text style={{
            ...font.bold, color: Colors.black, fontSize: 20 * rate,
          }}
          >
            Account
          </Text>
          <Text style={{
            ...font.regular, color: Colors.black, fontSize: 17 * rate, marginTop: 13 * rate,
          }}
          >
            +375(29)9638433
          </Text>
          <Text style={{
            ...font.regular, color: Colors.grey, fontSize: 17 * rate, marginTop: 6 * rate,
          }}
          >
            Tap to change phone number
          </Text>
        </View>

        <View style={{
          marginTop: 25 * rate,
          borderBottomWidth: 2 * rate,
          borderBottomColor: Colors.grey_light,
          paddingBottom: 25 * rate,
        }}
        >
          <Text style={{
            ...font.regular, color: Colors.black, fontSize: 17 * rate,
          }}
          >
            @wdlam
          </Text>
          <Text style={{
            ...font.regular, color: Colors.grey, fontSize: 17 * rate, marginTop: 6 * rate,
          }}
          >
            Username
          </Text>

        </View>
        <View style={{
          marginTop: 25 * rate,
          paddingBottom: 33 * rate,
        }}
        >
          <Text style={{
            ...font.regular, color: Colors.black, fontSize: 17 * rate,
          }}
          >
            I’m Senior Frontend Developer from Microsoft
          </Text>
          <Text style={{
            ...font.regular, color: Colors.grey, fontSize: 17 * rate, marginTop: 6 * rate,
          }}
          >
            Bio
          </Text>

        </View>
        <View>
          <Text style={{
            ...font.bold, color: Colors.black, fontSize: 20 * rate,
          }}
          >
            Settings
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 * rate }}>
            <Image source={IMAGE.union} style={{ height: 21 * rate, width: 22 * rate }} />
            <Text style={{
              ...font.regular, color: Colors.black, fontSize: 18 * rate, marginLeft: 30 * rate,
            }}
            >
              Notification and Sounds
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 * rate }}>
            <Image source={IMAGE.private} style={{ height: 24 * rate, width: 16 * rate }} />
            <Text style={{
              ...font.regular, color: Colors.black, fontSize: 18 * rate, marginLeft: 30 * rate,
            }}
            >
              Privaty and Security
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 * rate }}>
            <Image source={IMAGE.chart} style={{ height: 22 * rate, width: 22 * rate }} />
            <Text style={{
              ...font.regular, color: Colors.black, fontSize: 18 * rate, marginLeft: 30 * rate,
            }}
            >
              Data and Stronge
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 * rate }}>
            <Image source={IMAGE.chat} style={{ height: 21 * rate, width: 22 * rate }} />
            <Text style={{
              ...font.regular, color: Colors.black, fontSize: 18 * rate, marginLeft: 30 * rate,
            }}
            >
              Chat settings
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 * rate }}>
            <Image source={IMAGE.device} style={{ height: 17 * rate, width: 22 * rate }} />
            <Text style={{
              ...font.regular, color: Colors.black, fontSize: 18 * rate, marginLeft: 30 * rate,
            }}
            >
              Devices
            </Text>
          </View>
        </View>
      </View>
      <SafeAreaView />
    </ScrollView>
  )
}
export default App
