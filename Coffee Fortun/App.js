import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import kisi_1 from './src/pages/others_pages/kisilerbolumu/kisi_1';
import kisi_2 from './src/pages/others_pages/kisilerbolumu/kisi_2';
import kisi_3 from './src/pages/others_pages/kisilerbolumu/kisi_3';
import kisi_4 from './src/pages/others_pages/kisilerbolumu/kisi_4';
import kisi_5 from './src/pages/others_pages/kisilerbolumu/kisi_5';
import kisi_6 from './src/pages/others_pages/kisilerbolumu/kisi_6';
import kisi_7 from './src/pages/others_pages/kisilerbolumu/kisi_7';
import kisi_8 from './src/pages/others_pages/kisilerbolumu/kisi_8';

import yuz from './src/pages/others_pages/falbolumu/yuz';
import el from './src/pages/others_pages/falbolumu/el';
import kahve from './src/pages/others_pages/falbolumu/kahve';
import tarot from './src/pages/others_pages/falbolumu/tarot';

import ruya from './src/pages/others_pages/falbolumu/ruya';
import burc from './src/pages/others_pages/falbolumu/burc';

import sf1 from './/src/pages/main_pages/sf1';
import sf2 from './src/pages/main_pages/sf2';
import sf3 from './src/pages/main_pages/sf3';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="sf1" component={sf1} />
    <Tab.Screen name="sf2" component={sf2} />
    <Tab.Screen name="sf3" component={sf3} />
  </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        
          <Stack.Screen   name="tabs"  component={MyTabs}  />
  
          <Stack.Screen   name="kisi_1"  component={kisi_1}  />
          <Stack.Screen   name="kisi_2"  component={kisi_2}  />
          <Stack.Screen   name="kisi_3"  component={kisi_3}  />
          <Stack.Screen   name="kisi_4"  component={kisi_4}  />
          <Stack.Screen   name="kisi_5"  component={kisi_5}  />
          <Stack.Screen   name="kisi_6"  component={kisi_6}  />
          <Stack.Screen   name="kisi_7"  component={kisi_7}  />
          <Stack.Screen   name="kisi_8"  component={kisi_8}  />
  
          <Stack.Screen   name="yuz"  component={yuz}  />
          <Stack.Screen   name="el"  component={el}  />
          <Stack.Screen   name="kahve"  component={kahve}  />
          <Stack.Screen   name="tarot"  component={tarot}  />
  
          <Stack.Screen   name="ruya"  component={ruya}  />
          <Stack.Screen   name="burc"  component={burc}  />
  
        </Stack.Navigator>
      </NavigationContainer>

    );
  }}


