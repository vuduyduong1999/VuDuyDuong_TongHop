// export default MainScreen
import React, { } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { MainScreen, SplashScreen } from './src/screens'
import store from './src/redux/store/store'

const Stack = createStackNavigator()
const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

{ /* <Stack.Screen name="SetingScreen" component={settingScreen} /> */ }
