import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screen/Login';
import HomeScreen from './screen/HomeScreen';
export default function App() {

    const navigationRef = useRef(null as any)

    const Stack = createStackNavigator()

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Home'} component={HomeScreen} />
            </Stack.Navigator>


        </NavigationContainer>
    );
}