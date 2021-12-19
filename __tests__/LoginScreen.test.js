import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoginScreen from '../src/screens/login/LoginScreen';


describe('Login Screen', () => {
  const bloc = jest.fn();
  bloc.mockReturnValue({
    userName: '',
    password: '',
    handleUserNameChange: () => { },
    handlePasswordChange: () => { },
    onAuthenticate: () => {
      return { "token": "123" }
    }
  });

  it('renders correctly', () => {
    const { toJSON } = render(<LoginScreen bloc={bloc} />);
    expect(toJSON()).toMatchSnapshot()
  });

  //alternatif dari match snapshot
  it('renders form correctly', () => {
    const { getByTestId, queryByText } = render(<LoginScreen bloc={bloc} />);
    expect(queryByText('User Name')).not.toBeNull();
    expect(queryByText('Password')).not.toBeNull();
    expect(getByTestId('userNameInput')).not.toBeNull();
    expect(getByTestId('passwordInput')).not.toBeNull();
    expect(queryByText('Login')).not.toBeNull();
  });

  it('User do login', () => {
    const bloc = jest.fn();
    const onAuthenticateMock = jest.fn();
    bloc.mockReturnValue({
      userName: '',
      password: '',
      handleUserNameChange: jest.fn(),
      handlePasswordChange: jest.fn(),
      onAuthenticate: onAuthenticateMock
    });
    const { getByTestId, getByText } = render(<LoginScreen bloc={bloc} />);
    const userNameInput = getByTestId('userNameInput');
    fireEvent.changeText(userNameInput, 'doni');

    const passwordInput = getByTestId('passwordInput');
    fireEvent.changeText(passwordInput, '333');

    const loginButton = getByText('Login');
    fireEvent.press(loginButton);
    expect(onAuthenticateMock.mock.calls.length).toBe(1);
  });
});
