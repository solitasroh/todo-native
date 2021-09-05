import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Controller, useForm } from 'react-hook-form';

import { useMutation } from '@apollo/client';
import { userLogin } from '@Apollo/apollo';

import AuthButton from '@Components/AuthButton';
import AuthInput from '@Components/AuthInput';
import AuthLayout from '@Components/AuthLayout';
import { Auth, LOGIN, LoginInput } from '@Apollo/auth.query';

import { EMAIL_PATTERN } from '@Utils/Regex';

export type LoginNaviParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}

const Login: React.FC<Props> = (props: Props) => {
  const [login] = useMutation<{ login: Auth }, { data: LoginInput }>(LOGIN, {
    onCompleted: ({ login }) => {
      console.log(`data: ${login.accessToken}`);
      userLogin(login.accessToken);
    },
    onError: (error) => {
      console.log(error);
      error.graphQLErrors.map((err) => {
        console.log(err.message);
        if (err.message === 'Invalid password') {
          setError('password', { message: 'password가 일치하지 않습니다.' });
        }

        if (err.message === 'email could not found') {
          setError('email', { message: '이메일을 찾을 수 없습니다.' });
        }
      });
    },
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginInput) => {
    await login({
      variables: {
        data: {
          email: data.email,
          password: data.password,
        },
      },
    });
    return;
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
          <AuthInput
            placeholder="e-mail"
            onChangeText={onChange}
            value={value}
            error={errors.email && errors.email.message}
          />
        )}
        name="email"
        rules={{
          required: {
            value: true,
            message: 'e-mail이 입력되지 않았습니다',
          },
          pattern: {
            value: EMAIL_PATTERN,
            message: 'email 형식이 아닙니다',
          },
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
            error={errors.password && errors.password.message}
          />
        )}
        name="password"
        rules={{
          required: {
            value: true,
            message: '비밀번호가 입력되지 않았습니다',
          },
          minLength: { value: 8, message: '8자 이상 입력해야합니다.' },
        }}
      />

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
