import React, {useContext, useState} from 'react';
import {CancelTouchArea, CancelText, Container, Title, Input} from './styles';
import {Store, IModal} from '~components/Modal';
import {Text, Button} from '~components';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
interface IDefaultModal {
  title: string;
  isTomorrow?: boolean;
  cancel?: boolean;
}

export default function Component({
  title,
  isTomorrow,
  cancel = true,
}: IDefaultModal) {
  const {close} = useContext<IModal>(Store);
  const [date, setDate] = useState('');
  return (
    <Container>
      <Title>{title}</Title>
      <Text size="large" color="primary">
        Quantidade disponível: 80
      </Text>
      {!isTomorrow && (
        <DatePicker
          date={date}
          mode="date"
          placeholder="data inicial"
          format="DD/MM/YYYY"
          minDate={moment().subtract(10, 'years').format('DD/MM/YYYY')}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            setDate(date);
          }}
        />
      )}
      <Input label="Quantidade" />
      <Button onPress={() => alert('chamada para possivel api')}>
        Agendar
      </Button>
      {cancel && (
        <CancelTouchArea onPress={close}>
          <CancelText>Cancelar</CancelText>
        </CancelTouchArea>
      )}
    </Container>
  );
}
