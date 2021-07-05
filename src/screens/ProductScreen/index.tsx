import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import styles from './styles';
import { services } from '../../assets/data/services';
import { Picker } from '@react-native-picker/picker';
import QuantitiySelector from '../../components/QuantitiySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
const ProductScreen = () => {

    const service = services[0];
    const [selectedOption,setSelectedOption] = useState(service.options ? service.options[0] : null)
    const [quantitiy,setQuantitiy] = useState(1)

    console.log('Selected Option: ', selectedOption);

    return (

        <View style={styles.root}>

            {/* Title */}
            <Text style={styles.title} > {service.title} </Text>

            {/* Slider */}
            <ImageCarousel images={service.images}/>

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

            {/* Quantitiy Selection */}
            <QuantitiySelector quantitiy={quantitiy} setQuantitiy={setQuantitiy} />

            {/* Button */}
            <Button text="Add to Card" onPress = {() => {console.log("Added to Card")}} containerStyles={{backgroundColor: '#e3c905'}}  />
            <Button text="Buy Now" onPress = {() => {console.log("Buying now")}} />
            
        </View> 
    );
};


export default ProductScreen;
