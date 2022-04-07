import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
`;
export const LogoContainer = styled.View`
  height: 32%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Input = styled(TextInput).attrs({
  theme: {colors: {text: '#283C64', primary: '#283C64'}},
  fontSize: 14,
})`
  margin: 10px;
  font-size: 12px;
  height: 60px;
  background: transparent;
`;
export const RegisterContainer = styled.View`
  align-items: center;
`;
