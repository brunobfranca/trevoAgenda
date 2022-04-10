import React from 'react';
import {View} from 'react-native';
import database from '@react-native-firebase/database';

// import { Container } from './styles';

const Register = () => {
  const registerAdm = values => {
    database()
      .ref('users/' + values.userName + values.password)
      .set(values);
  };

  return <View />;
};

export default Register;
