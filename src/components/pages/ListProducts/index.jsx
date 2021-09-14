import React, {useState} from 'react';
import { View, TouchableOpacity, Button } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function ListProducts(props) {
    const [icon, setIcon] = useState(true)
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <ListItem bottomDivider>
                    <Avatar source={props.url} />
                    <ListItem.Content >
                        <ListItem.Title>Hambúrguer Caseiro</ListItem.Title>
                        <ListItem.Subtitle>{props.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>

                    <TouchableOpacity onPress={() => setIcon(!icon)}>
                        {
                            icon ?
                            <AntDesign name="hearto" size={24} color="#000" />
                            :
                            <AntDesign name="heart" size={24} color="#000" />

                        }
                    </TouchableOpacity>

                </ListItem>
            </TouchableOpacity>
        </View>
    )
}