import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export default styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth * 2}px;
  border-bottom-color: ${props => props.color ?? props.theme.colors.background};
  height: ${props => (props.line ? 1 : 15)}px;
`;
