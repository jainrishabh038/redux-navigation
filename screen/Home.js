
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShowData from '../ShowData';
import { store } from '../redux/Store';
import Page1 from '../Page1';

function Home() {
const Stack = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ShowData" component={ShowData} />
          <Stack.Screen name="Page1" component={Page1} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default Home