import React from 'react'
import { View, Text , Image, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ProductItem() {
    return (
        <View style={styles.root}>

                <Image style={styles.image} source={{uri:'https://thesmartstarts.com/wp-content/uploads/2020/09/smartrecruit-1500x630.jpg'}} />

                <View style={styles.content}>

                    <Text style={styles.title} numberOfLines={3}> - - - -  Title - - - -  </Text>

                    {/* Rating  */}
                    <View style={styles.rating}>

                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"}/>
                        <FontAwesome style={styles.star} name="star" size={18} color={"#e47911"}/>
                        <FontAwesome style ={styles.star} name="star" size={18} color={"#e47911"}/>
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={"#e47911"}/>
                        <FontAwesome style={styles.star} name="star-o" size={18} color={"#e47911"}/>


                        <Text> ---- </Text>

                    </View>
                        
                    <View style={styles.prices}>
                        <Text style={styles.price}> Price __ $  </Text>
                        <Text style={styles.oldPrice}> *** $ </Text>
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
        alignItems: 'center',
        marginVertical: 10,
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
        justifyContent: 'space-evenly'
    }
});
