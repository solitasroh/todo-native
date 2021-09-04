import {
  ApolloClient,
  createHttpLink,
  makeVar,
  InMemoryCache,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APOLLO_SERVER_IP } from '@env';

const httpLink = createHttpLink({
  uri: APOLLO_SERVER_IP,
});

export const isLoginVar = makeVar(false);

export const accessTokenVar = makeVar('');

const userLogin = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
  accessTokenVar(accessToken);
};

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  headers: {
    authrization: accessTokenVar(),
  },
});
