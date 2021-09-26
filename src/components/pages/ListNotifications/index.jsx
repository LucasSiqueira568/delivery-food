import React, {useState} from 'react';
import { View, TouchableOpacity, Button } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

export default function ListProducts(props) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <ListItem bottomDivider>
                    <Avatar source={props.url} />
                    <ListItem.Content >
                        <ListItem.Title>Hambúrguer Caseiro</ListItem.Title>
                        <ListItem.Subtitle>{props.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>

                    <TouchableOpacity>
                            <Feather name="bell" size={24} color="#000" />
                    </TouchableOpacity>

                </ListItem>
            </TouchableOpacity>
        </View>
    )
}