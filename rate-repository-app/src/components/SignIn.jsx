import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
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

const SignIn = () => {
    const onSubmit = values => {
        console.log("values onSubmit", values);
        const username = values.username;
        const password = values.password;
        console.log("use", username);
        console.log("pas", password);
    };
    
    return (
            <Formik
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) =>
                <SignInForm onSubmit={handleSubmit} />}
            </Formik>
    );
};

export default SignIn;
