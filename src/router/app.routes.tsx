import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Views from '../views';

const Auth = createNativeStackNavigator();

function App() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Home" component={Views.Home} />
      <Auth.Screen name="Schedule" component={Views.Schedule} />
      <Auth.Screen name="NewSchedule" component={Views.NewSchedule} />
    </Auth.Navigator>
  );
}

export default App;
