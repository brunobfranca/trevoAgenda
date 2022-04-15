import React from 'react';
import {Text, Separator} from '~components';

import {Container} from './styles';

const Card = ({item}) => {
  return (
    <Container>
      <Text color="primary">Data Agendamento: {item.id}</Text>
      <Separator height="10" />
      <Text color="primary">Nome Cliente: {item.nameClient}</Text>
      <Separator height="10" />
      <Text color="primary">
        Quantidade: {Number(item.boiQ) + Number(item.vacaQ)} cabeças
      </Text>
    </Container>
  );
};

export default Card;
