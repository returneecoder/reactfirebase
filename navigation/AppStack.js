/* eslint-disable */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
const AppStack = () => {
     return (
   <Stack.Navigator>
    <Stack.Screen name ="Home" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})