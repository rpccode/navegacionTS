import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigation';
interface RouterParams {
    id: Number,
    nombre: string
}
interface Props extends StackScreenProps<RootStackParams,> { }

export const Persona = ({ route }: Props) => {
    const params = route.params as RouterParams;
    return (
        <View>
            <Text></Text>
        </View>
    );
};

