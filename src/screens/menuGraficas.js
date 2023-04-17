import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Bar from '../img/Bar_logo.png';
import Botonverde from '../components/boton2';

const MenuGraf = () => {
    return (
        <View style={styles.contenedorPrin}>

            <Text style={styles.txtTitulo}>GRAFICAS</Text>

            <Image source={Bar} style={styles.imgLogo} />


            <Text style={styles.txtSubTitulo}>GRAFICAS TOTALES</Text>

            <Botonverde text="AFORO ELUDIDOS" />
            <Botonverde text="INGRESOS ELUDIDOS" />
            <Botonverde text="SINIESTROS" />

        </View>
    )
}

export default MenuGraf

const styles = StyleSheet.create({

    contenedorPrin: {


        alignItems: 'center',
        backgroundColor: '#D6D6D6',
        flex: 1,
        flexDirection: 'column'
    },

    txtTitulo: {
        fontFamily: 'Abel-Regular',
        color: 'black',
        fontSize: 32,
        marginTop: 40


    },
    imgLogo: {
        width: 144,
        height: 148,
        marginTop: 15,
        marginBottom: 9,


    },
    containerLogo: {
        width: 168,
        height: 159,
        alignItems: 'center',
        justifyContent: 'center',


    },
    txtPresentacion: {
        fontFamily: 'Abel-Regular',
        textAlign: 'justify',
        fontSize: 15,
        color: 'black',
        textShadowColor: 'black', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1,

    },
    containerTxtPresntacion: {
        width: 243,
        height: 125,
        marginTop: 20


    },
    txtSubTitulo: {
        fontFamily: 'Abel-Regular',
        color: 'black',
        fontSize: 19,
        marginTop: 20,
        marginBottom: 35


    },

})