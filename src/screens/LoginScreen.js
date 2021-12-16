import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>

        <Text style={styles.title}>User Name</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true}></TextInput>
        <TouchableOpacity
          style={styles.button}
        >
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
    padding:16,
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