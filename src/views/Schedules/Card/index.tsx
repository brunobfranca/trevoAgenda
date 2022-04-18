import React from 'react';
import {View} from 'react-native';
import {Text, Separator, Row} from '~components';

import {Container} from './styles';

const Card = ({item}) => {
  console.log('>>>>>>', item);
  return (
    <Container>
      <Row split>
        <Text color="primary">{item.nameClient}</Text>
        <View>
          <Text color="primary">
            BOI : {'  '}
            {item.boiQ} cabeças
          </Text>
          <Text color="primary">VACA: {item.vacaQ} cabeças</Text>
        </View>
      </Row>
    </Container>
  );
};

export default Card;
