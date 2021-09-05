import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import EmptyItem from './EmptyItem';
import ToDoItem from './TodoItem';

const List = styled(FlatList)`
  flex: 1;
  width: 100%;
`;

interface iTodo {
  index: number;
  title: string;
}

const todoList: iTodo[] = [
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
  const renderItem = ({ item }: { item: iTodo }) => (
    <ToDoItem index={item.index} title={item.title}></ToDoItem>
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
