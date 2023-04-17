import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'

const Botonverde = (props) => {

    const { onPress, text } = props
    return (

        <TouchableOpacity activeOpacity={0.55} onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>



    )
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#2A4640',
        width: 195,
        height: 37,
        borderRadius: 8,
        // alignItems: 'center',
        justifyContent: 'center',

        marginVertical: 5,

    },
    btnText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        alignSelf: 'center'
    },

})

export default Botonverde;