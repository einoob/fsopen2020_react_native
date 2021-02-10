import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const result = await mutate({
            variables: { ownerName, repositoryName, rating, text }
        });
        console.log("useCreateReview", result);
        return result;
    }
    return [createReview, result];  
};

export default useCreateReview;