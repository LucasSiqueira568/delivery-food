import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import Card from "../Card";
import ListProducts from "../pages/ListProducts";
import Recomendados from "../pages/Recomendados";
import styles from "./style";
import api from "../../services/food_api";

export default function Home(props) {
  const [produto, setProduto] = useState([]);

  const getProduto = async () => {
    const { data } = await api.get("produtos/1");
    setProduto(data);
  };
  // console.log(produto.ingredientes.cebola);

  getProduto();
  return (
    <View style={styles.container}>
      {/* View do componete header */}
      <View style={{ backgroundColor: "orange" }}>
        <View style={styles.title}>
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              marginLeft: 15,
              alignItems: "center",
            }}
          >
            Bem-vindo, Lucas
          </Text>
          <View style={{ width: 60, height: 60 }}>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => props.navigation.navigate("Profiler")}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: "https://avatars.githubusercontent.com/u/62457621?v=4",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="grey" />
          </TouchableOpacity>

          <TextInput style={styles.input} placeholder="Pesquisar" />
          <TouchableOpacity style={styles.barsButton}>
            <AntDesign name="bars" size={24} color="grey" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Cards dos produtos recomendados */}
      <ScrollView horizontal={false}>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 18, left: 15, bottom: 20, color: "#000" }}>
            Recomendados
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          
          <ListProducts
            title={produto.name}
            url={{ uri: produto.imgUrl }}
            subtitle={`R$ ${produto.price}`}
            onPress={() => {}}
          />
          <ListProducts
            title={produto.name}
            url={{ uri: produto.imgUrl }}
            subtitle={`R$ ${produto.price}`}
            onPress={() => {}}
          />
          <ListProducts
            title={produto.name}
            url={{ uri: produto.imgUrl }}
            subtitle={`R$ ${produto.price}`}
            onPress={() => {}}
          />
          <ListProducts
            title={produto.name}
            url={{ uri: produto.imgUrl }}
            subtitle={`R$ ${produto.price}`}
            onPress={() => {}}
          />
          <ListProducts
            title={produto.name}
            url={{ uri: produto.imgUrl }}
            subtitle={`R$ ${produto.price}`}
            onPress={() => {}}
          />
          <ListProducts
            title={produto.name}
            url={{ uri: produto.imgUrl }}
            subtitle={`R$ ${produto.price}`}
            onPress={() => {}}
          />
         
        </View>
      </ScrollView>
    </View>
  );
}
