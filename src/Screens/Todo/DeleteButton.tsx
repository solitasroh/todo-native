import React,{useState , useEffect} from 'react';
import { ImageURISource } from 'react-native';
import styled from 'styled-components/native';

const DeleteButtonContainer = styled.TouchableOpacity``;

declare function require(name: string): ImageURISource;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

interface Props{
  index :number;
  onDelete?: (index : number) => void;
}
const DeleteButton: React.FC<Props> = ({index, onDelete} : Props) => {
  const [idx, setIndex] = useState(0);
  useEffect(() => {
    setIndex(index);
  }, [])
  const pressed = () => {
    if (onDelete != null)
      onDelete(idx);
  }
  return (
    <DeleteButtonContainer onPress={pressed}>
      <Icon source={require('@assets/remove.png')}></Icon>
    </DeleteButtonContainer>
  );
};

export default DeleteButton;
