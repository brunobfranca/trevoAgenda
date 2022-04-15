import React, {useEffect} from 'react';
import {Header} from '~components';
import {getClients} from '~store/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {Creators} from '~store/reducers';
import Card from './Card';

import {Container, List} from './styles';

const Home = ({navigation}) => {
  const clients = useSelector(getClients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Creators.clients.list.request({}));
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
