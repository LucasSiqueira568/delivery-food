import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import Card from '../Card';
import ListProducts from '../pages/ListProducts'
import styles from './style'


export default function Home(props) {
    return (

        <ScrollView >
            <View style={styles.container}>
                <View style={{ backgroundColor: 'orange' }}>
                    <View style={styles.title}>
                        <Text
                            style={{
                                color: "#FFF",
                                fontSize: 18,
                                marginLeft: 15,
                                alignItems: "center"
                            }}
                        >Delivery Food <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFF" />
                        </Text>

                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.search}>

                        <TouchableOpacity style={styles.searchButton}>
                            <Ionicons name="search" size={24} color="grey" />
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            placeholder="Pesquisar"

                        />
                        <TouchableOpacity style={styles.barsButton}>
                            <AntDesign name="bars" size={24} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text
                        style={{ fontSize: 18, marginLeft: 15, marginTop: 15 }}
                    >Destaques</Text>
                    <ScrollView horizontal={true} >
                        <Card
                            url={require('../../assets/hamburguer_churrasco.jpg')}
                            name="Hambúrguer X-Tudo"
                            detail="Burger - American Food - Deshi Food"
                            price="R$ 35,99"
                            onPress={() => props.navigation.navigate("Detail")}
                        />
                        <Card
                            url={require('../../assets/hamburguer_perfeito.jpg')}
                            name="Hambúrguer X-EGGES"
                            detail="Burger - Europe Food - Show Food"
                            price="R$ 46,90"
                            onPress={() => props.navigation.navigate("Detail")}
                        />
                        <Card
                            url={require('../../assets/hamburguer_caseiro.jpg')}
                            name="Hambúrguer Caseiro"
                            detail="Burger - American Food - Deshi Food"
                            price="R$ 32,99"
                            onPress={() => props.navigation.navigate("Detail")}
                        />
                        <Card
                            url={require('../../assets/hamburguer.jpg')}
                            name="Hambúrguer Caseiro"
                            detail="Burger - American Food - Deshi Food"
                            price="R$ 32,99"
                            onPress={() => props.navigation.navigate("Detail")}
                        />

                    </ScrollView>
                </View>
                <View style={{ marginTop: 30, position: "relative" }}>
                    <View style={{ position: 'absolute', top: 30 }}>
                        <Text style={{ fontSize: 18, left: 15, bottom: 60, color: '#000' }}
                        >Recomendados</Text>
                    </View>
                    <ListProducts
                        url={require('../../assets/hamburguer_caseiro.jpg')}
                        subtitle="R$ 32,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_perfeito.jpg')}
                        subtitle="R$ 35,99"
                        onPress={() => props.navigation.navigate("Detail")}

                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 45,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 40,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                    <ListProducts
                        url={require('../../assets/hamburguer_churrasco.jpg')}
                        subtitle="R$ 30,99"
                        onPress={() => props.navigation.navigate("Detail")}
                    />
                </View>
            </View>
        </ScrollView>
    )
}