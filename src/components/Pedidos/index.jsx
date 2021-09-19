import React from 'react';
import { Text, View } from 'react-native';

import ListProducts from '../pages/ListProducts'

export default function Pedidos(props) {
    return (
        <View style={{ marginTop: 20 }} >
            <Text
                style={{ fontSize: 18, marginTop: 20, color: '#000' }}
            >Meus Pedidos</Text>

            <View>
                <ListProducts />
                <ListProducts />
                <ListProducts />
                <ListProducts />
            </View>
        </View>
    );
}
