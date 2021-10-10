import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";

//Import da biblioteca de animações
import { MotiView } from "moti";

function WellCome(props) {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require("../../assets/wellcome.png")}
      />
      <LinearGradient
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 0.8, y: 0.8 }}
        locations={[0.1, 0.0, 1]}
        colors={["transparent", "transparent", "#000"]}
        style={styles.background}
      />

      <MotiView
        style={styles.viewTitle}
        from={{
          top: -200,
        }}
        animate={{
          top: 80,
        }}
        transition={{
          type: "timing",
          duration: 600,
        }}
      >
        <Text style={styles.title}>Delivery Food</Text>
      </MotiView>

      <MotiView
        style={styles.containerWellcome}
        from={{
          opacity: 0,
          left: -200,
        }}
        animate={{
          opacity: 1,
          left: 0,
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
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={styles.buttonTitle}>Vamos começar?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={{ color: "white", marginLeft: 20, textAlign: "center" }}>
            Já tem uma conta? Faça login aqui
          </Text>
        </TouchableOpacity>
      </MotiView>
    </SafeAreaView>
  );
}

export default WellCome;
