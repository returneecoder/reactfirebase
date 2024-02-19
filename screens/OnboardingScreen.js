/* eslint-disable */
import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  console.log("onboarding")
  return (
    <View style={styles.container}>
      <Text>OnboardingnScreen</Text>
      <Onboarding 
      
      onSkip={() => navigation.replace("Login")}
      onDone ={()=> navigation.navigate("Login")}
      
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
   
  ]}
/>
     
      </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems:'center',
        justifyContent:'center'
    }
})