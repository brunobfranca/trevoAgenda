import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Views from '../views';
import * as Icons from './assets';

const Drawer = createDrawerNavigator();
const Home = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Home.Screen name="HomeScreen" component={Views.Home} />
    </Home.Navigator>
  );
}

function Component() {
  const inactive = '#00CDCD';
  const active = '#F0F0EB';
  return (
    <Drawer.Navigator
      drawerContent={props => <Views.Menu {...props} />}
      initialRouteName="Home"
      minSwipeDistance={10000}
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: active,
        drawerActiveTintColor: active,
      }}
      drawerStyle={{width: '70%', maxWidth: 500}}
      edgeWidth={0}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          drawerIcon: Icons.Home,
        }}
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
}

export default Component;
