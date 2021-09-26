import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./style";

//Import da biblioteca de animações
import { MotiView } from "moti";

function WellCome(props) {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Image
        style={styles.image}
        source={require("../../assets/delivery3.png")}
      />

      <MotiView
        style={styles.containerWellcome}
        from={{
          opacity: 0,
          bottom: -200,
        }}
        animate={{
          opacity: 1,
          bottom: 0,
        }}
        transition={{
          type: "timing",
          duration: 400,
        }}
      >
        <Text style={styles.wellcomeTitle}>
          Bem-vindo a melhor lanchonete do Pará
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("WellCome")}
        >
          <Text style={styles.buttonTitle}>Próximo</Text>
        </TouchableOpacity>
      </MotiView>
    </SafeAreaView>
  );
}

export default WellCome;
