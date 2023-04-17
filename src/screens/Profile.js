import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Botonverde from '../components/boton2'

const Profile = ({ navigation }) => {
    return (
        <View style={styles.contenedorPrin}>
            <Botonverde text="Log out" onPress={() => navigation.navigate('principal')} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    contenedorPrin: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D6D6D6',
        flex: 1,
        flexDirection: 'column'
    },
})