import React, { useState } from 'react';
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from 'react-native'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ListProducts from '../pages/ListProducts'

export default function Detail(props) {

    const [icon, setIcon] = useState(true);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="black" backgroundColor="#000" />
            <View style={styles.cardImage}>
                <Image
                    style={styles.image}
                    source={require('../../assets/hamburguer_churrasco.jpg')}
                />
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Main")}
                    style={{
                        position: 'absolute',
                        top: 20,
                        marginLeft: 15,
                    }}
                >
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                </TouchableOpacity>

                <View style={{ position: 'absolute', top: 20, right: 20, flexDirection: 'row', }}>
                    <TouchableOpacity
                        onPress={() => setIcon(!icon)}
                        style={{ marginRight: 15, }}>
                        {
                            icon ?
                                <AntDesign name="hearto" size={24} color="white" />
                                :
                                <AntDesign name="heart" size={24} color="white" />
                        }
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginRight: 15, }} >
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 1, }}>
                        <SimpleLineIcons name="share-alt" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{ fontSize: 20, marginTop: 10, marginLeft: 10 }}
                    >Hambúrguer X-Tudo</Text>
                    <Text
                        style={{ fontSize: 20, marginTop: 10, marginRight: 10, color: 'orange' }}
                    >R$ 35,99</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>Relacionados</Text>
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 30,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 30,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 30,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 30,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                </View>
            </View>
        </View>

    )
}