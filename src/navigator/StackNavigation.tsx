import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { Notifications } from '../screens/Notifications';
import { Persona } from '../screens/Persona';

export type RootStackParams = {
    Home: undefined,
    Notifications: undefined,
    Profile: undefined,
    Settings: undefined,
    Persona: { id: number, nombre: string }
}
const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerShown: false,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="Home" options={{ title: 'Home' }} component={Home} />
            <Stack.Screen name="Notifications" options={{ title: 'Notification' }} component={Notifications} />
            <Stack.Screen name="Profile" options={{ title: 'Profile' }} component={Profile} />
            <Stack.Screen name="Settings" options={{ title: 'setting' }} component={Settings} />
            <Stack.Screen name="Persona" options={{ title: 'Persona' }} component={Persona} />

        </Stack.Navigator>
    );

}
