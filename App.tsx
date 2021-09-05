import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import LoginNavigator from '@Screens/Navigator';
import AppLoading from 'expo-app-loading';
import { useAssets } from 'expo-asset';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, isLoginVar } from '@Apollo/apollo';
import MainNavigator from '@Screens/MainNavigator';
import { APOLLO_SERVER_IP } from '@env';
/*
  Apollo/apollo.ts 코드 

  export const isLoginVar = makeVar(false);
  
  위 코드에서 makeVar를 true 로 변경하면 fake 로그인으로 처리해서
  isLoggedIn 이 True로 변경됨
  그러면서 MainNavigator를 호출하게 됨
  MainNavigator에 Todo 관련 화면 및 코드 작성가능!!!
*/

const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoginVar);
  const [assets] = useAssets([require('./assets/logo.png')]);
  if (!assets) {
    return <AppLoading></AppLoading>;
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <MainNavigator /> : <LoginNavigator />}
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
