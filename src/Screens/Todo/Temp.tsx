import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import AddButton from './AddButton';
import TodoList from './ToDoList';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
`;

const Temp: React.FC = () => {
  return (
    <Container>
      <Container>
        <TodoList></TodoList>
      </Container>
      <AddButton />
    </Container>
  );
};

export default Temp;
