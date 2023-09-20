import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/AppTheme';

export const SettingScreens = () => {

    const inset = useSafeAreaInsets()
    return (
        <View style={{ ...styles.globalMargin, marginTop: inset.top }}>
            <Text style={styles.title}>Setting Screens</Text>
        </View>
    );
};

