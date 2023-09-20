import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button, useWindowDimensions } from 'react-native';
import { styles } from '../theme/AppTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { }



export const Home = ({ navigation }: Props) => {


    useEffect(() => {
        navigation.setOptions({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => (
                <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
            ),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Home Page</Text>
            <Button
                title='ir a Pagina '
                onPress={() => navigation.navigate('Notifications')}
            />
        </View>
    );
};

// const styles = StyleSheet.create({

// });
