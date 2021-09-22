import React from "react";
import { Image, ScrollView, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./style";
import { SimpleLineIcons } from "@expo/vector-icons";
import ListProfiler from "../pages/ListProfiler";

export default function ProfilerUser(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            padding: 150,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <View>
            <Image
              style={{
                width: 150,
                height: 150,
                padding: 10,
              }}
              source={require("../../assets/user.png")}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                left: 120,
                top: 30,
                backgroundColor: "orange",
                width: 40,
                height: 40,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SimpleLineIcons name="camera" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Main")}
            style={{
              position: "absolute",
              top: 35,
              left: 15,
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Lucas Siqueira Rodrigues"
            nameIcon="user"
            rightIcon="pencil"
            onPress={() => console.warn("Clicou")}
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Senha"
            nameIcon="lock"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="E-mail"
            nameIcon="mail"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Telefone"
            nameIcon="phone"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Endereço"
            nameIcon="map"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Cartões"
            nameIcon="credit-card"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Ajuda"
            nameIcon="info"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Configurações"
            nameIcon="settings"
            rightIcon="arrow-right"
          />
          <ListProfiler
            url={require("../../assets/hamburguer_churrasco.jpg")}
            title="Termo de Uso"
            nameIcon="info"
            rightIcon="arrow-right"
          />
        </View>
      </View>
    </ScrollView>
  );
}
