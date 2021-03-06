import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
    .string().required('Username is required'),
    password: yup
    .string().required('Password is required')
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) =>
      <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
    const [signIn] = useSignIn();
    let history = useHistory();
  
    const onSubmit = async (values) => {
      const { username, password } = values;
  
      try {
        await signIn({ username, password });
       // console.log("in SignIn", data.authorize.accessToken);
        history.push("/");
      } catch (e) {
        console.log(e);
      }
    };
    
    return (
      <SignInContainer onSubmit={onSubmit}/>
    );
};

export default SignIn;
