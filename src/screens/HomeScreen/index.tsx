import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem';

import { services } from '../../assets/data/services'

const HomeScreen = () => {
    return (
        <View>
           <FlatList 
            data={services}
            renderItem={({item}) => <ProductItem service={item}/> }
            keyExtractor={({id}) => id}
           />
        </View> 
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;
