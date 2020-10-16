/* eslint-disable no-undef */
import React, { useState } from 'react'
import {
  View, Image, SafeAreaView, TextInput, StyleSheet,
  TouchableOpacity, Dimensions, ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'

import * as Animatable from 'react-native-animatable'
import { Text } from '../../components'
import {
  email, logo, password, iconGG, iconFB,
} from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'
import { categoryActions, productActions, userActions } from '../../redux/actions'
import { Helpers, NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const LoginScreen = (props) => {
  const dispatch = useDispatch()
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'bot1@gmail.com' : '')
  const [passwordUser, setPasswordUser] = useState(__DEV__ ? '123456' : '')

  const handlePressSignIn = async () => {
    dispatch(userActions.loginUser({
      email: emailUser,
      password: passwordUser,
    }, (response) => {
      if (response.success) {
        dispatch(categoryActions.getCategories({
          token: response?.data?.token,
        }, (response) => {
        }))

        dispatch(productActions.getProducts({
          token: response?.data?.token,
        }, (response) => {

        }))
        Helpers.showMess('Login success!!!', 'success')
        NavigationHelpers.navigateToScreenInTab(SCREEN_NAME.HomeScreen)
      } else {
        Helpers.showMess(response.message)
      }
    }))
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite, paddingHorizontal: 16 }}>
        <SafeAreaView />
        <View style={{ alignItems: 'center' }}>

          <Animatable.Image
            animation="bounceInDown"
            source={logo}
            style={{ width: 72, height: 72, marginTop: 68 }}
            resizeMode="contain"
          />
          <Text style={{
            marginTop: 18,
            marginBottom: 8,
            ...TextStyles.heading4,
            color: Colors.neutralDark,
          }}
          >
            Welcome to Lafyuu
          </Text>
          <Text style={{
            ...TextStyles.bodyNormalTextRegular,
            color: Colors.neutralGrey,
            marginBottom: 28,
          }}
          >
            Sign in to continue
          </Text>
        </View>

        <View>
          <Animatable.View
            animation="slideInLeft"
            delay={350}
            duration={400}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 5,
              borderWidth: 2 * StyleSheet.hairlineWidth,
              borderColor: Colors.neutralLight,
            }}
          >
            <Image
              source={email}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />

            <TextInput
              value={emailUser}
              onChangeText={(text) => setEmailUser(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}
              placeholder="Your Email"
              placeholderTextColor={Colors.neutralGrey}
            />
          </Animatable.View>

          <Animatable.View
            animation="slideInRight"
            duration={400}
            delay={350}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 5,
              borderWidth: 2 * StyleSheet.hairlineWidth,
              borderColor: Colors.neutralLight,
              marginTop: 8,
            }}
          >
            <Image
              source={password}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />

            <TextInput
              value={passwordUser}
              onChangeText={(text) => setPasswordUser(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}
              placeholder="Your Password"
              placeholderTextColor={Colors.neutralGrey}
            />
          </Animatable.View>

          <Animatable.View
            animation="bounceInUp"
            delay={350}
            duration={400}
          >
            <TouchableOpacity
              onPress={handlePressSignIn}
            >
              <View style={{
                padding: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: Colors.primaryBlue,
                marginTop: 16,
              }}
              >
                <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.backgroundWhite }}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>

        </View>

        <View
          style={{
            flexDirection: 'row', alignItems: 'center', marginTop: 21, marginBottom: 16,
          }}
        >
          <View style={{
            flex: 1,
            height: 2 * StyleSheet.hairlineWidth,
            backgroundColor: Colors.neutralLight,
          }}
          />
          <Text style={{ width: 72, textAlign: 'center', ...TextStyles.bodyMediumTextBold }}>OR</Text>
          <View style={{
            flex: 1,
            height: 2 * StyleSheet.hairlineWidth,
            backgroundColor: Colors.neutralLight,
          }}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 16.5 * rate,
          borderRadius: 5,
          borderWidth: 2 * StyleSheet.hairlineWidth,
          borderColor: Colors.neutralLight,
          marginBottom: 16 * rate,

        }}
        >
          <Image
            source={iconGG}
            style={{ width: 24 * rate, height: 24 * rate, marginRight: 10 }}
            resizeMode="contain"
          />

          <Text style={{
            width: 72,
            textAlign: 'center',
            ...TextStyles.bodyMediumTextBold,
            flex: 1,
          }}
          >
            Login with Google
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 16.5 * rate,
          borderRadius: 5,
          borderWidth: 2 * StyleSheet.hairlineWidth,
          borderColor: Colors.neutralLight,
          marginBottom: 16 * rate,
        }}
        >
          <Image
            source={iconFB}
            style={{ width: 24 * rate, height: 24 * rate, marginRight: 10 }}
            resizeMode="contain"
          />

          <Text style={{
            width: 72,
            textAlign: 'center',
            ...TextStyles.bodyMediumTextBold,
            flex: 1,
          }}
          >
            Login with facebook
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 * rate }}>
          <Text style={{
            textAlign: 'center',
            ...TextStyles.linkSmall,
            flex: 1,
            marginBottom: 8 * rate,
          }}
          >
            Forgot Password?
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              textAlign: 'center',
              ...TextStyles.bodyNormalTextRegular,
              marginRight: 4 * rate,
            }}
            >
              Don’t have a account?
            </Text>
            <TouchableOpacity onPress={() => { NavigationHelpers.navigateToScreen(SCREEN_NAME.RegisterScreen) }}>
              <Text style={{
                textAlign: 'center',
                ...TextStyles.linkSmall,
                flex: 1,
              }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}

export default LoginScreen
