import React, { useEffect, useState } from 'react'
import {
  View, Image, Dimensions, StyleSheet, TouchableOpacity,
} from 'react-native'
// import { Colors } from '../../../assets/styles'
import { useSelector, useDispatch } from 'react-redux'
import {
  iconBack, avatar, iconGender, iconBirthday, iconEmail, iconPhone,
} from '../../../assets/images'
import { Text, ElementProfileComponent } from '../../components'
import { TextStyles, Colors } from '../../../assets/styles'
import { userActions } from '../../redux/actions'
import { NavigationHelpers } from '../../utils'

const { width } = Dimensions.get('window')
const rate = width / 375
const ProfileUserScreen = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('Male')
  const [email, setEmail] = useState('a@gmail.com')
  const [phone, setPhone] = useState('0123456789')

  useEffect(() => {
    dispatch(userActions.getProfileUser({ token }, (data) => {
      setFullName(data.data.fullname)
      setEmail(data.data.email)
      setGender(data.data.gender)
      setPhone(data.data.phone)
    }))
  }, [])

  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.backgroundWhite,

    }}
    >
      <View style={{
        paddingVertical: 28 * rate,
        paddingHorizontal: 16 * rate,

        flexDirection: 'row',
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.neutralLight,
      }}
      >
        <TouchableOpacity onPress={() => { NavigationHelpers.navigateBack() }}>
          <Image source={iconBack} />
        </TouchableOpacity>
        <Text style={{ ...TextStyles.heading4, color: Colors.neutralDark }}>Profile</Text>
      </View>
      <View style={{ paddingHorizontal: 16 * rate }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 28 * rate }}>
          <Image source={avatar} style={{ height: 72 * rate, width: 72 * rate, marginRight: 15 * rate }} />
          <View>
            <Text style={{ ...TextStyles.heading5, color: Colors.neutralDark }}>
              {fullName}
            </Text>
            <Text style={{ ...TextStyles.bodyNormalTextRegular, color: Colors.neutralGrey }}>
              @derlaxy
            </Text>
          </View>
        </View>

        <ElementProfileComponent imageRight={iconGender} title="Gender" value={gender} />
        <ElementProfileComponent imageRight={iconBirthday} title="Birthday" value="12-12-2000" />
        <ElementProfileComponent imageRight={iconEmail} title="Email" value={email} />
        <ElementProfileComponent imageRight={iconPhone} title="Phone Number" value={phone} />
      </View>

    </View>
  )
}

export default ProfileUserScreen
