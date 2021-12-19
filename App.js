import React, { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import GLOBALS from './src/global';
import MaterialScreen from './src/screens/MaterialScreen';
import { LoginBloc } from './src/screens/login/LoginBloc';

export default function App() {
  const [screenState, setScreenState] = useState(GLOBALS.SCREEN.WELCOME);
  switch (screenState) {
    case GLOBALS.SCREEN.LOGIN:
      return (
        <LoginScreen onNavigate={setScreenState} bloc={LoginBloc} />
      );
    case GLOBALS.SCREEN.MATERIAL:
      return (
        <MaterialScreen />
      );
    default:
      return (
        <WelcomeScreen onNavigate={setScreenState} />
      );
  }

}

