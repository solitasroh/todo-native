import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{
  active: boolean;
}>`
  flex-direction: row;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 12px;
  background-color: ${(props) => (props.active ? '#2ab79f' : '#FFFFFF')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const ButtonLabel = styled.Text<{ active: boolean }>`
  color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;

const ButtonIcon = styled(Ionicons)`
  margin-right: 5%;
`;

interface ButtonProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  active?: boolean;
  icon?: string;
  onPress?: () => void;
}

const AuthButton: React.FC<ButtonProps> = ({
  label,
  style,
  disabled,
  active,
  onPress,
  icon,
}: ButtonProps) => {
  return (
    <Container
      style={style}
      onPress={onPress}
      disabled={disabled}
      active={active ?? false}
    >
      {/* ionicons 참고:  https://icons.expo.fyi/*/}

      {icon != null ? (
        <ButtonIcon name={icon} color="white" size={22}></ButtonIcon>
      ) : (
        <></>
      )}
      <ButtonLabel active={active ?? false}>{label}</ButtonLabel>
    </Container>
  );
};

export default AuthButton;
