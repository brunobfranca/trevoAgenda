import React from 'react';
import {View} from 'react-native';
import {Header} from '~components';

// import { Container } from './styles';

const NewSchedule = ({navigation}) => {
  return (
    <View>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Meus Agendamentos"
      />
    </View>
  );
};

export default NewSchedule;
