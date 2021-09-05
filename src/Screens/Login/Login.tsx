import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { EMAIL_PATTERN } from '@Utils/Regex';

import AuthButton from '@Components/AuthButton';
import AuthInput from '@Components/AuthInput';
import AuthLayout from '@Components/AuthLayout';

export type LoginNaviParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Welcome'>;
interface Props {
  navigation: NavigationProp;
}

const Login: React.FC<Props> = (props: Props) => {
  console.log(props);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userEmail: '',
      password: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    //console.log(data);

    setError('password', { message: 'password is invalid' });
    return;
  };

  const onError = (_error: Record<string, unknown>): void => {
    //console.log(_error);
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
            error={errors.userEmail && errors.userEmail.message}
          />
        )}
        name="userEmail"
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
