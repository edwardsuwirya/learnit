import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <Header name="Enigma"/>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4169E1',
    },
  });

export default HomeScreen;