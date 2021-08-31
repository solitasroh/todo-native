import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LoginNavigator from './src/Screens/Navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
