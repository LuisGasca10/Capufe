/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,

} from 'react-native';

import FormularioEludidos from './src/screens/formularios/FormularioAforo';


import { MainNavigation } from './src/navigation/MainNavigation';
import GraficasAforo from './src/screens/graficas/GraficasAforo';



const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation />


    </SafeAreaView>


  );
}




export default App;