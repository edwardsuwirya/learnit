import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Header name="Enigma"/>
          <StatusBar style="auto" />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4169E1',
    },
  });

export default HomeScreen;