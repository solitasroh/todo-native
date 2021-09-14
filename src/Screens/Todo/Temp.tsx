import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import TodoList from './TodoList';
import AddButton from './AddButton';
import TodoDatas from '@Utils/DummyData';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;
const HeaderContainer = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const Temp: React.FC = () => {
  const [todoList, SetTodoList] = useState(TodoDatas);
  const [totalIndex, SetTotalIndex] = useState(0);

  useEffect(() => {
    const length = todoList.length;
    SetTotalIndex(length);
  }, []);

  const removeTodoList = (index: number): void => {
    console.log('re index', index);
    let list = [...todoList];
    list = list.filter((item) => item.index != index);

    SetTodoList(list);
  };

  const addTodoList = (todo: string): void => {
    const index = totalIndex + 1;

    console.log('add index', index);
    const list = [...todoList, { index: index, title: todo }];
    SetTotalIndex(index);
    SetTodoList(list);
  };
  return (
    <Container>
      <HeaderContainer />
      <TodoList todoList={todoList} onDelete={removeTodoList}></TodoList>
      <AddButton onPress={addTodoList}></AddButton>
    </Container>
  );
};

export default Temp;
