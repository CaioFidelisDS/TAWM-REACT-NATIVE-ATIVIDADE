import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Avioes } from '../screens/Avioes';
import { TiposAvioes } from '../screens/TiposAvioes';
import { Curiosidades } from '../screens/Curiosidades';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Avioes" component={Avioes} />
      <Stack.Screen name="TiposAvioes" component={TiposAvioes} />
      <Stack.Screen name="Curiosidades" component={Curiosidades} />
    </Stack.Navigator>
  );
}
