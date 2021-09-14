import React from 'react';
import { View, Text, Image, Alert, Button, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import styles from './style'

export default function CardProduct(props) {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
            <View style={styles.cardProduct}>
                <Image
                    style={styles.image}
                    source={props.url}
                />
                <View>
                    <Text style={{
                        color: 'black',
                        fontSize: 14,
                        marginRight: 30,
                        marginLeft: 10,
                        marginTop: 5,
                        marginBottom: 5,
                    }}>{props.name}</Text>
                    <Text style={{
                        fontSize: 12,
                        color: 'grey',
                        marginRight: 30,
                        marginLeft: 10,
                        marginBottom: 5,
                    }}>{props.detail}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={{width: '80%', marginLeft: 8,fontSize: 16}}>{props.price}</Text>
                    <TouchableOpacity style={styles.buttonCard}>
                        <Text><Ionicons name="add" color="white" size={20} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}