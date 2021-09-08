import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import TodoList from './TodoList';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HeaderContainer = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;
const Temp: React.FC = () => {
  return (
    <Container>
      <Container>
        <HeaderContainer/>
        <TodoList></TodoList>
      </Container>
    </Container>
  );
};

export default Temp;
