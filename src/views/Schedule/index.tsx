import React, {useEffect} from 'react';
import {Header, Divider} from '~components';
import Card from './Card';
import {Container, List} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import {getSchedules} from '~store/selectors';

const Schedule = ({navigation}) => {
  const dispatch = useDispatch();
  const schedules = useSelector(getSchedules);

  useEffect(() => {
    try {
      database()
        .ref('schedules/')
        .on('value', () => {
          dispatch({type: 'loadSchedules'});
        });
    } catch (error) {
      alert('erro ao buscar dados');
    }
  }, []);

  console.log(schedules);

  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Agendamentos"
      />
      <List data={schedules} renderItem={({item}) => <Card />} />
      <Divider style={{height: 4, marginBottom: 10}} />
    </Container>
  );
};

export default Schedule;
