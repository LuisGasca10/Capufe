import { Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerBoton = (props) => {

    const { onPress } = props;
    return (

        <Pressable onPress={onPress}>
            <Ionicons name="menu" color='black' size={40} />
        </Pressable>

    )
}

export default DrawerBoton

