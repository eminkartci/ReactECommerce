import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles';
import { services } from '../../assets/data/services';

const ProductScreen = () => {

    const service = services[0];

    return (
        <View>

            {/* Title */}
            <Text style={styles.title} > {service.title} </Text>

            {/* Slider */}

            {/* Options */}

            {/* Price */}

            {/* Description */}

            {/* Quantiti */}

            {/* Button */}
            
        </View> 
    );
};


export default ProductScreen;
