import React, { useRef, useState } from 'react'
import {
  View, TouchableOpacity, Dimensions, Image, Animated,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
import { addNewTodo } from '../redux/action'
import { plus, send } from '../../assets/images'
import { Colors, Fonts } from '../../assets/styles'

const { width } = Dimensions.get('window')
const rate = width / 375
const AddNewTodoComponent = (props) => {
  const { } = props
  const opacity = useRef(new Animated.Value(1)).current
  const dispatch = useDispatch()
  const aniValue = useRef(new Animated.Value(0)).current
  const handlePressButton = () => {
    if (isSendOrNew) {
      Animated.spring(aniValue, {
        toValue: 1,
        tension: 100,
        useNativeDriver: true,
      }).start()
      setIsSendOrNew(false)
    } else {
      fadeOut()
      dispatch(addNewTodo(todoNewInTextInput))
    }
  }
  const fadeOut = () => {
    setIsSendOrNew(true)
    Animated.spring(aniValue, {
      toValue: 0,
      tension: 100,
      useNativeDriver: true,
    }).start()
  }
  const tranX = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  })
  const [isSendOrNew, setIsSendOrNew] = useState(true)
  const [todoNewInTextInput, setTodoNewInTextInput] = useState('')

  return (
    <View style={{
      // position: 'absolute',
      // bottom: 50,
      // right: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      marginBottom: 10 * rate,
    }}
    >
      <Animated.View style={{
        width: 250,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.blue3,
        justifyContent: 'center',
        flex: 1,
        opacity,
        marginLeft: 10,
        // opacity: aniValue,
        transform: [{
          translateX: tranX,
        }],
      }}
      >
        <TextInput
          placeholder="Todo..."
          placeholderTextColor={Colors.white}
          onChangeText={(textipch) => { setTodoNewInTextInput(textipch) }}
          style={{
            ...Fonts.semiBold, fontSize: 14, color: Colors.white, marginHorizontal: 24 * rate,
          }}
          onBlur={() => {
            fadeOut()
          }}
        />
      </Animated.View>

      <TouchableOpacity onPress={handlePressButton}>
        <View style={{
          width: 40 * rate,
          height: 40 * rate,
          borderRadius: 20 * rate,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.blue3,
          marginLeft: 20 * rate,
        }}
        >
          <Image
            source={isSendOrNew ? plus : send}
            style={{ width: 26 * rate, height: 26 * rate }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default AddNewTodoComponent
