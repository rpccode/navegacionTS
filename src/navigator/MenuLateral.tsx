import React from 'react';

import { DrawerContentComponentProps, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import { SettingScreens } from '../screens/SettingScreens';
import { Image, View, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: false,  // Oculta la hamburguesa
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={(props) => <MenuInterno />}
        >
            <Drawer.Screen name="StackNavigator" options={{
                title: 'Home',
            }} component={StackNavigation} />
            <Drawer.Screen name="Article" options={{
                title: 'Setting',
            }} component={SettingScreens} />
        </Drawer.Navigator>
    );
};


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (

        <DrawerContentScrollView >
            <View style={styles.AvatarConatiner}>
                <Image source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                }}
                    style={styles.Avatar}
                />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuBotton}
                    onPress={() => navigation.navigate('StackNavigation')}
                >
                    <Text style={styles.menuTexto}>
                        Navegacion Principal
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBotton}
                    onPress={() => navigation.navigate('Setting')}
                >
                    <Text style={styles.menuTexto}>
                        Navegacion Principal
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
