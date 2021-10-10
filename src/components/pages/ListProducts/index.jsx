import React, {useState} from 'react';
import { View, TouchableOpacity, Button, StyleSheet, Text, Image } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function ListProducts(props) {
    const [icon, setIcon] = useState(true)
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={props.onPress}>
                <Image 
                    style={styles.imagem}
                    source={require('../../../assets/pizza.png')}
                />
                <Text style={styles.name}>Pizza de Queijo</Text>
                <Text style={styles.price}>R$ 20,90</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 230,
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        margin: 15,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize:16,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 5,
        textAlign: 'center'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'orange'
    },
    imagem: {
        width: 100,
        height: 100,
        margin: 20,
    }

})