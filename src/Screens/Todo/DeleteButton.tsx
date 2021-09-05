import React from 'react';
import { ImageURISource } from 'react-native';
import styled from 'styled-components/native';

const DeleteButtonContainer = styled.TouchableOpacity``;

declare function require(name: string): ImageURISource;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const DeleteButton: React.FC = () => {
  return (
    <DeleteButtonContainer>
      <Icon source={require('@assets/remove.png')}></Icon>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;
