import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootReducer} from '~store/reducers';

export default function Routes() {
  const LoggedIn = useSelector((state: RootReducer) => state.user.data);
  return LoggedIn ? <AppRoutes /> : <AuthRoutes />;
}
