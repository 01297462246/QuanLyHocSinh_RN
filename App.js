import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from './Component/HomeNavigation'
import LoginScreen from './Component/LoginScreen'
const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      <HomeNavigation/>
    )
  }
}

export default App
