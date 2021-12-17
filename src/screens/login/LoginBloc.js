import GLOBALS from '../../global';
import { useState } from 'react';
import { API_URL } from '@env';

export const LoginBloc = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onAuthenticate = async (userName, password, onNavigate) => {
        try {
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
            console.log(json)
            onNavigate(GLOBALS.SCREEN.MATERIAL);
        } catch (error) {
            console.error(error);
        }
    }

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
        onAuthenticate
    };
};
