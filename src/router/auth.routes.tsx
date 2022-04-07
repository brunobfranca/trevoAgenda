import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Views from '../views';

const Auth = createNativeStackNavigator();

function App() {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name="Login" component={Views.Login} />
      <Auth.Screen name="Register" component={Views.Register} />
    </Auth.Navigator>
  );
}

export default App;
