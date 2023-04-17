import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import Botonverde from '../../components/boton2';


const casetas = ['Caseta 1', 'Caseta 2', 'Caseta 3', 'Caseta 4', 'Caseta 5', 'Caseta 6', 'Caseta 7', 'Caseta 8', 'Caseta 9', 'Caseta 10'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


const FormularioSiniestros = () => {
    const [caseta, setCaseta] = useState(casetas[0]); // Definimos el estado caseta y lo inicializamos con el primer valor del array de casetas
    const [mes, setMes] = useState(meses[0]); // Definimos el estado mes y lo inicializamos con el primer valor del array de meses
    const [siniestros, setSiniestros] = useState(''); // Definimos el estado siniestros y lo inicializamos con una cadena vacía

    const handleCasetaChange = (itemValue) => { // Definimos una función para el cambio de valor del dropdown de casetas
        setCaseta(itemValue); // Actualizamos el estado caseta con el nuevo valor seleccionado
    };

    const handleMesChange = (itemValue) => { // Definimos una función para el cambio de valor del dropdown de meses
        setMes(itemValue); // Actualizamos el estado mes con el nuevo valor seleccionado
    };

    const handleSiniestrosChange = (text) => { // Definimos una función para el cambio de valor del input de ganancias
        setSiniestros(text); // Actualizamos el estado siniestros con el nuevo valor ingresado
    };

    const handleSave = async () => { // Definimos una función para el botón de guardar
        try {
            const existingSiniestros = await AsyncStorage.getItem(`${caseta}:${mes}`); // Buscamos si ya existe información guardada para la caseta y mes seleccionados
            if (existingSiniestros !== null) { // Si ya existe información, mostramos un mensaje de error
                alert('Ya existe información para este mes');
                console.log(existingSiniestros)
            } else { // Si no existe información, guardamos los datos ingresados
                await AsyncStorage.setItem(`${caseta}:${mes}`, siniestros); // Guardamos las ganancias en AsyncStorage utilizando la clave compuesta por la caseta y el mes seleccionados
                alert('Información guardada correctamente');

            }
        } catch (error) { // Si ocurre un error al guardar los datos, lo mostramos en la consola
            console.log(error);
        }
    };

    return (
        <View>
            <Text>Caseta:</Text>
            <Picker selectedValue={caseta} onValueChange={handleCasetaChange}>
                {casetas.map((caseta, index) => <Picker.Item key={index} label={caseta} value={caseta} />)}
            </Picker>
            <Text>Mes:</Text>
            <Picker selectedValue={mes} onValueChange={handleMesChange}>
                {meses.map((mes, index) => <Picker.Item key={index} label={mes} value={mes} />)}
            </Picker>
            <Text>Siniestros:</Text>
            <TextInput value={siniestros} onChangeText={handleSiniestrosChange} keyboardType="numeric" />
            <Botonverde text="Guardar" onPress={() => handleSave()} />
        </View>
    )
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 20,
//         fontSize: 16,
//     },
//     dropdown: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         marginBottom: 20,
//         fontSize: 16,
//     },
// });



export default FormularioSiniestros;

