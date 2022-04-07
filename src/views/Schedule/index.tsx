import React from 'react';
import {View} from 'react-native';
import {Header, Text, Button, Row, Divider} from '~components';
import * as Modal from '~services/modal';
import {Schedule as Schell} from '~modals';
import Card from './Card';
import {Container, Content} from './styles';

const Schedule = ({navigation}) => {
  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Agendamentos"
      />
      <Card />
      <Divider style={{height: 4, marginBottom: 10}} />
    </Container>
  );
};

export default Schedule;
