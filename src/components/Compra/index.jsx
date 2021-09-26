import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from './style'

import SelectionBebidas from '../pages/SelectionBebidas'
export default function Compra(props) {

    const [qtdProduct, setqtdProduct] = useState(1);
    const valor = 35.99;
    return (
        <View style={styles.Container}>
            <ScrollView style={{ backgroundColor: 'red', marginBottom: 10 }}>
                <View style={{ backgroundColor: 'grey', width: 400, height: 70 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 15 }}>Escolha sua Bebida</Text>
                    <Text style={{ marginLeft: 15 }}>0 de 1</Text>
                    <View>
                        <SelectionBebidas
                            title="Pepsi"
                            onPress={() => { }}
                        />
                        <SelectionBebidas
                            title="Coca-Cola"
                            onPress={() => { }}
                        />
                    </View>
                </View>

            </ScrollView>

            <View style={styles.ContainerButtons}>
                <View style={styles.ButtonAddProduct}>
                    <SimpleLineIcons name="minus" size={25} color="orange"
                        onPress={() => setqtdProduct(qtdProduct - 1)}
                    />
                    <Text style={{ padding: 20, fontSize: 19 }}>{qtdProduct}</Text>
                    <SimpleLineIcons name="plus" size={25} color="orange"
                        onPress={() => setqtdProduct(qtdProduct + 1)}
                    />
                </View>

                <View style={styles.ButtonFinishPedido}>
                    <Text style={{ color: 'white' }}>
                        Comprar por R$ {setqtdProduct ? qtdProduct * valor.toFixed(2) : valor}</Text>
                </View>
            </View>
        </View>
    )
}