import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Investimentos from './paginas/Investimentos';
import Resgate from './paginas/Resgate';

const Routes = () => {

const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Investimentos">


        <Stack.Screen name="Investimentos" component={Investimentos} />
        <Stack.Screen name="Resgate" component={Resgate} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
