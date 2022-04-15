import React, {useEffect} from 'react';
import {Header} from '~components';
import {getClients} from '~store/selectors';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from '~store/reducers';
import Card from './Card';
import database from '@react-native-firebase/database';

import {Container, List} from './styles';

const Home = ({navigation}) => {
  const clients = useSelector(getClients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Creators.clients.list.request({}));
  }, [dispatch]);

  useEffect(() => {
    try {
      database()
        .ref('abate')
        .on('value', () => {
          dispatch(Creators.clients.list.request({}));
        });
    } catch (error) {
      Alert.alert('erro ao buscar dados');
    }
  }, [dispatch]);
  return (
    <Container>
      <Header inverted title="Fornecedores" isAdd />
      <List
        data={clients}
        renderItem={({item}) => {
          return <Card item={item} navigation={navigation} />;
        }}
      />
    </Container>
  );
};

export default Home;
