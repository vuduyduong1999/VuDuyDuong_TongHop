import React, { useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image, Platform,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { deleteTodo, doneTodo } from '../redux/action'
import { Colors, Fonts } from '../../assets/styles'
import {
  deleteBtn, Rectangle6,
} from '../../assets/images'
import { AddNewTodoComponent } from '../components'

const { width } = Dimensions.get('window')

const AllTodoComponent = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state)
  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo))
  }

  const handleMarkedDoneTodo = (todo) => {
    dispatch(doneTodo(todo))
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
          return (
            <View style={styles.viewRowTodo}>
              <View style={styles.viewTitleTodo}>
                <TouchableOpacity onPress={handleMarkedDoneTodo}>
                  <View style={item.state ? styles.buttonMarkedDone : styles.buttonMarkedDone2} />
                </TouchableOpacity>
                <Text style={item.state ? styles.textTodo : styles.textTodoDone}>{item.todo}</Text>
              </View>

              <TouchableOpacity onPress={() => (item.state ? handleMarkedDoneTodo(item.todo) : handleDeleteTodo(item.todo))}>
                <Image
                  source={item.state ? Rectangle6 : deleteBtn}
                  style={styles.imageDelete}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )
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
  buttonMarkedDone2: {
    width: 18 / 375 * width,
    height: 18 / 375 * width,
    borderRadius: 9 / 375 * width,
    backgroundColor: Colors.blue3,
    borderWidth: 3 * StyleSheet.hairlineWidth,
    borderColor: Colors.blue3,
    marginRight: 14 / 375 * width,
  },
  textTodo: {
    ...Fonts.semiBold,
    fontSize: 18 / 375 * width,
    color: Colors.gray2,
  },
  textTodoDone: {
    ...Fonts.semiBold,
    fontSize: 18 / 375 * width,
    color: Colors.blue3,
    textDecorationLine: 'line-through',
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
