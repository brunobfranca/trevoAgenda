import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Views from '../views/Adm';

const Adm = createNativeStackNavigator();

function Component() {
  return (
    <Adm.Navigator screenOptions={{headerShown: false}}>
      <Adm.Screen name="Home" component={Views.Home} />
      <Adm.Screen name="Schedule" component={Views.Schedule} />
      <Adm.Screen name="Schedules" component={Views.Schedules} />
      <Adm.Screen name="Register" component={Views.Register} />
    </Adm.Navigator>
  );
}

export default Component;
