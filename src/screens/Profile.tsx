import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props extends StackScreenProps<any, any> { };
export const Profile = ({ navigation }: Props) => {
    return (
        <View>
            <Text>Home Page</Text>
            <Button
                title='ir a Pagina '
                onPress={() => navigation.navigate('Notifications')}
            />
        </View>
    );
}

