import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import {Text} from '~components'

export const Container = styled.View`
  flex:1;
  width:100%;
`;
export const Input = styled(TextInput).attrs({
  theme:{ colors: { text: '#283C64', primary: '#283C64' }},
  fontSize: 14
})`
  margin: 10px;
  font-size: 12px;
  height: 60px;
  background: transparent;
`;
export const Error = styled(Text).attrs({
  size:"tiny",
  color:'error'
})`
  margin-left: 20px;
`;