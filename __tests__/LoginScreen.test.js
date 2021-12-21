import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from '../src/screens/login/LoginScreen';
import {LoginBloc} from "../src/screens/login/LoginBloc";

describe('Login Screen', () => {
    const bloc = jest.fn();
    bloc.mockReturnValue({
        userName: '',
        password: '',
        handleUserNameChange: jest.fn(),
        handlePasswordChange: jest.fn(),
        onAuthenticate: () => {
            return {"token": "123"}
        },
        isLoading: false
    });

    it('renders correctly', () => {
        const {toJSON} = render(<LoginScreen bloc={bloc}/>);
        expect(toJSON()).toMatchSnapshot()
    });

    //alternatif dari match snapshot
    it('renders form correctly', () => {
        const {getByTestId, queryByText} = render(<LoginScreen bloc={bloc}/>);
        expect(queryByText('User Name')).not.toBeNull();
        expect(queryByText('Password')).not.toBeNull();
        expect(getByTestId('userNameInput')).not.toBeNull();
        expect(getByTestId('passwordInput')).not.toBeNull();
        expect(queryByText('Login')).not.toBeNull();
    });

    it('User do login', () => {
        const loginBlocMock = jest.fn();
        const onAuthenticateMock = jest.fn();
        loginBlocMock.mockReturnValue({
            userName: '',
            password: '',
            handleUserNameChange: jest.fn(),
            handlePasswordChange: jest.fn(),
            onAuthenticate: onAuthenticateMock
        });
        const {getByTestId, getByText} = render(<LoginScreen bloc={loginBlocMock}/>);
        const userNameInput = getByTestId('userNameInput');
        fireEvent.changeText(userNameInput, 'doni');

        const passwordInput = getByTestId('passwordInput');
        fireEvent.changeText(passwordInput, '333');

        const loginButton = getByText('Login');
        fireEvent.press(loginButton);
        expect(onAuthenticateMock.mock.calls.length).toBe(1);
    });

    it('When User do login successfully, screen navigate ', async () => {
        const loginRepoMock = jest.fn();
        const userAuthenticationMock = jest.fn()
        userAuthenticationMock.mockReturnValueOnce(true)
        loginRepoMock.mockReturnValue({
            userAuthentication: userAuthenticationMock,
        });
        const {getByText} = render(<LoginScreen bloc={() => LoginBloc(loginRepoMock)}/>);
        const loginButton = getByText('Login');
        fireEvent.press(loginButton);
        await waitFor(() => {
            expect(userAuthenticationMock.mock.results[0].value).toBe(true);
        });

    });
});
