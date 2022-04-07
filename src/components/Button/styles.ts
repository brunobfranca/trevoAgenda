import styled from 'styled-components/native';

export const BackgroundColor = props => {
  const { colors } = props.theme;
  if (props.disabled && !props.loading) return colors.disabled;
  if (props.inverted) return colors.secondary;
  return colors.primary;
};

export const Container = styled.TouchableOpacity.attrs(props => {
  const enabled = !props.loading && !props.disabled;
  return {
    activeOpacity: enabled ? 0.7 : 1,
    disabled: !enabled,
    onPress: enabled ? props.onPress : null,
  };
})`
  height: 55px;
  border-radius: ${props => (props.rect ? 0 : 30)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${BackgroundColor};
`;
