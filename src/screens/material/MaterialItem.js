import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const MaterialItem = ({info, index, modalNavigation}) => {
    const onShowModal = () => {
        modalNavigation.navigate('MaterialInfoModal', {
            itemInfo: info,
        })
    }
    return (
        <TouchableOpacity onPress={onShowModal} testID={`material-row-${index}`}>
            <View style={styles.item}>
                <Text style={styles.itemTitleText}>{info.title}</Text>
                <Text style={styles.itemDescriptionText}>{info.description}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FCBF49',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5
    },
    itemTitleText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
    },
    itemDescriptionText: {
        fontFamily: 'Roboto-Regular'
    },
});
export default MaterialItem;