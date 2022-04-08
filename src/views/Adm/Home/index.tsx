import React from 'react';
import {Text} from '~components';
import {Header} from './components';
import {useDispatch} from 'react-redux';
import {Creators} from '~store/reducers';
import {Button, Container, Content} from './styles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header
        inverted
        onPress={() => dispatch(Creators.logout.request({}))}
        title="Home"
      />
      <Content>
        <Button onPress={() => navigation.navigate('Schedules')}>
          <Text size="extraLarge">Agendamentos</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Schedule')}>
          <Text size="extraLarge">Cadastrar abate</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Register')}>
          <Text size="extraLarge">Criar usuario</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
