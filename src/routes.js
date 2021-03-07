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


        <Stack.Screen 
                    name="Investimentos" 
                    component={Investimentos} 
                    options={{
                      title: 'Resgate',
                      headerStyle: {
                        backgroundColor: '#005aa5',
                        borderBottomWidth: 5,
                        borderBottomColor: '#fae128'
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },

                    }}
                    />
        <Stack.Screen 
                      name="Resgate" 
                      component={Resgate} 
                      options={{
                        title: 'Resgate',
                        headerStyle: {
                          backgroundColor: '#005aa5',
                          borderBottomWidth: 5,
                          borderBottomColor: '#fae128'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
  
                      }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
