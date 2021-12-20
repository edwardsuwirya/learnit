import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LoadingModal from '../../components/LoadingModal';

const LoginScreen = ({navigation, bloc}) => {
    const {
        userName,
        password,
        handleUserNameChange,
        handlePasswordChange,
        onAuthenticate,
        isLoading
    } = bloc();

    return (
        <SafeAreaView style={styles.container}>
            <LoadingModal isVisible={isLoading}/>
            <View style={styles.body}>
                <Text style={styles.title}>User Name</Text>
                <TextInput testID="userNameInput" style={styles.input}
                           onChangeText={handleUserNameChange}
                           value={userName}/>
                <Text style={styles.title}>Password</Text>
                <TextInput testID="passwordInput" style={styles.input}
                           secureTextEntry={true}
                           onChangeText={handlePasswordChange}
                           value={password}/>
                <TouchableOpacity
                    style={styles.button} onPress={() => onAuthenticate(userName, password, navigation)}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
    },
    body: {
        padding: 16,
    },
    title: {
        marginLeft: 12,
        color: '#FCBF49'
    },
    button: {
        backgroundColor: "#FCBF49",
        alignItems: "center",
        margin: 12,
        padding: 12,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#FCBF49',
        padding: 10,
        color: '#FCBF49',
    },
});

export default LoginScreen;