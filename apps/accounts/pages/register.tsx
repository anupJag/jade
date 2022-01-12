import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Head } from '@jade/ui/molecules';
import { Layout } from '@jade/ui/templates';
import { LabelContext } from '../stores/labelContext';
import RegisterPage from '../components/templates/RegisterPage.template';
// import { initializeApollo } from '../src/graphQL/graphqlClient';

// import { REGISTRATION_PAGE_QUERY, registrationPageVars } from '../src/graphQL/Queries';

type RegisterProps = {
  pageInfo: any;
};

const defaultLabels = {
  registerHeading: 'Register',
  registerFirstNameField: 'First Name',
  registerLastNameField: 'Last Name',
  registerEmailField: 'Email',
  registerPhoneField: 'Phone',
  registerPasswordField: 'Password',
  registerConfirmPasswordField: 'Confirm Password',
  registerSubmit: 'Submit',
  registerErrorEmailExists: 'Email is already exists.',
  registerFirstNameRequiredValidation: 'Enter First Name',
  registerFirstNameFormatValidation: 'Firstname should be alphabates, space, apostrophe only',
  registerLastNameRequiredValidation: 'Enter Enter Last Name',
  registerLastNameFormatValidation: 'Firstname should be alphabates, space, apostrophe only',
  registerEmailRequiredValidation: 'Enter Email',
  registerEmailFormatValidation: 'Entered value does not match email format',
  registerPhoneRequiredValidation: 'Enter Phone Number',
  registerPhoneFormatValidation: 'Entered value does not match phone number format.',
  registerPasswordRequiredValidation: 'Enter Password',
  registerConfirmPasswordMatchValidation: 'Passwords do not match',
  registerGraphQLGenericError: 'Something went wrong please try again later.',
  registerPasswordFormatValidation: 'Enter valid Password',
  registerPasswordFormatInfo:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  registerSignInLink: 'Signin',
};

const RegisterComponent: FC<RegisterProps> = ({ pageInfo }: any) => {
  const {
    pageMetadata: { pageTitle: title, pageDescription: description, pageKeywords: keywords },
    accountAppLabelsCollection: { items: labelCollection = defaultLabels },
  } = pageInfo || {};

  return (
    <Layout>
      <LabelContext.Provider value={labelCollection}>
        <Head title={title} description={description} keywords={keywords}>
          <script
            src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
            async
            defer></script>
        </Head>
        <RegisterPage />
      </LabelContext.Provider>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const pageInfo = {
    pageMetadata: {
      pageTitle: 'Register',
      pageDescription: 'User Registration',
      pageKeywords: 'register',
    },
    accountAppLabelsCollection: defaultLabels,
  };

  return {
    props: {
      pageInfo,
      // initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default RegisterComponent;
