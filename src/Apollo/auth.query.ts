import { gql } from '@apollo/client';

/* 
  회원가입 쿼리
  signup input 의 데이터를 입력해 인자로 전달하면, 
  서버로 해당 데이터를 전송한다.
  access Token, refreshToken, user를 응답 요청한다.
*/
export const SIGNUP = gql`
  mutation signup($data: SignupInput!) {
    signup(data: $data) {
      accessToken
      refreshToken
    }
  }
`;
export const LOGIN = gql`
  mutation login($data: LoginInput!) {
    accessToken
    refreshToken
  }
`;

export interface SignupInput {
  email: string;
  password: string;
  name?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password?: string;
  name?: string;
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
  user?: User;
}
