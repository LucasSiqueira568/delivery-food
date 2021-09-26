import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './style'

export default function Cards(props) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={props.url}
                />
            </View>
                <Text>{props.name}</Text>
        </View>
    )
}