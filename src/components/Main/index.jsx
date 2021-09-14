import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import Home from '../Home'
import Profiler from '../Profiler'
import Busca from '../Busca'
import Pedidos from '../Pedidos'

const Tab = createBottomTabNavigator(); 

export default function ProfilerUser() {
  return (
        //   <NavigationContainer>
              <Tab.Navigator screenOptions={{ headerShown: false }}
              >
                  <Tab.Screen name="Home" component={Home}
                  options={{
                      tabBarIcon: ({size, color}) => (
                        <Entypo name="home" size={size} color={color} />
                      )
                  }}
                  />
                  <Tab.Screen name="Busca" component={Busca}
                  options={{
                      tabBarIcon: ({size, color}) => (
                        <Octicons name="search" size={size} color={color} />
                      )
                  }}
                  />
                  <Tab.Screen name="Pedidos" component={Pedidos}
                  options={{
                      tabBarIcon: ({size, color}) => (
                        <Feather name="book-open" size={size} color={color} />
                      )
                  }}
                  />
                  <Tab.Screen name="Peril" component={Profiler} 
                   options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
                  />
              </Tab.Navigator>
        //   </NavigationContainer>
  );
}
