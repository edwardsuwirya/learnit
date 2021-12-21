import React, {createContext} from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import GLOBALS from './src/global';
import MaterialScreen from './src/screens/material/MaterialScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialInfoModal from './src/screens/material/MaterialInfoModal';
import {LoginBloc} from "./src/screens/login/LoginBloc";
import {LoginRepository} from "./src/screens/login/LoginRepository";
import {MaterialBloc} from "./src/screens/material/MaterialBloc";
import {MaterialRepository} from "./src/screens/material/MaterialRepository";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={GLOBALS.SCREEN.WELCOME}>
                <Stack.Group>
                    <Stack.Screen name={GLOBALS.SCREEN.WELCOME} component={WelcomeScreen}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={GLOBALS.SCREEN.LOGIN} options={{headerShown: false}}>
                        {props => <LoginScreen {...props} bloc={() => LoginBloc(LoginRepository)}/>}
                    </Stack.Screen>
                    <Stack.Screen name={GLOBALS.SCREEN.MATERIAL} options={{
                        title: 'LearnIt Material', headerStyle: {
                            backgroundColor: '#4169E1',
                        },
                        headerTintColor: '#FCBF49',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}>
                        {props => <MaterialScreen {...props} bloc={() => MaterialBloc(MaterialRepository)}/>}
                    </Stack.Screen>
                </Stack.Group>
                <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
                    <Stack.Screen name={GLOBALS.MODAL.MATERIAL_INFO} component={MaterialInfoModal}
                                  options={{headerShown: false}}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

