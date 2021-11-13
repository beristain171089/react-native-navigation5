import React from 'react';
import { Text, View, Button } from 'react-native';

export default function About(props) {

    const { navigation } = props;

    return (
        <View>
            <Text>About...</Text>
            <Button
                title="Ir a Home"
                onPress={() => navigation.navigate("home")}
            />
            <Button
                title="Ir a Contact"
                onPress={() => navigation.navigate("contact")}
            />
        </View>
    );
};