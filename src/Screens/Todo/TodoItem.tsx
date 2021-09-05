import React from 'react';
import styled from 'styled-components/native';
import DeleteButton from './DeleteButton';

interface TodoStuff {
  title: string;
  index: number;
}

const ItemContainer = styled.View`
  flex-direction: row;
  background-color: #eee;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;

const TitleLabel = styled.Text`
  flex: 1;
  color: black;
`;

const ToDoItem = ({title, index}: TodoStuff) => {
  return (
    <ItemContainer>
      <TitleLabel>{title}</TitleLabel>
      <DeleteButton></DeleteButton>
    </ItemContainer>
  );
};

export default ToDoItem;
