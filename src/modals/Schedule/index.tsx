import React, {useContext, useState} from 'react';
import {CancelTouchArea, CancelText, Container, Input} from './styles';
import {Store, IModal} from '~components/Modal';
import {Text, Button} from '~components';
import {Alert} from 'react-native';
import * as modal from '~services/modal';
import {Default} from '~modals';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '~store/selectors';
interface IDefaultModal {
  isTomorrow?: boolean;
  id: string;
  cancel?: boolean;
  qnt: number;
}

export default function Component({qnt, id, cancel = true}: IDefaultModal) {
  const {close} = useContext<IModal>(Store);
  const [quant, setQuant] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const client = user.id;

  const handleSubmit = () => {
    if (quant > qnt) {
      Alert.alert('Quantidade digitada maior que a quantidade disponível!!');
      return;
    }
    if (quant == 0) {
      Alert.alert('Quantidade deve ser maior que 0!!');
      return;
    }
    dispatch({
      type: 'schedules',
      payload: {quant: quant, client: client, date: id, availability: qnt},
    });
    // dispatch({type: 'addAbate', payload: {quant: qnt - quant, id: id}});
  };

  return (
    <Container>
      <Text size="large" color="primary">
        Quantidade disponível: {qnt}
      </Text>
      <Input label="Quantidade" onChangeText={setQuant} />
      <Button onPress={() => handleSubmit()}>Agendar</Button>
      {cancel && (
        <CancelTouchArea onPress={close}>
          <CancelText>Cancelar</CancelText>
        </CancelTouchArea>
      )}
    </Container>
  );
}
