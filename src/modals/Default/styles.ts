import styled from 'styled-components/native';
import Text from '~components/Text';
import button from '~components/Button';

export const CancelTouchArea = styled.TouchableOpacity.attrs({
  hitSlop: { top: 15, bottom: 15, left: 15, right: 15 },
})`
  margin-top: 30px;
`;

export const CancelText = styled(Text).attrs({
  bold: true,
  center: true,
  color: 'secondary'
})``;

export const Button = styled(button)<{ last: boolean }>`
  flex: 1;
  margin-right: ${props => (props.last ? 0 : 25)}px;
`;

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background};
  padding: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20px;
`;

export const Title = styled(Text).attrs({
  bold: true,
  size: 'large',
  center: true,
  color: 'secondary'
})``;

export const Description = styled(Text).attrs({
  size: 'medium',
  center: true,
  color: 'secondary'
})`
  margin-bottom: 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
