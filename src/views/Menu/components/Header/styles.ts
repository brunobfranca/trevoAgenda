import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 20%;
`;
export const ViewLogo = styled.View`
  flex-direction: row;
  height: 90%;
  padding: 8px;
  justify-content: space-between;
  background: ${props => props.theme.colors.title};
`;
export const Logo = styled.Image`
  width: 60%;
  height: 100%;
  resizemode: contain;
`;
export const Close = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
  align-items: flex-end;
`;
