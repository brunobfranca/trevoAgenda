import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Views from '../views';

const App = createNativeStackNavigator();
const NewScheduleNav = createNativeStackNavigator();

function NewScheduleNavigation() {
  return (
    <NewScheduleNav.Navigator screenOptions={{headerShown: false}}>
      <NewScheduleNav.Screen name="NewSchedule" component={Views.NewSchedule} />
      <NewScheduleNav.Screen
        name="Details"
        component={Views.DetailsNewSchedule}
      />
    </NewScheduleNav.Navigator>
  );
}

function Component() {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="Home" component={Views.Home} />
      <App.Screen name="Schedules" component={Views.Schedules} />
      <App.Screen name="NewSchedule" component={NewScheduleNavigation} />
      <App.Screen name="Decrease" component={Views.Decrease} />
      <App.Screen name="Provider" component={Views.Provider} />
      <App.Screen name="Register" component={Views.Register} />
    </App.Navigator>
  );
}

export default Component;
