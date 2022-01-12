import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import SiginPage from '../components/templates/SigninPage.template';
import { Layout } from '@jade/ui/templates';
import { Head } from '@jade/ui/molecules';
import { LabelContext } from '../stores/labelContext';

type SigninProps = {};

const defaultLabels = {
  signinHeading: 'Sign in to your account',
  signinEmail: 'Email',
  signinServerError: 'Email/Password is incorrect.',
  signinEmailReqError: 'Enter email',
  signinEmailFormatError: 'Entered value does not match email format',
  signinPassword: 'Password',
  signinPasswordReqError: 'Enter Password',
  signinPasswordStrengthError:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  signinForgotPassword: 'Forgot Password',
  signinCTAText: 'Sign in',
  signinFacebook: 'Facebook',
  signinGoogle: 'Google',
  registerHeading: 'Register',
  newMember: 'New to Jade',
  connectSocialMedia: 'Or Connect with Social Media',
};

/**
 * Component : Signin
 *
 * Root component of Application. which is responsible for Sign in page
 *
 * @param {*} { pageInfo }
 * @returns
 */
const Signin: FC<SigninProps> = ({ pageInfo }: any) => {
  const {
    pageMetadata: { pageTitle: title, pageDescription: description, pageKeywords: keywords },
  } = pageInfo || {};
  const { accountAppLabelsCollection: labelCollection } = pageInfo || {};
  return (
    <Layout>
      <LabelContext.Provider value={labelCollection}>
        <Head title={title} description={description} keywords={keywords} />
        <SiginPage />
      </LabelContext.Provider>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  //const apolloClient = initializeApollo();

  /**
   * Query : SIGNIN PAGE DETAILS
   *
   * querying page information like { template, metadata}
   *
   */
  //TODO: Remove hardcoded mock data, platform team will provide endpoint to get page data
  const { data: pageInfo } = {
    data: {
      pageMetadata: {
        pageTitle: 'signin',
        pageDescription: 'singin page to log into the application',
        pageKeywords: 'signin, social-signin',
      },
      accountAppLabelsCollection: defaultLabels,
    },
  };

  return {
    props: {
      pageInfo,
      //initialApolloState: apolloClient.cache.extract(),
    },
  };
};
export default Signin;
