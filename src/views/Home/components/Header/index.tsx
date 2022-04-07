import React from 'react';
import {Text} from '~components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container, BackButton} from './styles';

interface IHeader {
  title?: string;
  inverted?: boolean;
  onPress?: any;
}

const Header = (props: IHeader) => {
  const navigation = useNavigation();
  const color = props.inverted ? '#F0F0EB' : '#283C64';
  const textColor = props.inverted ? 'background' : 'secondary';
  return (
    <Container inverted={props.inverted}>
      <BackButton
        onPress={() =>
          props.onPress
            ? props.onPress()
            : navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              })
        }>
        <Icon name="bars" size={25} color={color} />
      </BackButton>
      <Text size="medium" color={textColor}>
        {props.title}
      </Text>
    </Container>
  );
};

export default Header;
