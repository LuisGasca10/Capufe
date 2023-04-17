import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainSatckNavigator } from './StackNavigation';

const MainNavigation = () => {
    return (
        <NavigationContainer>

            <MainSatckNavigator />

        </NavigationContainer>
    );
}

export { MainNavigation }