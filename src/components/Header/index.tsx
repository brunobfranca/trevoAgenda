import React from 'react';
import {Text} from '~components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';

import {Container, BackButton} from './styles';

interface IHeader {
  title?: string;
  inverted?: boolean;
  onPress?: any;
  isAdd?: any;
  isDrawer?: boolean;
}

const Header = (props: IHeader) => {
  const navigation = useNavigation<any>();
  const color = props.inverted ? '#F0F0EB' : '#283C64';
  const textColor = props.inverted ? 'background' : 'secondary';
  return (
    <Container inverted={props.inverted}>
      <BackButton
        onPress={() =>
          props.onPress ? props.onPress() : navigation.openDrawer()
        }>
        {!props.isDrawer ? (
          <Icon name="bars" size={25} color={color} />
        ) : (
          <Icon name="arrowleft" size={25} color={color} />
        )}
      </BackButton>
      <View style={{width: '65%'}}>
        <Text size="medium" color={textColor}>
          {props.title}
        </Text>
      </View>
      {props.isAdd && (
        <BackButton onPress={() => navigation.navigate('ProviderRegister')}>
          <Icon name="plus" size={25} color={color} />
        </BackButton>
      )}
    </Container>
  );
};

export default Header;
