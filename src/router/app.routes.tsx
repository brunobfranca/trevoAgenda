import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Views from '../views';
import * as ProvidersView from '../views/Provider';
import {useSelector} from 'react-redux';
import {getUser} from '~store/selectors';

const Drawer = createDrawerNavigator();
const NewScheduleNav = createNativeStackNavigator();
const ProviderNav = createNativeStackNavigator();

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
function ProviderNavigation() {
  return (
    <ProviderNav.Navigator screenOptions={{headerShown: false}}>
      <ProviderNav.Screen name="Providers" component={ProvidersView.Home} />
      <ProviderNav.Screen
        name="ProviderRegister"
        component={ProvidersView.Register}
      />
    </ProviderNav.Navigator>
  );
}
function Component() {
  const user = useSelector(getUser);

  return (
    <Drawer.Navigator
      detachInactiveScreens={false}
      drawerContent={props => <Views.Menu {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        unmountOnBlur: true,
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Agendamentos',
        }}
        component={Views.Schedules}
      />
      <Drawer.Screen
        name="NewSchedule"
        options={{
          drawerLabel: 'Novo Agendamento',
        }}
        component={NewScheduleNavigation}
      />
      <Drawer.Screen
        name="Provider"
        options={{
          drawerLabel: 'Fornecedores',
        }}
        component={ProviderNavigation}
      />
      {user.type === 2 && (
        <Drawer.Screen
          name="Decrease"
          options={{
            drawerLabel: 'Cadastrar abate',
          }}
          component={Views.Decrease}
        />
      )}
      <Drawer.Screen
        name="Register"
        options={{
          drawerLabel: 'Cadastrar usuário',
        }}
        component={Views.Register}
      />
    </Drawer.Navigator>
  );
}

export default Component;
