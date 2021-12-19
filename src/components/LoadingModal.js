import React from 'react';
import { StyleSheet, View, Text, Modal, ActivityIndicator } from 'react-native';

const LoadingModal = ({ isVisible }) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <ActivityIndicator size="small" color="#0000ff" />
                <Text style={styles.itemTitleText}>Please Wait</Text>
            </View>
        </View>
    </Modal>
)
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        flexDirection: 'row',
        backgroundColor: "white",
        alignItems: "center",
        paddingLeft:15,
        borderRadius: 10,
        width: 300,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    itemTitleText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        paddingLeft:15
    },
});

export default LoadingModal;