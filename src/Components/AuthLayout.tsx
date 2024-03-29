import React from 'react';
import {
  Alert,
  ImageURISource,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 0px 20px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

interface Props {
  children?: JSX.Element | JSX.Element[];
}

declare function require(name: string): ImageURISource;

const AuthLayout: React.FC<Props> = ({ children }: Props) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const logoImage = require('@assets/logo.png');

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyboard}
      disabled={Platform.OS === 'web'}
      style={{ flex: 1 }}
    >
      <Container>
        <KeyboardAvoidingView
          style={{
            width: '100%',
          }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        >
          <Logo source={logoImage} resizeMode="stretch"></Logo>
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AuthLayout;
