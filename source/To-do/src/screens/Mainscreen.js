import React, { useRef, useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, Image, Animated, Easing,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { addNewTodo, deleteTodo } from '../redux/action'
import { Colors, Fonts } from '../../assets/styles'
import { AllTodoComponent, DoneTodoComponent, NewTodoComponent } from '.'

const { width } = Dimensions.get('window')
const initialLayout = { width }

const ArchiveTodoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>ArchiveTodoScreen</Text>
    </View>
  )
}

const Mainscreen = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const todos = useSelector((state) => state)

  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const renderScene = SceneMap({
    all: AllTodoComponent,
    done: DoneTodoComponent,
    new: NewTodoComponent,
  })

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.textTitleApp}>Todo</Text>

      <TabView
        navigationState={{
          index: currentTabIndex,
          routes: [
            { key: 'new', title: 'New' },
            { key: 'done', title: 'Done' },

            { key: 'all', title: 'All' },
          ],
        }}
        renderScene={renderScene}
        onIndexChange={setCurrentTabIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.blue2 }}
            style={{ backgroundColor: Colors.white }}
            renderLabel={({ route, focused, color }) => (
              <Text style={{
                color: focused ? Colors.blue2 : Colors.gray2, ...Fonts.semiBold, fontSize: 18, textTransform: 'uppercase',
              }}
              >
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </View>)
}
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
export default Mainscreen
