import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import TodoList from './TodoList';
import AddButton from './AddButton';

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

interface iTodo {
  index: number;
  title: string;
}

const dummytodoList: iTodo[] = [
  {
    index: 1,
    title: 'todo1',
  },
  {
    index: 2,
    title: 'todo2',
  },
];

const Temp: React.FC = () => {  
  const [todoList, SetTodoList] = useState(dummytodoList);
  const [totalIndex, SetTotalIndex] = useState(0)

  useEffect(() => {
    const length = todoList.length;
    SetTotalIndex(length);
  }, [])

  const removeTodoList = (index : number) : void => {   
    console.log('re index',index);
    let list = [...todoList];
    list = list.filter((item) => item.index != index)
    
    SetTodoList(list);  
  };

  const addTodoList = (todo : string) : void => {
    const index = totalIndex+1;

    console.log('add index',index);
    const list = [...todoList,{index: index, title: todo}];
    SetTotalIndex(index);
    SetTodoList(list);
    
  };
  return (
    <Container>
      <Container>
        <HeaderContainer/>
        <TodoList todoList = {todoList} onDelete ={removeTodoList}></TodoList>    
        <AddButton onPress={addTodoList}></AddButton>
      </Container>
    </Container>
  );
};

export default Temp;
