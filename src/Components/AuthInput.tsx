import * as React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import styled from 'styled-components/native';

export interface TextInputProps {
  value?: string | undefined;
  placeHolder?: string;
  lastOne?: boolean;
  secureTextEntry?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

export const Input = styled.TextInput<TextInputProps>`
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px 7px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${(props) => (props.lastOne ? '15' : 8)}px;
`;

const AuthInput: React.FC<TextInputProps> = (props) => {
  return (
    <Input
      value={props.value}
      keyboardType={props.keyboardType ? props.keyboardType : 'default'}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
    />
  );
};

export default AuthInput;
