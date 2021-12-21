import React from 'react';
import {StyleSheet, SafeAreaView, View, FlatList, Text, TouchableOpacity} from 'react-native';
import LoadingModal from "../../components/LoadingModal";
import MaterialItem from "./MaterialItem";


const MaterialScreen = ({navigation, bloc}) => {
    const {
        materialData,
        isLoading
    } = bloc();
    return (
        <SafeAreaView style={styles.container}>
            <LoadingModal isVisible={isLoading}/>
            <View>
                <FlatList
                    data={materialData}
                    renderItem={({item,index}) => (
                        <MaterialItem info={item} index={index} modalNavigation={navigation}/>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4169E1',
    },
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

export default MaterialScreen;