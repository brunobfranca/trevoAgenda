import React from 'react';
import {Text} from '~components';
import {Header} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {Creators} from '~store/reducers';
import {Button, Container, Content} from './styles';
import {getUser} from '~store/selectors';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

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
        <Button onPress={() => navigation.navigate('NewSchedule')}>
          <Text size="extraLarge">Novo Agendamento</Text>
        </Button>
        {user.type === 2 && (
          <Button onPress={() => navigation.navigate('Decrease')}>
            <Text size="extraLarge">Cadastrar abate</Text>
          </Button>
        )}
        <Button onPress={() => navigation.navigate('Provider')}>
          <Text size="extraLarge">Cadastrar Fornecedor</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Register')}>
          <Text size="extraLarge">Criar usuario</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
