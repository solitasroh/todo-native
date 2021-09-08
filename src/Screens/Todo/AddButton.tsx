import React from 'react';
import { ImageURISource } from 'react-native';
import Styled from 'styled-components/native';

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
      <ButtonContainer onPress={onPress}>
        <Icon source={require('@assets/add.png')} />
      </ButtonContainer>
  );
};

export default AddButton;
