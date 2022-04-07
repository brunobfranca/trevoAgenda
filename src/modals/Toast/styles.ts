import styled from 'styled-components/native';

enum Colors {
  error = 'red',
  success = 'green',
  alert = '#EEAD2D',
}

export const Container = styled.View`
  background-color: ${({variant}) => Colors[variant]};
  padding: 25px;
  flex-direction: row;
  align-items: center;
`;
