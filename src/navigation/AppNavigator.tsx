// import { createAppContainer } from 'react-navigation'
import React from 'react';
import analytics from '@react-native-firebase/analytics'
import * as Sentry from '@sentry/react-native'
import { NavigationContainer, useNavigationContainerRef, Route } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator'

const navigationRef = useNavigationContainerRef();
const routeNameRef = React.useRef<Route<string>>();

const setCurrentRoute = () => {
    const current_route = navigationRef.getCurrentRoute()
    if (current_route == undefined)
        return;

    routeNameRef.current = current_route;
}

const onNavigationStateChange = () => {
    const current_route = navigationRef.getCurrentRoute()

    if (routeNameRef.current == undefined) return;
    if (current_route == undefined) return;

    const { name: prevScreen, params: prevParams } = routeNameRef.current;
    const { name: currentScreen, params: currentParams } = current_route;

    if (prevScreen != currentScreen) {
        if (!__DEV__) {
            analytics().logScreenView({
                screen_class: currentScreen,
                screen_name: currentScreen,
            })
        }

        Sentry.addBreadcrumb({
            category: 'screen',
            message: `From: ${prevScreen} To: ${currentScreen}`,
            data: {
                prevRoute: { prevScreen, prevParams },
                currentRoute: { currentScreen, currentParams },
            },
        })
    }
}

function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef} onReady={setCurrentRoute} onStateChange={onNavigationStateChange}>
            <MainStackNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;

// export default createAppContainer(MainStackNavigator)