import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
`;

const Temp: React.FC = () => {
  return (
    <Container>
      <Text> 임시 </Text>
    </Container>
  );
};

export default Temp;
