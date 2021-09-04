import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import AuthButton from '@Components/AuthButton';
import AuthLayout from '@Components/AuthLayout';

export type LoginNaviParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;

interface Props {
  navigation: NavigationProp;
}

const LoginLink = styled.Text`
  color: #0000001f;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
  text-decoration: underline #0000001f;
`;

const Welcome: React.FC<Props> = ({ navigation }: Props) => {
  const goToSignup = () => navigation.navigate('CreateAccount');
  const goToLogin = () => navigation.navigate('Login');
  return (
    <AuthLayout>
      <AuthButton
        style={{ marginBottom: 10 }}
        label="새로운 계정으로 시작하기"
        active={true}
        disabled={false}
        onPress={goToSignup}
        icon="checkmark"
      />

      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>이미 계정이 있으신가요?</LoginLink>
      </TouchableOpacity>

      {/* <AuthButton
        style={{ marginBottom: 0 }}
        label="회원가입"
        active={false}
        onPress={goToLogin}
      /> */}
    </AuthLayout>
  );
};

export default Welcome;
