import React, {useEffect} from 'react';
import {Header, Text, Divider, Separator} from '~components';
import database from '@react-native-firebase/database';
import {Creators} from '~store/reducers/';
import {useDispatch, useSelector} from 'react-redux';
import {getAbates} from '~store/selectors';
import Abate from './Abate';

import {Container, Content, List} from './styles';

const Schedule = ({navigation}) => {
  const dispatch = useDispatch();

  const abates = useSelector(getAbates);

  useEffect(() => {
    dispatch(Creators.clients.list.request({}));
  }, [dispatch]);

  useEffect(() => {
    try {
      database()
        .ref('abate')
        .on('value', () => {
          dispatch({type: 'loadAbates'});
        });
    } catch (error) {
      alert('erro ao buscar dados');
    }
  }, [dispatch]);

  return (
    <Container>
      <Header inverted title="Novo Agendamento" />
      <Separator height="10" />
      <Text center size="large" color="primary">
        Datas Disponíveis
      </Text>
      <Separator height="5" />
      <List
        data={abates}
        renderItem={({item}) => {
          return (
            <>{item.qnt > 0 && <Abate item={item} navigation={navigation} />}</>
          );
        }}
      />
      <Divider style={{height: 10, marginBottom: 10}} />
      <Content />
    </Container>
  );
};

export default Schedule;
