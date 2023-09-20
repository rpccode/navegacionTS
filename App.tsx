
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigator/StackNavigation';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
    return (
        <NavigationContainer>

            <StackNavigation />
            {/* <MenuLateralBasico /> */}
        </NavigationContainer>


    );
};

export default App;
