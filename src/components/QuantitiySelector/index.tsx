import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function QuantitiySelector() {
    
    const onMinus = () => {

    }

    const onPlus = () => {

    }
    
    return (
        <View>
            <Pressable onPress={onMinus}>
                <Text> - </Text>
            </Pressable>

            <Text> 0 </Text>

            <Pressable onPress={onPlus}>
                <Text> + </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    
});
