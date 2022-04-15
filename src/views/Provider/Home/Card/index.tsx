import React from 'react';
import {Text, Separator, Row} from '~components';

import {Container} from './styles';

const Card = ({item, navigation}) => {
  return (
    <Container onPress={() => navigation.navigate('ProviderRegister', {item})}>
      <Row split>
        <Text color="primary">Fornecedor: {item.name}</Text>
        <Separator height="10" />
        <Text color="primary">Fazenda: {item.farmName}</Text>
        <Separator height="10" />
      </Row>
      <Separator height="10" />
      <Row split>
        <Text color="primary">Municipio: {item.cityFarmName}</Text>
        <Separator height="10" />
        <Text color="primary">Estado: {item.stateFarmName}</Text>
        <Separator height="10" />
      </Row>
      <Separator height="10" />
      <Text color="primary">Inscrição estadual: {item.inscricao}</Text>
    </Container>
  );
};

export default Card;
