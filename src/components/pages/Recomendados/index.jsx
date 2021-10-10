import React from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';

function Recomendados(props) {
    return (
        <View>
            <Image
                style={{width: 60, height: 60}}
                source={props.url}

            />
        </View>
    )
}

export default Recomendados;