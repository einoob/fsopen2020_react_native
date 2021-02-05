import { useMutation } from '@apollo/react-hooks';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';

import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(AUTHORIZE_USER);

    const signIn = async ({ username, password }) => {
    const data = await mutate({ variables: { username, password } });
    if (data && data.authorize) {
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        console.log("in useSignIn hook", data.authorize.accessToken);
    }
        return data;
    };
    return [signIn, result];
};

export default useSignIn;
