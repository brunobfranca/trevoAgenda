import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Views from '../views';

const App = createNativeStackNavigator();

function Component() {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="Home" component={Views.Home} />
      <App.Screen name="Schedule" component={Views.Schedule} />
      <App.Screen name="NewSchedule" component={Views.NewSchedule} />
    </App.Navigator>
  );
}

export default Component;
