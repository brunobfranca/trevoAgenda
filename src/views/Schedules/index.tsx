import React, {useEffect} from 'react';
import {Header} from '~components';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {getSchedulesAdm} from '~store/selectors';
import {Container, List} from './styles';
import {Alert} from 'react-native';
import Card from './Card';
import moment from 'moment';

const Schedules = () => {
  const dispatch = useDispatch();
  const schedules = useSelector(getSchedulesAdm);

  useEffect(() => {
    try {
      database()
        .ref('schedules/')
        .on('value', () => {
          dispatch({type: 'loadSchedulesAdm'});
        });
    } catch (error) {
      Alert.alert('erro ao buscar dados');
    }
  }, [dispatch]);

  return (
    <Container>
      <Header inverted title="Agendamentos" />
      <List
        data={schedules}
        renderItem={({item}) => {
          return (
            item.id > moment().format('DD-MM-YYYY') && <Card item={item} />
          );
        }}
      />
    </Container>
  );
};

export default Schedules;
