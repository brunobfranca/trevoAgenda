import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';
import BlueLoadingDots from '~animations/blueLoadingDots.json';
import LightLoading from '~animations/lightLoadingDots.json';

export default styled(LottieView).attrs(props => ({
  resizeMode: 'cover',
  autoPlay: true,
  source: props.light ? LightLoading : BlueLoadingDots,
}))`
  width: ${props => props.light ? '50px' : '100px'};
  margin: auto;
`;
