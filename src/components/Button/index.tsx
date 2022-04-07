import React from 'react';
import {Container} from './styles';
import Text from '~components/Text';
import Loading from '~components/Loading';

interface IButton {
  children: string;
  inverted?: boolean;
  uppercase?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  rect?: boolean;
  onLongPress?: () => void;
  delayLongPress?: number;
}

export default function Component(props: IButton) {
  return (
    <Container disabled={props.disabled} loading={props.loading} {...props}>
      {props.loading && <Loading light={!props.inverted} />}
      {!props.loading && (
        <Text
          bold
          uppercase={props.uppercase}
          color={props.inverted ? 'primary' : 'background'}
          size="medium">
          {props.children}
        </Text>
      )}
    </Container>
  );
}
