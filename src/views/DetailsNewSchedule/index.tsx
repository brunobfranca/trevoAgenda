import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Text, Button, Row, Separator} from '~components';
import {getClients} from '~store/selectors';
import {Picker} from '@react-native-picker/picker';
import {Container, Content, Input} from './styles';

const DetailsNewSchedule = ({navigation, route}) => {
  const {item} = route.params;
  const [boi, setQuantBoi] = useState(0);
  const [vaca, setQuantVaca] = useState(0);
  const [client, setClient] = useState<any>(-1);
  const clients = useSelector(getClients);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(client === {});
    if (client === -1) {
      Alert.alert('Escolha um fornecedor');
      return;
    }
    if (boi > item.boi || vaca > item.vaca) {
      Alert.alert('Quantidade digitada maior que a quantidade disponível!!');
      return;
    }
    if (boi == 0 && vaca == 0) {
      Alert.alert('Quantidade deve ser maior que 0!!');
      return;
    }
    dispatch({
      type: 'schedules',
      payload: {
        client: client,
        boi,
        vaca,
        date: item.id,
        boiq: item.boi,
        vacaq: item.vaca,
        navigation: navigation,
      },
    });
    // dispatch({type: 'addAbate', payload: {quant: qnt - quant, id: id}});
  };
  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Detalhes"
        isDrawer
      />
      <Content>
        <Picker
          selectedValue={client}
          mode="dropdown"
          onValueChange={itemValue => setClient(itemValue)}>
          <Picker.Item label="Escolha 1 fornecedor" value={-1} />
          {clients.map(i => {
            return <Picker.Item label={i.name} value={i} />;
          })}
        </Picker>
        <Row split>
          <Text style={{marginLeft: 10}} size="large" color="primary">
            Quantidade disponível:
          </Text>
          <View>
            <Text style={{marginLeft: 10}} size="medium" color="primary">
              BOI : {'  '}
              {item.boi}
            </Text>
            <Text style={{marginLeft: 10}} size="medium" color="primary">
              VACA: {item.vaca}
            </Text>
          </View>
        </Row>
        <Separator height="20" />
        <Text style={{marginLeft: 10}} size="medium" color="primary">
          Digite a quantidade desejada:
        </Text>
        <Row split>
          <Input label="QNT. VACA" onChangeText={setQuantVaca} />
          <Input label="QNT. BOI" onChangeText={setQuantBoi} />
        </Row>
      </Content>
      <Button rect onPress={() => handleSubmit()}>
        Agendar
      </Button>
    </Container>
  );
};

export default DetailsNewSchedule;
