import React, {useCallback} from 'react';
import {Text, Divider} from '~components';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Container, Logout} from './styles';
import {Header} from './components';
import {useDispatch} from 'react-redux';
import {Creators} from '~store/reducers';

const Menu = props => {
  const dispatch = useDispatch();

  const LogOut = useCallback(
    () => dispatch(Creators.logout.request({})),
    [dispatch],
  );

  return (
    <Container>
      <Header navigation={props.navigation} />
      <Divider style={{height: 1, marginBottom: 10}} color="#283C64" />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} itemStyle={{borderBottomWidth: 0.4}} />
      </DrawerContentScrollView>
      <Divider style={{height: 1, marginBottom: 10}} color="#283C64" />
      <Logout onPress={LogOut}>
        <Text size="medium" color="primary" style={{marginLeft: 20}}>
          Sair
        </Text>
      </Logout>
    </Container>
  );
};

export default Menu;
