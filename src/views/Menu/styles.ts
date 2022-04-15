import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.title};
`;
export const Logout = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-horizontal: 15px;
  width: 100%;
  height: 50px;
`;
