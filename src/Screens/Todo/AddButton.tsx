import React from 'react';
import { ImageURISource } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    position : absolute;
    bottom:0;
    align-self:center;
    justify-content:flex-end;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

const Icon = Styled.Image``;
declare function require(name: string): ImageURISource;
interface Props {
  onPress?: () => void;
}

const AddButton: React.FC<Props> = ({ onPress }: Props) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon source={require('@assets/add.png')} />
      </ButtonContainer>
    </Container>
  );
};

export default AddButton;
