import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import ProductItem from '../../components/ProductItem';


const index = () => {
    return (
        <View>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </View> 
    );
};

const styles = StyleSheet.create({
    
});

export default index;
