import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import GLOBALS from './src/global';
import MaterialScreen from './src/screens/material/MaterialScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialInfoModal from './src/screens/material/MaterialInfoModal';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={GLOBALS.SCREEN.WELCOME}>
        <Stack.Group>
          <Stack.Screen name={GLOBALS.SCREEN.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name={GLOBALS.SCREEN.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name={GLOBALS.SCREEN.MATERIAL} component={MaterialScreen} options={{
            title: 'LearnIt Material', headerStyle: {
              backgroundColor: '#4169E1',
            },
            headerTintColor: '#FCBF49',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
          <Stack.Screen name={GLOBALS.MODAL.MATERIAL_INFO} component={MaterialInfoModal} options={{ headerShown: false }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

