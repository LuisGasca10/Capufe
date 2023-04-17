import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LOGO from '../img/logoMenus.png';


const MenuGerencia = () => {
    return (
        <View style={styles.contenedorPrin}>

            <Text style={styles.txtTitulo}>BIENVENIDO</Text>


            <Image source={LOGO} style={styles.imgLogo} />

            <View style={styles.containerTxtPresntacion}>

                <Text style={styles.txtPresentacion}>

                    La presente aplicación permite registrar y visualizar
                    la información referente al aforo e ingreso de eludidos
                    y los siniestros captados
                    en las Plazas de Cobro que se encuentran ubicadas
                    en diferentessitios alrededor de la República Mexicana.
                </Text>

            </View>


        </View>//VIEW PRINCIPAL


    )
}

export default MenuGerencia

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
        fontSize: 28,
        marginTop: 100

    },
    imgLogo: {
        width: 183,
        height: 185,
        marginTop: 35

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


    }

})