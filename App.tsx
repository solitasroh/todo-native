import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import LoginNavigator from '@Screens/Navigator';
import AppLoading from 'expo-app-loading';
import { useAssets } from 'expo-asset';
import { ApolloProvider } from '@apollo/client';
import { client } from '@Apollo/apollo';
const App: React.FC = () => {
  const [assets] = useAssets([require('./assets/logo.png')]);
  if (!assets) {
    return <AppLoading></AppLoading>;
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>{<LoginNavigator />}</NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
