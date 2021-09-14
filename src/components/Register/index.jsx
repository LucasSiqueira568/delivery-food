import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import styles from './style'

export default function Login(props) {
    const [input, setInput] = useState('')
    const [hidePass, setHidePass] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Delivery Food</Text>
            <Text style={styles.textLogin}>Cadastre-se</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu Nome..."
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail..."
            />
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.inputSenha}
                    placeholder="Digite sua Senha..."
                    value={input}
                    secureTextEntry={hidePass}
                    onChangeText={(texto) => setInput(texto)}
                />
                <TouchableOpacity style={styles.buttonPassword}onPress={() => setHidePass(!hidePass)}>
                    { hidePass ?
                        <Ionicons name="eye" color="orange" size={20}/>
                        :
                        <Ionicons name="eye-off" color="grey" size={20}/>
                    }
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("Main")}
            >
                <Text style={{ color: '#FFF', fontSize: 18 }}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.texOption}
                onPress={() => props.navigation.navigate("Login")}
            >
                <Text>Já tem uma conta? Faça login</Text>
            </TouchableOpacity>

        </View>
    )
}
