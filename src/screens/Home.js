import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home(props) {

    const { navigation } = props;

    return (
        <View>
            <Text>Home...</Text>
            <Button
                title="Ir a About"
                onPress={() => navigation.navigate("about")}
            />
            <Button
                title="Ir a Contact"
                onPress={() => navigation.navigate("contact")}
            />
            <Button
                title="Ir a Courses"
                onPress={() => navigation.navigate("contact", { screen: "courses" })}
            />
        </View>
    );
};
