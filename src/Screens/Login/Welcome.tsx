import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import Button from './Button';

export type LoginNaviParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;

interface Props {
  navigation: NavigationProp;
}
const Welcome = ({ navigation }: Props) => {
  return (
    <Container>
      <Button
        style={{ marginBottom: 24 }}
        label="로그인"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Button
        style={{ marginBottom: 24 }}
        label="회원가입"
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      />
    </Container>
  );
};

export default Welcome;
