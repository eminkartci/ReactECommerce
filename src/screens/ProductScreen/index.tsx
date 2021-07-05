import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles';
import { services } from '../../assets/data/services';
import { Picker } from '@react-native-picker/picker';

const ProductScreen = () => {

    const service = services[0];
    const [selectedOption,setSelectedOption] = useState('')
    console.log('Selected Option: ', selectedOption);

    return (
        <View>

            {/* Title */}
            <Text style={styles.title} > {service.title} </Text>

            {/* Slider */}

            {/* Options */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue,itemIndex) => {
                    setSelectedOption(itemValue);
                }}
            >
                {service.options.map(option => <Picker.Item label={option} value={option} /> )}
            </Picker>

            {/* Price */}
            <View style={styles.prices}>
                <Text style={styles.price}> Price {service.price} </Text>
                {service.oldPrice && (<Text style={styles.oldPrice}> {service.oldPrice} </Text>)}
            </View>

            {/* Description */}
            <Text style={styles.description}>
                {service.description}
            </Text>

            {/* Quantiti */}

            {/* Button */}
            
        </View> 
    );
};


export default ProductScreen;
