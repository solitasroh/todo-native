import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Login/Welcome';
import Temp from './Todo/Temp';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Temp"
        component={Temp}
        options={{
          title: 'Temp',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
