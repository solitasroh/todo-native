import React from 'react';
import { Platform, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
  flex: 0.5;
  justify-content: flex-end;
  background-color: white;
  border-color: gray;
  border-radius: 4px;
  border: 1px;
`;

interface Props {
  hideInput: () => void;
  onPress: (text: string) => void;
}
const TodoInput = ({ hideInput, onPress }: Props) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TextInput
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        onSubmitEditing={({ nativeEvent }) => {
          onPress(nativeEvent.text);
          hideInput();
        }}
      />
    </Container>
  );
};

export default TodoInput;
