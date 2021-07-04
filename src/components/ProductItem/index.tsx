import React from 'react'
import { View, Text , Image, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface ProductItemProps {
 service: {
     title: string,
     imageURL: string,
     price: string,
     oldPrice: string,
     rating: number,
     star: number
 }
}

export default function ProductItem(props: ProductItemProps) {

    return (
        <View style={styles.root}>

                <Image style={styles.image} source={{uri:props.service.imageURL}} />

                <View style={styles.content}>

                    <Text style={styles.title} numberOfLines={3}> {props.service.title} </Text>

                    {/* Rating  */}
                    <View style={styles.rating}>

                        {[0,0,0,0,0].map((el,i)=>

                            <FontAwesome style={styles.star} name={i < Math.floor(props.service.star) ? 'star' : 'star-o'} size={18} color={"#e47911"}/>

                        )}
                        


                        <Text style={styles.ratingText}> {props.service.rating} </Text>

                    </View>
                        
                    <View style={styles.prices}>
                        <Text style={styles.price}> Price {props.service.price} </Text>
                        {props.service.oldPrice && (<Text style={styles.oldPrice}> {props.service.oldPrice} </Text>)}
                    </View>
                    
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: '2.5%',
        padding: '2.5%',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 15,
        backgroundColor: '#fff',
        width: '95%',
        alignItems: 'center',
    },
    image: {
        flex: 2,
        minHeight: 150,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    content:{
        flex: 3,
        padding: 10,
    },
    title:{
        width: '90%',
        fontSize: 20,
        fontWeight: '400',
    },
    price:{
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(10,100,50,0.9)',
    },
    rating:{
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    ratingText:{
        color: 'gray',
    },
    star:{
        margin: 3,
    },
    oldPrice:{
        fontSize: 16,
        fontWeight: '100',
        textDecorationLine: 'line-through',
        color: '#000',
    },
    prices:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});
