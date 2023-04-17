import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import capufeImg from '../img/CAPUFE.jpg'
import Boton from '../components/boton';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('screen').width;

const Principal = ({ navigation }) => {
    return (
        <View style={styles.contenedorPrin}>
            <View style={styles.contenedorImagen}><Image style={styles.imgHeader} source={capufeImg} /></View>
            <Text style={styles.txtTitulo}>INICIAR SESION</Text>

            <Boton text="TRABAJADOR" onPress={() => { navigation.navigate('trabajador') }} />

            <Boton text="GERENCIA" onPress={() => { navigation.navigate('gerencia') }} />

        </View>
    )
}


const styles = StyleSheet.create({
    contenedorPrin: {


        alignItems: 'center',
        backgroundColor: '#D6D6D6',
        flex: 1,
        flexDirection: 'column'


    },

    txtTitulo: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 24,
        marginBottom: 65,





    },


    contenedorImagen: {
        width: deviceWidth + 100,
        height: 250,
        borderBottomLeftRadius: 245,
        borderBottomRightRadius: 245,
        marginBottom: 60,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4

    },
    imgHeader: {
        width: deviceWidth + 100,
        height: 250,
        borderBottomLeftRadius: 245,
        borderBottomRightRadius: 245,




    }, contenedor: {
        marginBottom: 35
    }
})



export default Principal;