import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginNavigator from './src/Screens/Navigator';

const App: React.FC = () => {
  return <NavigationContainer>{<LoginNavigator />}</NavigationContainer>;
};

export default App;
