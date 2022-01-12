import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { MUTATE_REGISTER_USER, loginVars, userVarsFn } from '@jade/graphql-client';
import { useLoginUser } from './login';

type TLoginFormData = {
  email: string;
  password: string;
};

export const useRegisterUser = callbackFn => {
  const router = useRouter();
  const [registrationFormData, setRegistrationFormData] = useState<TLoginFormData>();

  const { login } = useLoginUser(callbackFn);
  const [registerUser, { data: registerData, error, loading }] = useMutation(MUTATE_REGISTER_USER, {
    errorPolicy: 'all',
  });

  const registerFn = data => {
    if (data) {
      registerUser({ variables: userVarsFn(data) });
      setRegistrationFormData(data);
    }
  };

  useEffect(() => {
    if (registerData && registrationFormData) {
      login({
        variables: loginVars({
          email: registrationFormData.email,
          password: registrationFormData.password,
        }),
      });
    }
  }, [registerData, registrationFormData]);

  return { registerFn, registerData, error, loading };
};
