import * as React from 'react';
import { KeyboardTypeOptions, View } from 'react-native';
import styled from 'styled-components/native';

export interface TextInputProps {
  value?: string | undefined;
  placeholder?: string;
  secureTextEntry?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  error?: string | undefined;
  lastOne?: boolean | undefined;
}

export const Input = styled.TextInput<TextInputProps>`
  background-color: rgba(228, 228, 228, 0.9);
  padding: 15px 7px;
  border-radius: 4px;
  color: #000;
`;

const ErrorField = styled.Text`
  color: red;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  width: 90%;
  margin-bottom: 1px;
  margin-top: 1px;
`;

const AuthInput: React.FC<TextInputProps> = (props) => {
  return (
    <View style={{ marginBottom: props.lastOne ? 14 : 5 }}>
      <Input
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
      {props.error != undefined ? (
        <ErrorField>{props.error}</ErrorField>
      ) : (
        <></>
      )}
    </View>
  );
};

export default AuthInput;
