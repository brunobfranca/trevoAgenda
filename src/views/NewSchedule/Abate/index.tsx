import React from 'react';
import {View} from 'react-native';
import {Text, Separator} from '~components';
import * as modal from '~services/modal';
import {Schedule} from '~modals';

import {Container} from './styles';

const Abate = ({item}) => {
  return (
    <Container
      onPress={() =>
        modal.show(() => <Schedule qnt={item.qnt} id={item.id} />)
      }>
      <Text size="large" color="primary">
        Data: {item.id}
      </Text>
      <Separator height="5" />
      <Text size="large" color="primary">
        Quantidade Disponível: {item.qnt}
      </Text>
    </Container>
  );
};

export default Abate;
