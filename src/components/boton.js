import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'

const Boton = (props) => {

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
        backgroundColor: '#A42145',
        width: 229,
        height: 37,
        borderRadius: 8,
        // alignItems: 'center',
        justifyContent: 'center',

        marginVertical: 10,

    },
    btnText: {
        fontSize: 17,
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        alignSelf: 'center'
    },

})

export default Boton