import React from 'react';
import styled from 'styled-components/native';
import DeleteButton from './DeleteButton';

interface TodoStuff {
  title: string;
  index: number;
  onDelete?: (index: number) => void;
}

const ItemContainer = styled.View`
  flex-direction: row;
  background-color: #eee;
  border-radius: 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 16px 10px;
`;

const TitleLabel = styled.Text`
  flex: 1;
  width: 100%;
  color: black;
`;

const ToDoItem = ({ title, index, onDelete }: TodoStuff) => {
  return (
    <ItemContainer>
      <TitleLabel>{title}</TitleLabel>
      <DeleteButton index={index} onDelete={onDelete}></DeleteButton>
    </ItemContainer>
  );
};

export default ToDoItem;
