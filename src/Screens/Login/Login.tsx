import AuthButton from '@Components/AuthButton';
import AuthLayout from '@Components/AuthLayout';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Input from './Input';

export type LoginNaviParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

const FormContainer = styled.View`
  width: 100%;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

const ErrorField = styled.Text`
  color: red;
  font-weight: 500;
  text-align: left;
  width: 90%;
  margin-bottom: 16px;
  margin-top: 5px;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;
interface Props {
  navigation: NavigationProp;
}

const Login: React.FC<Props> = (props: Props) => {
  console.log(props);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userEmail: '',
      password: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const onError = (_error: Record<string, unknown>): void => {
    console.log(_error);
    return;
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input placeholder="e-mail" />
        )}
        name="userEmail"
      />
      <ErrorField>{errors.userEmail && errors.userEmail.message}</ErrorField>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input placeholder="password" secureTextEntry={true} />
        )}
        name="password"
      />
      <ErrorField>{errors.password && errors.password.message}</ErrorField>

      <AuthButton
        label="로그인"
        active={true}
        style={{ marginBottom: 10 }}
        onPress={handleSubmit(onSubmit, onError)}
      />

      <AuthButton
        label="새로운 계정 만들기"
        onPress={() => {
          props.navigation.navigate('CreateAccount');
        }}
      />
    </AuthLayout>
  );
};

export default Login;
