import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Text, Button} from '~components';
import {getClients} from '~store/selectors';
import {Creators} from '~store/reducers';
import database from '@react-native-firebase/database';
import {Picker} from '@react-native-picker/picker';
import {Container, Content, Input} from './styles';

const DetailsNewSchedule = ({navigation, route}) => {
  const [quant, setQuant] = useState(0);
  const [client, setClient] = useState({});
  const clients = useSelector(getClients);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (quant > item.qnt) {
      Alert.alert('Quantidade digitada maior que a quantidade disponível!!');
      return;
    }
    if (quant == 0) {
      Alert.alert('Quantidade deve ser maior que 0!!');
      return;
    }
    dispatch({
      type: 'schedules',
      payload: {
        quant: quant,
        client: client,
        date: item.id,
        availability: item.qnt,
      },
    });
    // dispatch({type: 'addAbate', payload: {quant: qnt - quant, id: id}});
  };
  const {item} = route.params;
  return (
    <Container>
      <Header inverted onPress={() => navigation.goBack()} title="Detalhes" />
      <Content>
        <Picker
          selectedValue={client}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => setClient(itemValue)}>
          <Picker.Item label="Escolha 1 fornecedor" value={-1} />
          {clients.map(i => {
            return <Picker.Item label={i.name} value={i} />;
          })}
        </Picker>
        <Text style={{marginLeft: 10}} size="large" color="primary">
          Quantidade disponível: {item.qnt}
        </Text>
        <Text style={{marginLeft: 10}} size="large" color="primary">
          Quantidade disponível: {item.qnt}
        </Text>
        <Input label="Quantidade" onChangeText={setQuant} />
      </Content>
      <Button rect onPress={() => handleSubmit()}>
        Agendar
      </Button>
    </Container>
  );
};

export default DetailsNewSchedule;
