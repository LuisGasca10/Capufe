import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native';
import capufeLogo from '../img/CAPUFE_LOGO.png'
import Boton from '../components/boton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const deviceHeight = Dimensions.get('window').height;//Guarda la dimencion de la pantalla del dispositivo
const deviceWidth = Dimensions.get('screen').width;



const LoginTrabjador2 = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Comprueba si el correo electrónico ya ha sido registrado
        try {
            const user = await AsyncStorage.getItem('user');
            if (user !== null) {//comprueba si la variable user es null
                const parsedUser = JSON.parse(user);
                //comprueba si la contraseña y el correo electrónico ingresados por el usuario coinciden con los almacenados en el objeto de usuario.
                if (parsedUser.password === password && parsedUser.email === email) {
                    //comprueba que sea del mismo tipo de cuenta 
                    if (parsedUser.type === 'type 1') {
                        navigation.navigate('menuTrabajador');//cambia a la pantalla del menu de trabajador

                    } else {
                        alert('Tipo de usurario no valido')//alerta si el tipo de usuario no es valido

                    }
                } else {
                    alert('Usuario y/o Contraseña incorrecta');//alerta si el usuario y/o contraseña es incorrecto
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.contenedorImg}><Image style={styles.logo} source={capufeLogo} /></View>{/* Contenedor Logo  */}

            <Text style={styles.txtTitulo}>TRABAJADOR</Text>

            <View style={styles.contenedor}>{/* contenedor con el contenedor de inputs, boton y el text  */}

                <Text style={styles.txtTituloLog}>LOG IN</Text>


                <View style={styles.contenedorInputs}>{/* Contenedor de inputs */}

                    <View style={styles.contenedorIn}>{/* Input Usuario*/}
                        <Text style={styles.text}>Usuario</Text>
                        <TextInput
                            placeholder="Usuario"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            value={email}
                            onChangeText={(text) => setEmail(text)} />
                    </View>


                    <View style={styles.contenedorIn}>{/* Input Usuario*/}
                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput placeholder="Contraseña"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)} />
                    </View>

                </View>



                <Boton text="Log in" onPress={() => { handleLogin() }} />{/* Boton Login*/}

            </View>




        </View>
    )
}


const LoginGerencia = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginGerencia = async () => {
        // Comprueba si el correo electrónico ya ha sido registrado
        try {
            const user = await AsyncStorage.getItem('user');
            if (user !== null) {//comprueba si la variable user es null
                const parsedUser = JSON.parse(user);
                //comprueba si la contraseña y el correo electrónico ingresados por el usuario coinciden con los almacenados en el objeto de usuario.
                if (parsedUser.password === password && parsedUser.email === email) {
                    //comprueba que sea del mismo tipo de cuenta 
                    if (parsedUser.type === 'type 2') {
                        navigation.navigate('menuGerencia');//cambia a la pantalla del menu de gerencia 

                    } else {
                        alert('Tipo de usurario no valido')//alerta si el tipo de usuario no es valido

                    }

                } else {
                    alert('Usuario y/o Contraseña incorrecta');//alerta si el usuario y/o contraseña es incorrecto
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.contenedorImg}><Image style={styles.logo} source={capufeLogo} /></View>{/* contenedor del logo */}

            <Text style={styles.txtTitulo}>GERENCIA</Text>


            <View style={styles.contenedor}>{/* contenedor con el contenedor de inputs, boton y el text  */}


                <Text style={styles.txtTituloLog}>LOG IN</Text>


                <View style={styles.contenedorInputs}>{/* Contenedor de inputs */}

                    <View style={styles.contenedorIn}>{/* Input Usuario*/}
                        <Text style={styles.text}>Usuario</Text>
                        <TextInput
                            placeholder="Usuario"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            value={email}
                            onChangeText={(text) => setEmail(text)} />
                    </View>


                    <View style={styles.contenedorIn}>{/* Input Contraseña*/}
                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput placeholder="Contraseña"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)} />
                    </View>


                </View>



                <Boton text="Log in" onPress={() => { handleLoginGerencia() }} />{/* Boton Login*/}

            </View>




        </View>
    )
}



