import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Header = () => {
    return (
        <Text style={styles.textStyle}>Enigma!</Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color:'#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
});

export default Header;