import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListNotifications from "../pages/ListNotifications";

export default function Notifications(props) {
  return (
    <SafeAreaView>
        <View>
            <Text style={{fontSize: 18, marginLeft: 15, marginTop: 10, marginBottom: 10}}>Minhas notificações</Text>
        </View>
      <ListNotifications
        url={require("../../assets/hamburguer_caseiro.jpg")}
        subtitle="Compre agora pela metade do preço"
      />
      <ListNotifications
        url={require("../../assets/hamburguer_caseiro.jpg")}
        subtitle="Compre agora pela metade do preço"
      />
      <ListNotifications
        url={require("../../assets/hamburguer_caseiro.jpg")}
        subtitle="Compre agora pela metade do preço"
      />
    </SafeAreaView>
  );
}
