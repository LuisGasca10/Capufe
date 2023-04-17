import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import React from 'react';
import Boton from '../components/boton';
import capufeImg from '../img/CAPUFE.jpg';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('screen').width;

const Gerencia = ({ navigation }) => {
    return (
        <View style={styles.contenedorPrin}>
            <View style={styles.contenedorImagen}><Image style={styles.imgHeader} source={capufeImg} /></View>
            <Text style={styles.txtTitulo}>GERENCIA</Text>

            <Boton text="Log in" onPress={() => { navigation.navigate('loginGerencia') }} />

            <View style={styles.contenorTxtSign}>
                <Text style={styles.text}>Don´t have an account?</Text>
                <Pressable onPress={() => navigation.navigate('signGerencia')}><Text style={styles.textSign}> Sign</Text></Pressable>
            </View>



        </View >
    )
}

export default Gerencia

const styles = StyleSheet.create({

    contenedorPrin: {


        alignItems: 'center',
        backgroundColor: '#D6D6D6',
        flex: 1,
        flexDirection: 'column'


    },
    contenorTxtSign: {
        flexDirection: 'row',
        marginTop: 30
    },

    txtTitulo: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 24,
        marginBottom: 270,





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
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'

    },
    textSign: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        color: '#A42145'

    }

})