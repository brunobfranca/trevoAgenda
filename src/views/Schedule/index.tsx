import React from 'react';
import {View} from 'react-native';
import {Header} from '~components';

// import { Container } from './styles';

const Schedule = ({navigation}) => {
  return (
    <View>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Novo Agendamento"
      />
    </View>
  );
};

export default Schedule;
