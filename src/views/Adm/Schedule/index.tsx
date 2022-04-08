import React from 'react';
import {Header, Divider} from '~components';
import Card from './Card';
import {Container} from './styles';

const Schedule = ({navigation}) => {
  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Cadastrar Abate"
      />
      <Card />
      <Divider style={{height: 4, marginBottom: 10}} />
    </Container>
  );
};

export default Schedule;
