import React, { useState } from 'react';
import { View, TouchableOpacity, Button } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ListProfiler(props) {

    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <ListItem bottomDivider>
                    <Feather name={props.nameIcon} size={25} color="#000" />
                    <ListItem.Content >
                        <ListItem.Title>{props.title}</ListItem.Title>
                    </ListItem.Content>

                    <TouchableOpacity>
                        <SimpleLineIcons name={props.rightIcon} size={24} color="black" />
                    </TouchableOpacity>

                </ListItem>
            </TouchableOpacity>
        </View>
    )
}