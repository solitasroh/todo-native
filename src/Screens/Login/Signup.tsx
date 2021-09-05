import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import AuthButton from '@Components/AuthButton';
import AuthInput from '@Components/AuthInput';
import AuthLayout from '@Components/AuthLayout';
import { EMAIL_PATTERN } from '@Utils/Regex';
import { ApolloError, useMutation } from '@apollo/client';
import { Auth, SIGNUP, SignupInput } from '@Apollo/auth.query';
import { Alert } from 'react-native';

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
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupInput>({});

  const onCompleted = (data: { signup: Auth }): void => {
    Alert.alert(
      'Success',
      '계정이 생성되었습니다. 로그인화면으로 이동합니다.',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ],
    );
  };
  const onMutationError = (error: ApolloError): void => {
    error.graphQLErrors.map((err) => {
      if (err.extensions?.response?.error === 'Conflict') {
        setError('email', { message: 'E-mail이 이미 존재합니다.' });
      }
    });
  };

  const [signup, { error, data, loading }] = useMutation<
    { signup: Auth },
    { data: SignupInput }
  >(SIGNUP, { onCompleted, onError: onMutationError });

  const onSubmit = async (data: SignupInput) => {
    if (loading) {
      return;
    }
    console.log(data);
    //TODO: error가 존재하면 아래 로직이 수행되면 안된다.
    await signup({
      variables: {
        data: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
  };
  const onError = (_error: Record<string, unknown>): void => {
    console.log(_error);
    return;
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <AuthInput
            placeholder="E-mail"
            keyboardType="email-address"
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
        render={({ field: { onChange, value } }) => (
          <AuthInput
            placeholder="Name"
            onChangeText={onChange}
            value={value}
            error={errors.name && errors.name.message}
          />
        )}
        name="name"
        rules={{
          required: { value: true, message: '이름이 입력되지 않았습니다' },
        }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <AuthInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
            error={errors.password && errors.password.message}
            lastOne={true}
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
        label="새로운 계정을 생성합니다"
        active={true}
        onPress={handleSubmit(onSubmit, onError)}
      />
    </AuthLayout>
  );
};

export default Signup;
