import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerBoton from '../components/drawerBoton';
//PANTALLAS 
import Trabajador from '../screens/trabajador';
import capLogoBar from '../img/capufe_bar_logo.png';
import { HomeScreenTrabajador, HomeScreenGerencia } from './TabNavigation';
import Principal from '../screens/principal';
import { LoginTrabjador2, SignTrabajador2, SignGerencia, LoginGerencia } from '../screens/Auth';
import Gerencia from '../screens/gerencia';
import FormularioAforo from '../screens/formularios/FormularioAforo';
import FormularioEludidos from '../screens/formularios/FormularioEludidos';
import FormularioSiniestros from '../screens/formularios/FormularioSiniestros';



const Stack = createStackNavigator();


const MainSatckNavigator = () => {

    return (
        <Stack.Navigator >

            <Stack.Screen name='principal' component={Principal} options={{ headerShown: false }} />

            <Stack.Screen name='trabajador' component={Trabajador} options={{ headerTransparent: true, title: "", }} />

            <Stack.Screen name='gerencia' component={Gerencia} options={{ headerTransparent: true, title: "", }} />

            <Stack.Screen name='signTrabjador' component={SignTrabajador2} options={{ headerTransparent: true, title: "", }} />

            <Stack.Screen name='signGerencia' component={SignGerencia} options={{ headerTransparent: true, title: "", }} />

            <Stack.Screen name='loginTrabajador2' component={LoginTrabjador2} options={{ headerTransparent: true, title: "", }} />

            <Stack.Screen name='loginGerencia' component={LoginGerencia} options={{ headerTransparent: true, title: "", }} />

            <Stack.Screen name='menuTrabajador' component={HomeScreenTrabajador} options={{
                title: "",
                headerStyle: { backgroundColor: '#13322B' },
                headerLeft: () => <Image source={capLogoBar} style={styles.imgBar} />
            }} />

            <Stack.Screen name='menuGerencia' component={HomeScreenGerencia} options={{
                title: "",
                headerStyle: { backgroundColor: '#13322B' },
                headerLeft: () => <Image source={capLogoBar} style={styles.imgBar} />
            }} />

            <Stack.Screen name='Aforo' component={FormularioAforo} options={{
                title: "",
                headerStyle: { backgroundColor: '#13322B' },
                headerRight: () => <Image source={capLogoBar} style={styles.imgBar} />
            }} />


            <Stack.Screen name='Eludidos' component={FormularioEludidos} options={{
                title: "",
                headerStyle: { backgroundColor: '#13322B' },
                headerRight: () => <Image source={capLogoBar} style={styles.imgBar} />
            }} />

            <Stack.Screen name='Siniestros' component={FormularioSiniestros} options={{
                title: "",
                headerStyle: { backgroundColor: '#13322B' },
                headerRight: () => <Image source={capLogoBar} style={styles.imgBar} />
            }} />

        </Stack.Navigator>
    );

}

const styles = StyleSheet.create({
    imgBar: {
        width: 294,
        height: 44
    }
})
export { MainSatckNavigator };




