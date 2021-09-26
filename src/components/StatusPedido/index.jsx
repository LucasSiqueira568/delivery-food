import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import customStyle from "./customStyle"

import MapView, { Marker } from "react-native-maps";

function StatusPedido() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={customStyle}
        initialRegion={{
          latitude: -1.377148,
          longitude: -48.375811,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -1.377148,
            longitude: -48.375811,
          }}
          title="Para entrega"
          description="Rua da Mata, 21"

        />
      </MapView>
    </SafeAreaView>
  );
}

export default StatusPedido;
