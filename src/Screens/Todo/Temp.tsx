import React, { useState } from 'react';
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
  const [todo, SetAddTodo] = useState('');
  const [todoList, SetTodoList] = useState(dummytodoList);
  const removeTodoList = (index : number) : void => {
    console.log(index);
    let list = [...todoList];
    list.splice(index-1, 1); // 1개만 추출
    SetTodoList(list);  
  };
  const addTodoList = (todo : string) : void => {
    const index = todoList.length + 1;
    const list = [...todoList,{index: index, title: todo}];
    console.log(todo);
    SetTodoList(list);
    console.log(list);
    
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
