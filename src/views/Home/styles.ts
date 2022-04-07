import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 70px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 5px;
`;
