import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem';

import { services } from '../../assets/data/services'

const index = () => {
    return (
        <View>
           <FlatList 
            data={services}
            renderItem={({item}) => <ProductItem service={item}/> }
           />
        </View> 
    );
};

const styles = StyleSheet.create({
    
});

export default index;
