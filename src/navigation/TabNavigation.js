import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuTrabjador from "../screens/menuTrabjador";
import MenuGerencia from "../screens/menuGerencia";
import MenuForm from "../screens/menuForm";
import MenuGraf from "../screens/menuGraficas";
import Ionicons from "react-native-vector-icons/Ionicons"
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

const TabArr = [//Componentes de la barra de navegacion de Trabajadores
    { route: "HomeTab", component: MenuTrabjador, nameIcon: 'home', size: 30 },
    { route: "MenFormulario", component: MenuForm, nameIcon: 'clipboard', size: 30 },
    { route: "Profile", component: Profile, nameIcon: 'person-circle', size: 30 },

];

const GenArr = [ //Componentes de la barra de navegacion de gerencia 
    { route: "HomeGen", component: MenuGerencia, nameIcon: 'home', size: 30 },
    { route: "MenFormulario", component: MenuForm, nameIcon: 'clipboard', size: 30 },
    { route: "MenGraficas", component: MenuGraf, nameIcon: 'bar-chart', size: 30 },
    { route: "Profile", component: Profile, nameIcon: 'person-circle', size: 30 },



];

//Barra de navegacion de Trabajadores
const HomeScreenTrabajador = () => {
    return (
        <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ tabBarActiveTintColor: '#A42145', tabBarStyle: { backgroundColor: '#F1EAE1' }, tabBarShowLabel: false, }} >
            {TabArr.map((item, index) => {//map para recorrer el array llamado TabArr que contiene los elementos de cada pestaña y devuelve un componente de pestaña para cada elemento. 
                return (<Tab.Screen name={item.route} component={item.component} options={{
                    tabBarIcon: () => (
                        <Ionicons name={item.nameIcon} size={item.size} style={{ color: 'grey' }} />
                    ), headerShown: false

                }} />);
            })}


        </Tab.Navigator>
    )

}
//Barra de navegacion de gerencia
const HomeScreenGerencia = () => {
    return (
        <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ tabBarActiveTintColor: '#A42145', tabBarStyle: { backgroundColor: '#F1EAE1' }, tabBarShowLabel: false, }} >
            {GenArr.map((item, index) => { //map para recorrer el array llamado GenArr que contiene los elementos de cada pestaña y devuelve un componente de pestaña para cada elemento.
                return (<Tab.Screen name={item.route} component={item.component} options={{
                    tabBarIcon: () => (
                        <Ionicons name={item.nameIcon} size={item.size} style={{ color: 'grey' }} />
                    ), headerShown: false

                }} />);
            })}


        </Tab.Navigator>
    )

}

export { HomeScreenTrabajador, HomeScreenGerencia };