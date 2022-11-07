import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Loading from '@screens/Loading';
import Main from './main';
import Profile from '@screens/Profile';
const RootStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName="Loading">
        <RootStack.Screen
          name="Loading"
          component={Loading}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
