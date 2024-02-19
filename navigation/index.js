/* eslint-disable */
import React from 'react';
import Routes from './Routes';
import { AuthProvider } from './AuthProvider';

const Providers = () => {
  console.log("providers")
  return (
   <AuthProvider>
     <Routes />
   </AuthProvider>
   
    
  )
};

export default Providers;
