import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Import component card
import Cards from "../pages/Cards";

import api from "../../services/food_api";

export default function Detail(props) {
  const [icon, setIcon] = useState(true);
  const [produto, setProduto] = useState([]);
  const [valor, setValor] = useState(1);

  const getProduto = async () => {
    const { data } = await api.get("produtos/1");
    setProduto(data);
  };
  // console.log(produto.ingredientes.cebola);

  getProduto();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="black" backgroundColor="#000" />
      <View style={styles.cardImage}>
        <Image style={styles.image} source={{ uri: produto.imgUrl }} />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Main")}
          style={{
            position: "absolute",
            top: 20,
            marginLeft: 15,
          }}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => setIcon(!icon)}
            style={{ marginRight: 15 }}
          >
            {icon ? (
              <AntDesign name="hearto" size={24} color="white" />
            ) : (
              <AntDesign name="heart" size={24} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15 }}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 1 }}>
            <SimpleLineIcons name="share-alt" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "black",
              marginLeft: 15,
              marginTop: 10,
            }}
          >
            {produto.name}
          </Text>

          {/* View para organizar os buttons */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 5,
              marginRight: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => setValor(valor - 1)}
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#ced4da",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>
                <MaterialIcons name="remove" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  margin: 10,
                  textAlign: "center",
                }}
              >
                {setValor ? valor : false}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setValor(valor + 1)}
              style={{
                width: 30,
                height: 30,
                backgroundColor: "orange",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>
                <MaterialIcons name="add" size={24} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* View que engloba a descrição do produto */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "grey",
              marginTop: 5,
              marginLeft: 15,
            }}
          >
            {produto.description}
          </Text>
          <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 15 }}>
            Ingredientes
          </Text>

          {/* Card dos ingredientes do produto */}
          <ScrollView
            style={{ flexDirection: "row", marginLeft: 15, marginTop: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Cards
              // name={ produto.ingredientes.name }
              url={{ uri: produto.cebola }}
              onPress={() => {}}
            />
            <Cards
              // name={ produto.ingredientes.name }
              url={{ uri: produto.tomate }}
              onPress={() => {}}
            />
            <Cards
              // name={ produto.ingredientes.name }
              url={{ uri: produto.queijo }}
              onPress={() => {}}
            />
            <Cards
              // name={ produto.ingredientes.name }
              url={{ uri: produto.presunto }}
              onPress={() => {}}
            />
            <Cards
              // name={ produto.ingredientes.name }
              url={{ uri: produto.alface }}
              onPress={() => {}}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
