import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import Input from './Input';
import AuthButton from '@Components/AuthButton';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdf6f0;
  align-items: center;
  justify-content: center;
`;

const ErrorField = styled.Text`
  color: red;
  font-weight: 500;
  text-align: left;
  width: 90%;
  margin-bottom: 16px;
  margin-top: 5px;
`;

export type LoginNaviParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;
interface Props {
  navigation: NavigationProp;
}
const Signup: React.FC<Props> = ({ navigation }: Props) => {
  console.log(navigation);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
      userPW: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    // if (loading) {
    //   return;
    // }
    console.log(data);
    // TODO: error가 존재하면 아래 로직이 수행되면 안된다.
    // await signup({
    //   variables: {
    //     data: {
    //       email: data.userEmail,
    //       password: data.userPW,
    //       name: data.userName,
    //     },
    //   },
    // });
  };
  const onError = (_error: Record<string, unknown>): void => {
    console.log(_error);
    return;
  };

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userEmail"
        rules={{
          required: {
            value: true,
            message: 'e-mail이 입력되지 않았습니다',
          },
          // pattern: {
          //   value: EMAIL_PATTERN,
          //   message: 'email 형식이 아닙니다',
          // },
        }}
      />
      <ErrorField>{errors.userEmail && errors.userEmail.message}</ErrorField>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input placeholder="Name" onChangeText={onChange} value={value} />
        )}
        name="userName"
        rules={{
          required: { value: true, message: '이름이 입력되지 않았습니다' },
        }}
      />
      <ErrorField>{errors.userName && errors.userName.message}</ErrorField>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="userPW"
        rules={{
          required: { value: true, message: '비밀번호가 입력되지 않았습니다' },
          minLength: { value: 8, message: '8자 이상 입력해야합니다.' },
        }}
      />
      <ErrorField>{errors.userPW && errors.userPW.message}</ErrorField>
      <AuthButton
        style={{ marginBottom: 24, width: '90%' }}
        label="Sign up"
        onPress={handleSubmit(onSubmit, onError)}
      />
    </Container>
  );
};

export default Signup;
