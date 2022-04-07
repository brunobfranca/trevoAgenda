import styled from 'styled-components/native';
import modal from 'react-native-modal';
import { DELAY } from '~services/utils';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled(modal).attrs(props => ({
  backdropTransitionOutTiming: 0,
  avoidKeyboard: true,
  swipeDirection: 'down',
  deviceHeight: height,
  deviceWidth: width,
  animationOutTiming: DELAY,
  statusBarTranslucent: true,
  ...props,
}))`
  margin: 0;
`;
