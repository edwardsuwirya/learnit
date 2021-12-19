import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const MaterialInfoModal = ({ route, navigation }) => {
    const { itemInfo } = route.params;
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.itemTitleText}>{itemInfo.title}</Text>
                <Text style={styles.itemDescriptionText}>{itemInfo.description}</Text>
                <Text style={styles.itemDescriptionText}>
                    <Text style={{ fontWeight: 'bold' }}>Duration: </Text>
                    {itemInfo.duration}
                </Text>
                <View style={{ height: 15 }}></View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { navigation.goBack(); }}>
                    <Text style={styles.itemDescriptionText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemTitleText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
    },
    itemDescriptionText: {
        fontFamily: 'Roboto-Regular'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default MaterialInfoModal;