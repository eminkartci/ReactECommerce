import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import ProductItem from '../../components/ProductItem';

import { services } from '../../assets/data/services'

const index = () => {
    return (
        <View>
            <ProductItem service={services[0]} />
            <ProductItem service={services[1]}/>
            <ProductItem service={services[2]}/>
            <ProductItem service={services[3]}/>
        </View> 
    );
};

const styles = StyleSheet.create({
    
});

export default index;
