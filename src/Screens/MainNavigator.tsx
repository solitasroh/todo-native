import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Login/Welcome';
import Temp from './Todo/Temp';
import Calendar from './Calendar/Calendar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Temp} />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
