import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 90%;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #ffffff;
`;

const InputField = styled.TextInput`
  flex: 1;
  color: #38738a;
`;

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: undefined;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
  value: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  value,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        value={value}
        selectionColor="#38738a"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#38738a"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
