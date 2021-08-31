import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LoginNavigator from './src/Screens/Navigator';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Top = styled(SafeAreaView)`
  flex: 1;
`;

const App: React.FC = () => {
  return <NavigationContainer>{<LoginNavigator />}</NavigationContainer>;
};

export default App;
