import React from 'react';
import {Text} from '~components';
import {Container, ViewLogo, Logo, Close} from './styles';

const Header = ({navigation}) => {
  return (
    <Container>
      <ViewLogo>
        <Logo source={require('~images/logo.jpeg')} />
        <Close onPress={() => navigation.closeDrawer()}>
          <Text color="primary" size="large" bold>
            X
          </Text>
        </Close>
      </ViewLogo>
    </Container>
  );
};

export default Header;
