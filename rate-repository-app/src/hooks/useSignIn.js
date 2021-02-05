import { useMutation } from '@apollo/react-hooks';

import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE_USER);

    const signIn = async ({ username, password }) => {
        try {
        mutate({ variables: { username, password } });
        } catch (error) {
            console.log(error);
        }
    };
    console.log("token:", JSON.stringify(result.data));
    return [signIn, result];
};

export default useSignIn;