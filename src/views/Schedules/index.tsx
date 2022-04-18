import React, {useEffect, useState} from 'react';
import {Header, Row, Button, Text, Separator} from '~components';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {getSchedulesAdm} from '~store/selectors';
import {Container, List, Content} from './styles';
import {Alert} from 'react-native';
import Card from './Card';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {View} from 'react-native';

const Schedules = () => {
  const dispatch = useDispatch();
  const schedules = useSelector(getSchedulesAdm);
  const [show, setShow] = useState(false);
  const [totais, setTotais] = useState(0);
  const [newArray, setNewArray] = useState();
  const [filter, setFilter] = useState(new Date(moment()));

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

  const loadSchedules = async () => {
    try {
      const res = await database()
        .ref('abate/' + moment(filter).format('DD-MM-YYYY'))
        .once('value');
      const value = res.toJSON();
      setTotais(
        Number(value.boiD) +
          Number(value.vacaD) -
          (Number(value.boi) + Number(value.vaca)),
      );
      setNewArray(
        schedules.filter(
          sched => sched.id === moment(filter).format('DD-MM-YYYY'),
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header inverted title="Agendamentos" />
      <Content>
        <Row split>
          <Text
            style={{marginTop: 15}}
            onPress={() => setShow(true)}
            color="primary">
            Escolha uma data
          </Text>
          <Button
            style={{width: '40%'}}
            uppercase
            onPress={() => setShow(true)}>
            {moment(filter).format('DD-MM-YYYY')}
          </Button>
        </Row>
        <DatePicker
          modal
          mode="date"
          theme="light"
          minimumDate={new Date(moment())}
          title="Selecione uma data"
          open={show}
          date={filter}
          onConfirm={dateSelected => {
            setShow(false);
            setFilter(dateSelected);
          }}
          onCancel={() => {
            setShow(false);
          }}
        />
        <Separator height="10" />
        {newArray && (
          <View style={{borderWidth: 1, borderRadius: 5, padding: 5}}>
            <List
              data={newArray}
              renderItem={({item}) => {
                return <Card item={item} />;
              }}
            />
          </View>
        )}
        <Separator height="5" />
        {newArray && (
          <Text center color="primary">
            Total : {totais} cabeças
          </Text>
        )}
      </Content>
      <Button onPress={() => loadSchedules()} rect>
        Consultar
      </Button>
    </Container>
  );
};

export default Schedules;
