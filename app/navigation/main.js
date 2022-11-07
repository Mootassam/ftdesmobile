import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
import Home from '@screens/Home';
import Profile from '@screens/Profile';
export default function Main() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        //         activeTintColor: colors.primary,
        //         inactiveTintColor: BaseColor.grayColor,
        style: {borderTopWidth: 1},
        //         labelStyle: {
        //           fontSize: 12,
        //           fontFamily: font,
        //         },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: Home,
          //           tabBarIcon: ({color}) => {
          //             return <Icon color={color} name="home" size={20} solid />;
          //           },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: Profile,
          //           tabBarIcon: ({color}) => {
          //             return <Icon color={color} name="home" size={20} solid />;
          //           },
        }}
      />
    </BottomTab.Navigator>
  );
}
