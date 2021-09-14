import AuthButton from '@Components/AuthButton';
import React, { useState } from 'react';
import { ImageURISource, TextInput } from 'react-native';
import Styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Container = Styled.View`
    flex-direction: column;
    position : absolute;
    bottom:0;
    align-self:center;
    justify-content:flex-end;
    
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

declare function require(name: string): ImageURISource;
interface Props {
  onPress:(text : string) => void;
}

const AddButton: React.FC<Props> = ({onPress }: Props) => {  
  const [addTodo, SetAddTodo] = useState<boolean>(false);
  const onPressed = () => {
    console.log('pressed');
    SetAddTodo(true)
  }
  return (
    <Container>  
        <AuthButton label="새로운 할일 추가하기" onPress={onPressed}/>  
        {SetAddTodo && <TodoInput hideInput={() => SetAddTodo(false)} onPress = {onPress}/>}
    </Container>
  );
};

export default AddButton;
