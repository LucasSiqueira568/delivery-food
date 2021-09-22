import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import dos icones da tab bar
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

// import dos componentes
import Home from '../Home'
import Profiler from '../Profiler'
import Busca from '../Busca'
import Pedidos from '../Pedidos'
import Plus from '../Plus'
import Notifications from '../Notifications'

const Tab = createBottomTabNavigator(); 

export default function ProfilerUser() {
  return (
              <Tab.Navigator screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false,

                tabBarStyle: {
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 10,
                  marginHorizontal: 20,
                  height: 60,
                  borderRadius: 20,

                  shadowColor: '#000',
                  shadowOpacity: 0.06,
                  shadowOffset:  {
                    width: 10,
                    height: 10,
                  }
                }
              
              }}
              >
                  <Tab.Screen name="Home" component={Home}
                  options={{
                      tabBarIcon: ({size, focused}) => (
                        <Entypo name="home" size={size} color={focused ? 'orange' : 'grey'} />
                      )
                  }}
                  />
                  <Tab.Screen name="Busca" component={Busca}
                  options={{
                      tabBarIcon: ({size, focused}) => (
                        <Octicons name="search" size={size} color={focused ? 'orange' : 'grey'} />
                      )
                  }}
                  />
                  <Tab.Screen name="Plus" component={Plus}
                  options={{
                      tabBarIcon: ({size}) => (
                        <TouchableOpacity>
                            <View style={{
                              backgroundColor: 'orange',
                              width: 55,
                              height: 55,
                              borderRadius: 28,
                              elevation: 0,
                              bottom: 24,
                              justifyContent: 'center',
                              alignItems: 'center'
                              }}>
                            <Octicons name="plus" size={size} color="white"/>
                            </View>
                        </TouchableOpacity>
                      )
                  }}
                  />
                  <Tab.Screen name="Pedidos" component={Pedidos}
                  options={{
                      tabBarIcon: ({size, focused}) => (
                        <Feather name="book-open" size={size} color={focused ? 'orange' : 'grey'} />
                      )
                  }}
                  />
                  <Tab.Screen name="Notifications" component={Notifications} 
                   options={{
                    tabBarBadge: 3,
                    tabBarIcon: ({size, focused}) => (
                        <Feather name="bell" size={size} color={focused ? 'orange' : 'grey'} />
                    )
                }}
                  />
              </Tab.Navigator>
        //   </NavigationContainer>
  );
}
