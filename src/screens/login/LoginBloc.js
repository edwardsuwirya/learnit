import GLOBALS from '../../global';
import { useState } from 'react';

export const LoginBloc = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onAuthenticate = (userName, password, onNavigate) => {
        if (userName == "112" && password == "112") {
            onNavigate(GLOBALS.SCREEN.MATERIAL);
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
