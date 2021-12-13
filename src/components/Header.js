import React,{useState} from 'react';
import { StyleSheet, Text, } from 'react-native';

const Header = () => {
    return (
        <Text style={styles.textStyle}>Hello, Enigmanians</Text>
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