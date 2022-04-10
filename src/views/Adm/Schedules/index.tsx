import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Header} from '~components';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {getSchedulesAdm} from '~store/selectors';
import {Container, List} from './styles';
import Card from './Card';

const Schedules = ({navigation}) => {
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
      alert('erro ao buscar dados');
    }
  }, []);

  return (
    <View>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Agendamentos"
      />
      <List data={schedules} renderItem={({item}) => <Card item={item} />} />
    </View>
  );
};

export default Schedules;
