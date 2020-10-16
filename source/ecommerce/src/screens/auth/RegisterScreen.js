import React, { useState } from 'react'
import {
  View, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Text } from '../../components'
import {
  email, logo, password, iconUserFullName,
} from '../../../assets/images'
import { Colors, TextStyles } from '../../../assets/styles'
import { SCREEN_NAME } from '../../configs'
import { userActions } from '../../redux/actions'
import { Helpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375

const RegisterScreen = (props) => {
  const dispatch = useDispatch()
  const { navigation } = props
  const [emailUser, setEmailUser] = useState(__DEV__ ? 'bot1@gmail.com' : '')
  const [fullNameUser, setFullNameUser] = useState(__DEV__ ? 'Vũ Duy' : '')
  const [passwordUser, setPasswordUser] = useState(__DEV__ ? '123456' : '')
  const [passwordVerifyUser, setPasswordVerifyUser] = useState(__DEV__ ? '123456' : '')

  const handlePressSignUp = async () => {
    if (passwordUser === passwordVerifyUser) {
      dispatch(userActions.registerUser({
        email: emailUser,
        password: passwordUser,
        fullname: fullNameUser,
      }, (reponse) => {
        if (reponse.success) {
          Helpers.showMess('Register success', 'success')
          navigation.navigate(SCREEN_NAME.LoginScreen)
        } else {
          Helpers.showMess(reponse.message,)
        }
      }))
    } else { Helpers.showMess('Not match password',) }
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundWhite, paddingHorizontal: 16 }}>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Image
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
            Let’s Get Started
          </Text>
          <Text style={{
            ...TextStyles.bodyNormalTextRegular,
            color: Colors.neutralGrey,
            marginBottom: 28,
          }}
          >
            Create an new account
          </Text>
        </View>
        <View>
          <View style={{
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
              source={iconUserFullName}
              style={{ width: 24, height: 24, marginRight: 10 }}
              resizeMode="contain"
            />

            <TextInput
              value={fullNameUser}
              onChangeText={(text) => setFullNameUser(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}
              placeholder="Full name user"
              placeholderTextColor={Colors.neutralGrey}
            />
          </View>
          <View style={{
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
          </View>
          <View style={{
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
          </View>
          <View style={{
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
              value={passwordVerifyUser}
              onChangeText={(text) => setPasswordVerifyUser(text)}
              style={{ color: Colors.neutralGrey, ...TextStyles.bodyNormalTextBold }}
              placeholder="Password Again"
              placeholderTextColor={Colors.neutralGrey}
            />
          </View>

          <TouchableOpacity
            onPress={handlePressSignUp}
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
              <Text style={{ ...TextStyles.bodyMediumTextBold, color: Colors.backgroundWhite }}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{
          justifyContent: 'center', alignItems: 'center', marginBottom: 50 * rate, marginTop: 24 * rate,
        }}
        >

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              textAlign: 'center',
              ...TextStyles.bodyNormalTextRegular,
              marginRight: 4 * rate,
            }}
            >
              have a account?
            </Text>
            <TouchableOpacity onPress={() => { navigation.navigate(SCREEN_NAME.LoginScreen) }}>
              <Text style={{
                textAlign: 'center',
                ...TextStyles.linkSmall,
                flex: 1,
              }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default RegisterScreen
