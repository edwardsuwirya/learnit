import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';


const LoginScreen = (props) => {
  const {
    userName,
    password,
    handleUserNameChange,
    handlePasswordChange,
    onAuthenticate
  } = props.bloc();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title} >User Name</Text>
        <TextInput testID="userNameInput" style={styles.input}
          onChangeText={handleUserNameChange}
          value={userName} />
        <Text style={styles.title}>Password</Text>
        <TextInput testID="passwordInput" style={styles.input}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password} />
        <TouchableOpacity
          style={styles.button} onPress={() => onAuthenticate(userName, password, props.onNavigate)}>
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