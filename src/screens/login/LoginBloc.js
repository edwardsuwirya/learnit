import GLOBALS from '../../global';
import { useState } from 'react';
import { API_URL } from '@env';

export const LoginBloc = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setShowLoading] = useState(false);

    const onAuthenticate = async (userName, password, navigation) => {
        try {
            handleShowLoadingChange(true);
            const response = await fetch(
                `${API_URL}/login`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userName: userName,
                        password: password,
                    })
                }
            );
            const json = await response.json();
            handleShowLoadingChange(false);
            navigation.replace(GLOBALS.SCREEN.MATERIAL);
        } catch (error) {
            handleShowLoadingChange(false);
            console.error(error);
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
