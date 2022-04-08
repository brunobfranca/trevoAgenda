import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${props =>
    props.inverted
      ? props.theme.colors.secondary
      : props.theme.colors.background};
`;
export const BackButton = styled.TouchableOpacity`
    width: 20%
    padding: 15px;
    justifyContent: center;
    alignItems: flex-start;
`;
