import AuthButton from '@Components/AuthButton';
import React, { useState } from 'react';
import { Button, ImageURISource, TextInput } from 'react-native';
import Styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Container = Styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

declare function require(name: string): ImageURISource;
interface Props {
  onPress: (text: string) => void;
}

const AddButton: React.FC<Props> = ({ onPress }: Props) => {
  const [addTodo, SetAddTodo] = useState<boolean>(false);

  const onPressed = () => {
    console.log('pressed');
    SetAddTodo(true);
  };

  return (
    <Container>
      {SetAddTodo && (
        <TodoInput hideInput={() => SetAddTodo(false)} onPress={onPress} />
      )}
      <Button title="새로운 할일 추가하기" onPress={onPressed}></Button>
    </Container>
  );
};

export default AddButton;
