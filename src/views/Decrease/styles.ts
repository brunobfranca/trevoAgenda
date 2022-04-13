import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  padding: 10px;
`;
export const Input = styled(TextInput).attrs({
  theme: {colors: {text: '#283C64', primary: '#283C64'}},
  fontSize: 14,
})`
  margin: 10px;
  font-size: 12px;
  height: 60px;
  width: 45%;
  background: transparent;
`;