const SignTrabajador2 = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSignUp = async () => {
        try {
            // Comprueba si el correo electrónico ya ha sido registrado
            const userData = await AsyncStorage.getItem('user');
            if (userData !== null) {//comprueba si la variable user es null
                const parsedUserData = JSON.parse(userData);
                if (email === parsedUserData.email) {//comprueba si hay un correo o usario igual
                    alert('El correo electrónico ya ha sido registrado');
                    return

                }
            }
            // Crea un objeto de usuario con los datos del formulario
            const newUser = {
                email: email,
                password: password,
                type: 'type 1',

            };
            // Guarda los datos del usuario en AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(newUser));
            navigation.navigate('trabajador');//Cambia a la pantalla de trabajador 
            alert('Register Succesful');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>

            <View style={styles.contenedorImg}><Image style={styles.logo} source={capufeLogo} /></View>{/* contenedor del logo */}

            <Text style={styles.txtTitulo}>TRABAJADOR</Text>

            <View style={styles.contenedor}>{/* contenedor con el contenedor de inputs, boton y el text  */}

                <Text style={styles.txtTituloLog}>SIGN IN</Text>


                <View style={styles.contenedorInputs}>{/* Contenedor de inputs */}

                    <View style={styles.contenedorIn}>{/* Input Usuario*/}
                        <Text style={styles.text}>Usuario</Text>
                        <TextInput
                            placeholder="Usuario"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            value={email}
                            onChangeText={(text) => setEmail(text)} />
                    </View>


                    <View style={styles.contenedorIn}>{/* Input Contraseña*/}
                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput placeholder="Contraseña"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            value={password}
                            onChangeText={(text) => setPassword(text)
                            } />
                    </View>



                </View>



                <Boton text="Sign in" onPress={() => { handleSignUp() }} />{/* Boton Sig in*/}

            </View>



        </View>
    )

}

const SignGerencia = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSignUpGerencia = async () => {
        try {
            // Comprueba si el correo electrónico ya ha sido registrado
            const userData = await AsyncStorage.getItem('user');
            if (userData !== null) {//comprueba si la variable user es null
                const parsedUserData = JSON.parse(userData);

                if (email === parsedUserData.email) {//comprueba si hay un correo o usario igual
                    alert('El correo electrónico ya ha sido registrado');
                    return
                }
            }
            // Crea un objeto de usuario con los datos del formulario
            const newUser = {
                email: email,
                password: password,
                type: 'type 2',

            };
            // Guarda los datos del usuario en AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(newUser));
            navigation.navigate('gerencia');//Cambia a la pantalla de trabajador 
            alert('Register Succesful');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>

            <View style={styles.contenedorImg}><Image style={styles.logo} source={capufeLogo} /></View>{/* contenedor del logo */}

            <Text style={styles.txtTitulo}>GERENCIA</Text>

            <View style={styles.contenedor}>{/* contenedor con el contenedor de inputs, boton y el text  */}

                <Text style={styles.txtTituloLog}>SIGN IN</Text>


                <View style={styles.contenedorInputs}>{/* Contenedor de inputs */}

                    <View style={styles.contenedorIn}>{/* Input Usuario*/}
                        <Text style={styles.text}>Usuario</Text>
                        <TextInput
                            placeholder="Usuario"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            value={email}
                            onChangeText={(text) => setEmail(text)} />
                    </View>


                    <View style={styles.contenedorIn}>
                        <Text style={styles.text}>Contraseña</Text>
                        <TextInput placeholder="Contraseña"
                            style={styles.inputText}
                            placeholderTextColor={'grey'}
                            value={password}
                            onChangeText={(text) => setPassword(text)
                            } />
                    </View>



                </View>



                <Boton text="Sign in" onPress={() => { handleSignUpGerencia() }} />{/* Boton Sig in*/}

            </View>



        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        alignItems: 'center',

        // justifyContent: 'center',
    },
    txtTitulo: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
        color: 'black',

    },

    contenedorImg: {
        paddingTop: 10,
        height: 209,
        width: deviceHeight,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 10,
        height: 160,
        width: 230

    },
    contenedor: {
        width: 279,
        height: 409,
        backgroundColor: '#F1EAE1',
        alignItems: 'center',

        borderRadius: 16,
        marginTop: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6
    },
    txtTituloLog: {

        marginTop: 20,
        marginBottom: 15,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: 'black',

    },

    contenedorInputs: {
        marginBottom: 50
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
    },
    contenedorIn: {
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

});

export {
    LoginTrabjador2,
    SignTrabajador2,
    SignGerencia,
    LoginGerencia
}