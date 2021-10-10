import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./style";

//Import da biblioteca de animações
import { MotiView } from "moti";

function WellCome(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/background-1.png")}
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
          Uma das maiores lanchonetes do Pará
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("WellComeTwo")}
        >
          <Text style={styles.buttonTitle}>Próximo</Text>
        </TouchableOpacity>
      </MotiView>
    </SafeAreaView>
  );
}

export default WellCome;
