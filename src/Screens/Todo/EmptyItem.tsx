import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const EmptyItem = ({}) => {
  return (
    <Container>
      <Text>하단에 + 버튼을 눌러 할일 등록하세요.</Text>
    </Container>
  );
};

export default EmptyItem;
