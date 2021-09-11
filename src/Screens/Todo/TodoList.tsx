import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import EmptyItem from './EmptyItem';
import ToDoItem from './TodoItem';

const List = styled(FlatList)`
  flex: 1;
  width: 100%;  
  padding: 20px 16px;
`;
interface Props {
  todoList : {
    index: number,
    title: string,
  };
  onDelete?: ()=>void;
}

const TodoList : React.FC<Props> = () => { 
  const renderItem = ({ item }: { item: Props }) => (
    <ToDoItem index={item.todoList.index} title={item.todoList.title} onDelete={()=>item.onDelete}> </ToDoItem>
  );

  return (  
      <List
        data={todoList}
        ListEmptyComponent={<EmptyItem />}
        keyExtractor={(item) => item.index}
        renderItem={renderItem}
      ></List>
  );
};

export default TodoList;
