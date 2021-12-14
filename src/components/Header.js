import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, } from 'react-native';

const Header = (props) => {
    const [isShowingText, setIsShowingText] = useState(true);
    useEffect(() => {
        const toggle = setInterval(() => {
          setIsShowingText(!isShowingText);
        }, 1000);
   
        return () => clearInterval(toggle);
     })
     if (!isShowingText) {
        return null;
      }
    return (
        <Text style={styles.textStyle}>Hello, {props.name}</Text>
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