import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Login/Welcome';
import Login from './Login/Login';
import Signup from './Login/Signup';

const Stack = createStackNavigator();

const LoginNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerShown: false,
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
