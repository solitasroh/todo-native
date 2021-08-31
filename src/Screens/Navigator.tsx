import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Login/Welcome';
import Login from './Login/Login';
import Signup from './Login/Signup';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
          //headerTransparent : true,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          //headerTintColor : '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerTransparent: true,
          headerTintColor: '#E70915',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={Signup}
        options={{
          title: 'Sign Up',
          headerTransparent: true,
          headerTintColor: '#515E63',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
