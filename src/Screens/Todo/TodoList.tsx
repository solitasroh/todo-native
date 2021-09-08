import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import EmptyItem from './EmptyItem';
import ToDoItem from './TodoItem';
import AddButton from './AddButton';
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  background-color: #eee;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
  width: 100%;
`;
const List = styled(FlatList)`
  flex: 1;
  width: 100%;  
  padding: 20px 16px;
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

const TodoList = () => {
  // state = {
  //   addTodo: ""
  // };
 
  // handleTodo = text => { 
  //   this.setState({ addTodo: text });
  // };
  const [addTodo, SetAddTodo] = useState('');
  const [todoList, SetTodoList] = useState(dummytodoList);
  const removeTodoList = (index : number) : void => {
    let list = [...todoList];
    list.splice(index-1, 1); // 1개만 추출
    SetTodoList(list);
  };
  const addTodoList = (todo : string) : void => {
    const list = [...todoList,todo];
    console.log(todo);
    SetTodoList(list);
    console.log(list);
  };
  const renderItem = ({ item }: { item: iTodo }) => (
    <ToDoItem index={item.index} title={item.title} onDelete={()=>removeTodoList(item.index)}> </ToDoItem>
  );

  return (
    <Container>
      <ItemContainer>
        <TextInput
          style = {{
            width : 200,
            marginTop: 20,
            marginBottom: 10,
            paddingHorizontal: 10,
            height: 40,
            borderRadius: 10,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder="할일을 입력하세요"
          onChangeText={text => SetAddTodo(text)}
        />
        <AddButton onPress ={()=>addTodoList(addTodo)}></AddButton>
      </ItemContainer>      
      <List
        data={todoList}
        ListEmptyComponent={<EmptyItem />}
        keyExtractor={(item) => item.index}
        renderItem={renderItem}
      ></List>
    </Container>
  );
};

export default TodoList;
