import React, {useState} from 'react';
import {View} from 'react-native';
import {Header, Button, Text, Separator, Row} from '~components';
import {Container, Input, Content} from './styles';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import * as Modal from '~services/modal';
import {Default} from '~modals';

const Schedule = ({navigation}) => {
  const dispatch = useDispatch();
  const [qnt, setQnt] = useState('');
  const [boi, setQuantBoi] = useState('');
  const [vaca, setQuantVaca] = useState('');
  const [date, setDate] = useState(new Date(moment().add(1, 'days')));
  const [show, setShow] = useState(false);
  // moment(new Date()).format('DD-MM-YYYY')

  const handleSubmit = () => {
    if (boi !== '0' || vaca !== '0') {
    } else {
      Modal.show(() => (
        <Default
          cancel={false}
          title="⚠️"
          description="A quantidade deve ser maior que zero!"
        />
      ));
      return 0;
    }
    if (!date) {
      Modal.show(() => (
        <Default cancel={false} title="⚠️" description="Selecione uma data!" />
      ));
      return 0;
    }
    dispatch({type: 'addAbate', payload: {qnt: qnt, date: date}});
  };

  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Cadastrar Abate"
      />
      <Content>
        <Row split>
          <Input label="QNT. VACA" onChangeText={setQuantBoi} />
          <Input label="QNT. BOI" onChangeText={setQuantVaca} />
        </Row>
        <Separator height="10" />
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
            {moment(date).format('DD-MM-YYYY')}
          </Button>
        </Row>
        <Separator height="10" />
        <DatePicker
          modal
          mode="date"
          theme="light"
          minimumDate={new Date(moment().add(1, 'days'))}
          title="Selecione uma data"
          open={show}
          date={date}
          onConfirm={dateSelected => {
            setShow(false);
            setDate(dateSelected);
          }}
          onCancel={() => {
            setShow(false);
          }}
        />
      </Content>

      <Button uppercase rect onPress={() => handleSubmit()}>
        salvar
      </Button>
    </Container>
  );
};

export default Schedule;
