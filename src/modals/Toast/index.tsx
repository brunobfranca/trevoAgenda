import React, {useContext, useEffect} from 'react';
import {Container} from './styles';
import {Text} from '~components';
import AlertIcon from './assets/alert.svg';
import {Store} from '~components/Modal';
import {StatusBar} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

export interface IToast {
  message: string;
  duration?: number;
  variant?: string;
}

export default function Toast({
  message,
  duration = 3000,
  variant = 'error',
}: IToast) {
  const {close} = useContext(Store);
  const {top} = useSafeArea();

  useEffect(() => {
    const timeout = setTimeout(close, duration);
    return () => clearTimeout(timeout);
  }, [duration, close]);

  return (
    <Container style={{paddingTop: top + 25}} variant={variant}>
      <StatusBar barStyle="light-content" />
      <AlertIcon
        fill="white"
        width={20}
        height={20}
        style={{marginRight: 15}}
      />
      <Text size="medium" center color="background">
        {message}
      </Text>
    </Container>
  );
}
