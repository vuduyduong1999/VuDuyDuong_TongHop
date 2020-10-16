import React, { useRef, useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Animated, SafeAreaView, Platform,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { doneTodo } from '../redux/action'
import { Colors, Fonts } from '../../assets/styles'
import { Rectangle6 } from '../../assets/images'
import { AddNewTodoComponent } from '../components'

const { width } = Dimensions.get('window')

const AllTodoComponent = (props) => {
  const { jumpTo } = props
  const dispatch = useDispatch()
  const todos = useSelector((state) => state)
  const handleDoneTodo = (todo) => {
    dispatch(doneTodo(todo))
    jumpTo('done')
  }

  const handleMarkedDoneTodo = () => {

  }
  const [showSafeAreaView, setShowSafeAreaView] = useState(true)

  return (

    <View style={styles.viewWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos.currentTodo}
        extraData={todos}
        keyExtractor={(item, index) => `RenderAllTodoComponent-${index}`}
        renderItem={({ item }) => {
          if (item.state) {
            return (
              <View style={styles.viewRowTodo}>
                <View style={styles.viewTitleTodo}>
                  <TouchableOpacity onPress={handleMarkedDoneTodo}>
                    <View style={styles.buttonMarkedDone} />
                  </TouchableOpacity>

                  <Text style={styles.textTodo}>{item.todo}</Text>
                </View>

                <TouchableOpacity onPress={() => handleDoneTodo(item.todo)}>
                  <Image
                    source={Rectangle6}
                    style={styles.imageDelete}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )
          }
        }}
      />

      <AddNewTodoComponent />
      {Platform.OS === 'ios' && <KeyboardSpacer onToggle={(state) => { setShowSafeAreaView(!state) }} />}
      {showSafeAreaView && <SafeAreaView />}

    </View>
  )
}
export default AllTodoComponent
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28 / 375 * width,
    backgroundColor: Colors.white,
  },
  viewWrapper: {
    flex: 1,
  },
  viewRowTodo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTitleTodo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22 / 375 * width,
  },
  buttonMarkedDone: {
    width: 18 / 375 * width,
    height: 18 / 375 * width,
    borderRadius: 9 / 375 * width,
    backgroundColor: Colors.white,
    borderWidth: 3 * StyleSheet.hairlineWidth,
    borderColor: Colors.gray4,
    marginRight: 14 / 375 * width,
  },
  textTodo: {
    ...Fonts.semiBold,
    fontSize: 18 / 375 * width,
    color: Colors.gray2,
  },
  imageDelete: {
    width: 24 / 375 * width,
    height: 24 / 375 * width,
  },
  textTitleApp: {
    ...Fonts.bold,
    fontSize: 40 / 375 * width,
    color: Colors.gray2,
    marginTop: 46 / 375 * width,
    marginBottom: 22 / 375 * width,
  },
})
