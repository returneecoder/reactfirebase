/* eslint-disable */
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth';

const Routes = () => {
  console.log("routes")
  const {user,setUser} = useContext(AuthContext)
  console.log(user)
  const [initializing, setInitializing] = useState(true);
 
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  
  if (initializing) return null;

  return (
    <NavigationContainer>
    {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Routes;
