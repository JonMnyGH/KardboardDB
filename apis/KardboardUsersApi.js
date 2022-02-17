import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const userStatusGET = Constants =>
  fetch(
    `https://mi964x6uu7.execute-api.us-east-1.amazonaws.com/default/KardboardUserStatus`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useUserStatusGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['KardboardUsers', args], () =>
    userStatusGET(Constants, args)
  );
};

export const FetchUserStatusGET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useUserStatusGET();

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};
