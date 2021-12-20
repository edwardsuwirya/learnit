import GLOBALS from '../../global';
import {useState} from 'react';

export const LoginBloc = (repo) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setShowLoading] = useState(false);
    const {userAuthentication} = repo();

    const onAuthenticate = async (userName, password, navigation) => {
        handleShowLoadingChange(true);
        const result = await userAuthentication(userName, password);
        handleShowLoadingChange(false);
        if (result) {
            navigation.replace(GLOBALS.SCREEN.MATERIAL);
        } else {

        }
    }

    const handleShowLoadingChange = (isLoadingValue) => {
        setShowLoading(isLoadingValue);
    };

    const handleUserNameChange = (userNameValue) => {
        setUserName(userNameValue);
    };

    const handlePasswordChange = (userPasswordValue) => {
        setPassword(userPasswordValue);
    };

    return {
        userName,
        password,
        handleUserNameChange,
        handlePasswordChange,
        onAuthenticate,
        isLoading
    };
};
