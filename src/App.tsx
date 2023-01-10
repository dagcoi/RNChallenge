import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screen/Login';
import HomeScreen from './screen/HomeScreen';
import Setting from './screen/Setting';
var MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function App() {

    const navigationRef = useRef(null as any)
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            {/* <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Home'} component={HomeScreen} />
            </Stack.Navigator> */}
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>


        </NavigationContainer>
    );
}


export default App;