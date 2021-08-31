import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

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
const Login = ({ navigation }: Props) => {
  return (
    <Container>
      <Text>Login</Text>
    </Container>
  );
};

export default Login;
