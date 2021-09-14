import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import EmptyItem from './EmptyItem';
import ToDoItem from './TodoItem';

const List = styled(FlatList)`
  width: 100%;
`;
interface iTodo {
  index: number;
  title: string;
}
interface Props {
  todoList: iTodo[];
  onDelete?: (index: number) => void;
}

const TodoList: React.FC<Props> = ({ todoList, onDelete }: Props) => {
  const renderItem = ({ item }: { item: iTodo }) => (
    <ToDoItem index={item.index} title={item.title} onDelete={onDelete}>
      {' '}
    </ToDoItem>
  );

  return (
    <List
      data={todoList}
      ListEmptyComponent={<EmptyItem />}
      keyExtractor={(item) => item.index.toString()}
      renderItem={renderItem}
    ></List>
  );
};
export default TodoList;
