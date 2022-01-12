import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { MUTATE_LOGIN } from '@jade/graphql-client';
import { setCookie } from '@jade/utils';

export const useLoginUser = callbackFn => {
  const router = useRouter();

  const [login, { data: loginData, error: loginErr, loading }] = useMutation(MUTATE_LOGIN, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (loginData) {
      setCookie('userId', loginData.login.id);
      setCookie('provider', 'local');
      setCookie('access', JSON.stringify(loginData.login.access));
      setCookie('refresh', JSON.stringify(loginData.login.refresh));
      router.push('/');
      callbackFn();
    }
  }, [loginData, loginErr]);

  return { login, loginData, loginErr, loading };
};
