import React from 'react'
import { View, Text ,Image, FlatList, StyleSheet} from 'react-native'

interface ImageCarouselProps {
    images: string[],

}

const ImageCarousel = ({images}: ImageCarouselProps) => {
    return (
        <View style={styles.root}>
            <FlatList 
                data={images}
                renderItem={({item}) => (<Image style={styles.image} source={{uri: item}}/>)} 
                horizontal
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
    
    },
    image: {
        width: 300,
        height: 300,
    }
})

export default ImageCarousel
