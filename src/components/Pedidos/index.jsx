import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListProducts from "../pages/ListProducts";

export default function Pedidos(props) {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 18,
          marginLeft: 15,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Meus Pedidos
      </Text>

      <View>
        <ListProducts />
        <ListProducts />
        <ListProducts />
        <ListProducts />
      </View>
    </SafeAreaView>
  );
}
