import React from "react";
import { Platform, TextInput } from "react-native";
import styled from 'styled-components/native';


const Container = styled.KeyboardAvoidingView`
    position : absolute;
    bottom:0;
    top : 0;
    left : 0;
    right:0;
    justify-content:flex-end;
`;

interface Props {
    hideInput : () => void;
    onPress : (text : string) => void;
}
const TodoInput = ({hideInput, onPress} : Props) => {
    return(
        <Container behavior = { Platform.OS === 'ios' ? 'padding' : undefined}>
            <TextInput 
            autoFocus = {true}
            autoCapitalize = "none"
            autoCorrect = {false}
            returnKeyType = "done"
            onSubmitEditing = {({nativeEvent}) => {
                onPress(nativeEvent.text);
                hideInput();
            }}/>
        </Container>
    );
};

export default TodoInput;