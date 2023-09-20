import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Notifications = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'hola',
            headerBackTitle: 'Atras',
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text>Notifications</Text>
            <Button
                title="ir a Pagina "
                onPress={() => navigator.navigate('Profile')}
            />
            <Text>Navegar con argumentos </Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity
                    onPress={() => navigator.navigate('Profile')}
                    style={styles.botonGrande}
                >
                    <Text style={{
                        ...styles.botonGrandeTexto,
                    }}>Ir a Persona </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

