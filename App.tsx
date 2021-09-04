import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import LoginNavigator from '@Screens/Navigator';
import AppLoading from 'expo-app-loading';
import { useAssets } from 'expo-asset';

const App: React.FC = () => {
  const [assets] = useAssets([require('./assets/logo.png')]);
  if (!assets) {
    return <AppLoading></AppLoading>;
  }
  return <NavigationContainer>{<LoginNavigator />}</NavigationContainer>;
};

export default App;
