import React from 'react';
import {Header, Text, Button, Row, Divider} from '~components';
import * as Modal from '~services/modal';
import {Schedule as Schell} from '~modals';

import {Container, Content} from './styles';

const Schedule = ({navigation}) => {
  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Novo Agendamento"
      />
      <Divider style={{height: 4, marginBottom: 10}} />
      <Text size="large" color="primary">
        Quando deseja agendar
      </Text>
      <Divider style={{height: 10, marginBottom: 10}} />
      <Content>
        <Row split>
          <Button
            rect
            style={{width: '40%'}}
            onPress={() =>
              Modal.show(() => <Schell title="Amanhã" isTomorrow />)
            }>
            Amanhã
          </Button>
          <Button
            rect
            style={{width: '40%'}}
            onPress={() => Modal.show(() => <Schell title="Escolha 1 data" />)}>
            Escolher o dia
          </Button>
        </Row>
      </Content>
    </Container>
  );
};

export default Schedule;
