/* eslint-disable */
import {StyleSheet, Text, View,use} from 'react-native';
import React from 'react';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { useContext } from 'react';
const HomeScreen = () => {
  const {user,logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.email}</Text>
      <FormButton buttonTitle='Logout' onPress={()=>logout()}/>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
