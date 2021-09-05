import React from 'react';
import styled from 'styled-components/native';

const DeleteButtonContainer = styled.TouchableOpacity``;
const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const DeleteButton: React.FC = () => {
  return (
    <DeleteButtonContainer>
      <Icon source={require('@assets/Images/remove.png')}></Icon>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;
