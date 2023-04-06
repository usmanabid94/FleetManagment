/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './NavigationService';
import Dashboard from '../Components/Dashboard';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent';
const Router = () => {
    const MainDrawer = createDrawerNavigator();
    const MainStack = createStackNavigator();

    const MainDrawerScreens = () => (
        <MainDrawer.Navigator drawerContent={(props) => <DrawerContent  {...props} />}>
            <MainDrawer.Screen name="mainStack" component={MainStackScreens} options={{ headerShown: false, swipeEnabled: true }} />
        </MainDrawer.Navigator>
    );
    const MainStackScreens = () => (
        <MainStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <MainDrawer.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
            <MainDrawer.Screen name="dashboard2" component={Dashboard} options={{ headerShown: false }} />
            <MainDrawer.Screen name="dashboard3" component={Dashboard} options={{ headerShown: false }} />

        </MainStack.Navigator>
    );
  return (
        <NavigationContainer
            ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef)}}>
            <MainDrawerScreens />
        </NavigationContainer>
    );
};

export default Router;
