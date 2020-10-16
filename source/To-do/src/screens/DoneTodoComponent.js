import React from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, Image,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import { returnNewTodo } from '../redux/action'
import { Colors, Fonts } from '../../assets/styles'
import { Rectangle7 } from '../../assets/images'

const { width } = Dimensions.get('window')

const DoneTodoComponent = (props) => {
  const { jumpTo } = props
  const dispatch = useDispatch()
  const todos = useSelector((state) => state)

  const handleMarkedDoneTodo = () => { }

  const handleReturnNewTodo = (data) => {
    dispatch(returnNewTodo(data))
    jumpTo('new')
  }

  return (

    <View style={styles.viewWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos.currentTodo}
        extraData={todos}
        keyExtractor={(item, index) => `RenderAllTodoComponent-${index}`}
        renderItem={({ item }) => {
          if (item.state !== true) {
            return (
              <View style={styles.viewRowTodo}>
                <View style={styles.viewTitleTodo}>
                  <TouchableOpacity onPress={handleMarkedDoneTodo}>
                    <View style={styles.buttonMarkedDone} />
                  </TouchableOpacity>

                  <Text style={styles.textTodo}>{item.todo}</Text>
                </View>

                <TouchableOpacity onPress={() => handleReturnNewTodo(item.todo)}>
                  <Image
                    source={Rectangle7}
                    style={styles.imageDelete}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            )
          }
        }}
      />

    </View>
  )
}
export default DoneTodoComponent
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
    backgroundColor: Colors.blue3,
    borderWidth: 3 * StyleSheet.hairlineWidth,
    borderColor: Colors.blue3,
    marginRight: 14 / 375 * width,
  },
  textTodo: {
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
