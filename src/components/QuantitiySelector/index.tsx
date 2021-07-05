import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function QuantitiySelector({quantitiy,setQuantitiy}) {
    
    const onMinus = () => {
        setQuantitiy(Math.max(0,quantitiy -1));
    }

    const onPlus = () => {
        setQuantitiy(quantitiy +1);
    }
    
    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}> - </Text>
            </Pressable>

            <Text style={styles.quantitiy}> {quantitiy} </Text>

            <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttonText}> + </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor: '#e3e3e3',
        borderRadius: 5,
        width:130,
        justifyContent: 'space-between',
    },
    button: {
        width: 35,
        height: 35,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#d1d1d1'
    },
    buttonText: {
        fontSize: 18,
    },
    quantitiy: {
        color: '#007eb9'
    }
    
});
