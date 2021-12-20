import {API_URL} from '@env';

export const LoginRepository = () => {
    const userAuthentication = async (userName, password) => {
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
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    return {
        userAuthentication,
    };
};
