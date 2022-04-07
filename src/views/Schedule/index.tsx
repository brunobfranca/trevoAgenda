import React from 'react';
import {View} from 'react-native';
import {Header, Text, Button, Row, Divider} from '~components';

import {Container, Content} from './styles';

const Schedule = ({navigation}) => {
  return (
    <View>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Novo Agendamento"
      />
      <Text size="large" color="primary">
        Quantidade disponível: 80
      </Text>
      <Divider style={{height: 4, marginBottom: 10}} />
      <Text size="large" color="primary">
        Quando deseja agendar
      </Text>
      <Divider style={{height: 10, marginBottom: 10}} />
      <Content>
        <Row split>
          <Button rect style={{width: '40%'}} onPress={() => alert('amanha')}>
            Amanhã{' '}
          </Button>
          <Button
            rect
            style={{width: '40%'}}
            onPress={() => alert('escolher dia')}>
            Escolher o dia{' '}
          </Button>
        </Row>
      </Content>
    </View>
  );
};

export default Schedule;
