import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Views from '../views';
import {useSelector} from 'react-redux';
import {getUser} from '~store/selectors';

const Drawer = createDrawerNavigator();
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
  const user = useSelector(getUser);

  return (
    <Drawer.Navigator
      drawerContent={props => <Views.Menu {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // drawerInactiveTintColor: active,
        // drawerActiveTintColor: '#283C64',
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Agendamentos',
          // drawerIcon: Icons.Home,
        }}
        component={Views.Schedules}
      />
      <Drawer.Screen
        name="NewSchedule"
        options={{
          drawerLabel: 'Novo Agendamento',
          // drawerIcon: Icons.Referral,
        }}
        component={NewScheduleNavigation}
      />
      {user.type === 2 && (
        <Drawer.Screen
          name="Decrease"
          options={{
            drawerLabel: 'Cadastrar abate',
            // drawerIcon: Icons.Shopper,
          }}
          component={Views.Decrease}
        />
      )}
      <Drawer.Screen
        name="Provider"
        options={{
          drawerLabel: 'Cadastrar Fornecedor',
          // drawerIcon: Icons.Supporte,
        }}
        component={Views.Provider}
      />
      <Drawer.Screen
        name="Register"
        options={{
          drawerLabel: 'Cadastrar usuário',
          // drawerIcon: Icons.Supporte,
        }}
        component={Views.Register}
      />
    </Drawer.Navigator>
  );
}

export default Component;
