import React from 'react';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import useCreateReview from '../hooks/useCreateReview';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
}

const validationSchema = yup.object().shape({
    ownerName: yup
    .string().required('GitHub username is required'),
    repositoryName: yup
    .string().required('Repository\'s name is required'),
    rating: yup
    .number().required('rating is required')
    .max(100, 'Rating must be between 0 and 100')
    .min(0, 'Rating must be between 0 and 100'),
    text: yup
    .string()
});

export const ReviewContainer = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema} >
            {({ handleSubmit }) => 
            <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    )
};

const CreateReview = () => {

    const [createReview, result] = useCreateReview();
    let history = useHistory();
    console.log(result);

    const onSubmit = (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        
        createReview({ ownerName, repositoryName, rating: Number(rating), text});
    };

    if (result.data) {
        console.log("we send this", result.data.createReview.repositoryId);
        history.push(result.data.createReview.repositoryId);
    } 
    return (
        <ReviewContainer onSubmit={onSubmit}/>
    );
}

export default CreateReview;