import React, { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import GLOBALS from './src/global';

export default function App() {
  const [screenState, setScreenState] = useState(GLOBALS.SCREEN.WELCOME);
  switch (screenState) {
    case GLOBALS.SCREEN.LOGIN:
      return (
        <LoginScreen/>
      );
    default:
      return (
        <WelcomeScreen onNavigate={setScreenState} />
      );
  }

}

