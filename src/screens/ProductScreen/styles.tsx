import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 20,
        backgroundColor: '#fff',

    },
    title:{
        
    },
    price:{
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(10,100,50,0.9)',
    },
    prices:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    oldPrice:{
        fontSize: 16,
        fontWeight: '100',
        textDecorationLine: 'line-through',
        color: '#000',
    },
    description:{
        marginVertical: 20,
        lineHeight: 20,
    },
});

export default styles;