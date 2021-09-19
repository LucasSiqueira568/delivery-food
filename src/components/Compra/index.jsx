import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import {
    ButtonAddProduct,
    Title,
    ButtonAddCarrinho,
    Container,
    ButtonFinishPedido
} from './style'

export default function Compra(props) {

    const [qtdProduct, setqtdProduct] = useState(1);
    const valor = 35.99;
    return (
        <Container>
            <ButtonAddCarrinho>
                <SimpleLineIcons name="plus" size={20} color="orange" />
                <Title>Adicionar ao carrinho</Title>
            </ButtonAddCarrinho>

            <View style={{ flexDirection: 'row', width: 400, justifyContent: 'space-between' }}>
                <ButtonAddProduct>
                    <SimpleLineIcons name="minus" size={25} color="orange"
                        onPress={() => setqtdProduct(qtdProduct - 1)}
                    />
                    <Title style={{ padding: 5, fontSize: 25 }}>{qtdProduct}</Title>
                    <SimpleLineIcons name="plus" size={25} color="orange"
                        onPress={() => setqtdProduct(qtdProduct + 1)}
                    />
                </ButtonAddProduct>

                <ButtonFinishPedido>
                    <Title style={{ color: 'white' }}>
                        Comprar por R$ {setqtdProduct ? qtdProduct * valor.toFixed(2) : valor.toFixed(2)}</Title>
                </ButtonFinishPedido>
            </View>
        </Container>
    )
}