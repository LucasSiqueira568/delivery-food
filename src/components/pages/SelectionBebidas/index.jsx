import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function SelectionBebidas(props) {
    const [icon, setIcon] = useState(true)
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <ListItem bottomDivider>
                    <ListItem.Content >
                        <ListItem.Title>{props.title}</ListItem.Title>
                    </ListItem.Content>

                    <TouchableOpacity onPress={() => setIcon(!icon)}>
                        {
                            icon ?
                            <SimpleLineIcons name="check" size={24} color="#000" />
                            :
                            <SimpleLineIcons name="check" size={24} color="grey" />

                        }
                    </TouchableOpacity>

                </ListItem>
            </TouchableOpacity>
        </View>
    )
}