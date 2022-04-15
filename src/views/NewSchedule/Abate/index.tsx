import React from 'react';
// import {View} from 'react-native';
import {Text, Separator} from '~components';
// import * as modal from '~services/modal';
// import {Schedule} from '~modals';

import {Container} from './styles';

const Abate = ({item, navigation}) => {
  //modal.show(() => <Schedule qnt={item.qnt} id={item.id} />
  return (
    <Container onPress={() => navigation.navigate('Details', {item})}>
      <Text size="large" color="primary">
        Data: {item.id}
      </Text>
      <Separator height="5" />
      <Text size="large" color="primary">
        Quantidade Disponível: {Number(item.boi) + Number(item.vaca)}
      </Text>
    </Container>
  );
};

export default Abate;
