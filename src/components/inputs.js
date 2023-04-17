import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

export const Inputs = (props) => {
    const { placeholder, text } = props;
    return (
        <View style={styles.contenedor}>

            <Text style={styles.text}>{text}</Text>
            <TextInput placeholder={placeholder} style={styles.inputText} placeholderTextColor={'grey'} />
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        width: 279,
        alignItems: 'center',
        marginTop: 10,




    },
    inputText: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '90%',
        marginBottom: 5,
        paddingLeft: 10,
        paddingVertical: 6,
        borderRadius: 8,

    },
    text: {
        color: 'black',
        marginRight: 190,
        marginBottom: 5
    }




})

export default Inputs;