import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { Mainscreen } from './src/screens'
import store from './src/redux/store'

const Stack = createStackNavigator()
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            component={Mainscreen}
            name="MainScreen"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
