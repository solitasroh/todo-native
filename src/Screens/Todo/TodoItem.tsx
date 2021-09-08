import React from 'react';
import styled from 'styled-components/native';
import DeleteButton from './DeleteButton';

interface TodoStuff {
  title: string;
  index: number;
  onDelete : ()=>void;
}

const ItemContainer = styled.View`
  flex-direction: row;
  background-color: #eee;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
  width: 100%;
`;

const TitleLabel = styled.Text`
  flex: 1;
  width: 100%;
  color: black;
`;

const ToDoItem = ({ title, index , onDelete }: TodoStuff) => {
  console.log(title);
  return (
    <ItemContainer>
      <TitleLabel>{title}</TitleLabel>
      <DeleteButton onDelete = {onDelete} ></DeleteButton>
    </ItemContainer>
  );
};

export default ToDoItem;
