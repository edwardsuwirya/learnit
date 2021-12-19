import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';

const MATERIAL_SUBJECT = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Golang Fundamental',
        description: 'Learn basic of go programming language',
        duration: '9 days',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Golang SQL',
        description: 'Learn how to connect go with relational database',
        duration: '7 days',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'JavaScript',
        description: 'Learn basic of JavaScript programming language',
        duration: '5 days',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d70',
        title: 'React Fundamental',
        description: 'Learn to build single page web application',
        duration: '7 days',
    },
    {
        id: '88694a0f-3da1-471f-bd96-145571e29c34',
        title: 'React Native Fundamental',
        description: 'Learn to build multiplatform mobile application',
        duration: '6 days',
    },
];


const MaterialItem = ({ info, modalNavigation }) => {
    const onShowModal = () => {
        modalNavigation.navigate('MaterialInfoModal', {
            itemInfo: info,
        })
    }
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={onShowModal}>
                <Text style={styles.itemTitleText}>{info.title}</Text>
                <Text style={styles.itemDescriptionText}>{info.description}</Text>
            </TouchableOpacity>
        </View>
    )
};

const MaterialScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={MATERIAL_SUBJECT}
                    renderItem={({ item }) => (
                        <MaterialItem info={item} modalNavigation={navigation} />
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