import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import SignUpForm from './SignUpForm';
import { useHistory } from 'react-router-native';

const initialValues = {
    username: '',
    password: '',
    passwordValidation: '',
};

const validationSchema = yup.object().shape({
    username: yup
    .string().required('Username is required')
    .min(1, 'Usename must be between 1 and 30 characters')
    .max(30, 'Usename must be between 1 and 30 characters'),
    password: yup
    .string().required('Password is required')
    .min(5, 'Password must be between 5 and 50 characters')
    .max(50, 'Password must be between 5 and 50 characters'),
    passwordValidation: yup
    .string().oneOf([yup.ref('password'), null], "Password and confirmation don't match.")
    .required('Confirm your password')
});

export const SignUpContainer = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => 
            <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
}

const SignUp = () => {

    const [signUp, result] = useSignUp();
    const [signIn] = useSignIn();
    let history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try { 
            await signUp({ username, password });
            await signIn({ username, password });
        } catch (error) {
            console.log(error);
        }
    };
    if (result.data) {
        history.push('/');
    }
    return (
        <SignUpContainer onSubmit={onSubmit}/>
    );
}

export default SignUp;
