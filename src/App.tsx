import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

    const navigationRef = useRef(null as any)

    // const handleStateChange = async () => {
    //     let currentRouteName = ''
    //     if (navigationRef.current) {
    //         const current: any = navigationRef.current
    //         currentRouteName = current.getCurrentRoute().name;
    //         dispatch({
    //             type: LOCAL_NAVIGATION_SET,
    //             payload: current
    //         })
    //         dispatch({
    //             type: LOCAL_CURRENT_ROUTE_NAME_SET,
    //             payload: currentRouteName
    //         })
    //     }
    // }
    return (
        <NavigationContainer
            ref={navigationRef}
        // onStateChange={handleStateChange}
        >


        </NavigationContainer>
    );
}