import styled, {css} from 'styled-components/native';
import {DefaultTheme} from '../themes';

const fontSizeStyle = (
  size: typeof DefaultTheme.typography.sizes.default,
) => css`
  font-size: ${size.size}px;
  line-height: ${size.lineHeight}px;
`;

export default styled.Text<TextProps>`
  color: ${props => {
    const {colors} = props.theme;

    if (props.theme.disabled) {
      return colors.disabled;
    }

    switch (props.color) {
      case 'textDisabled':
        return colors.disabled;
      case 'disabled':
        return colors.disabledSecondary;
      case 'primary':
        return colors.primary;
      case 'subtitle':
        return colors.subtitle;
      case 'background':
        return colors.background;
      case 'secondary':
        return colors.secondary;
      case 'error':
        return colors.error;
      default:
        return colors.title;
    }
  }};

  ${props => {
    const {sizes} = props.theme.typography;

    switch (props.size) {
      case 'extraLarge':
        return fontSizeStyle(sizes.extraLarge);
      case 'large':
        return fontSizeStyle(sizes.large);
      case 'medium':
        return fontSizeStyle(sizes.medium);
      case 'small':
        return fontSizeStyle(sizes.small);
      case 'tiny':
        return fontSizeStyle(sizes.tiny);
      default:
        return fontSizeStyle(sizes.default);
    }
  }}

  text-decoration-line: ${props => {
    if (props.underline) {
      return 'underline';
    }
    if (props.crossed) {
      return 'line-through';
    }
    return 'none';
  }};

  ${props =>
    props.bold &&
    css`
      font-family: '${props.theme.typography.fontFamily.bold}';
    `}
  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};
  ${props =>
    !props.nowrap &&
    css`
      flex: 0 1 auto;
      flex-wrap: wrap;
    `}
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;

interface TextProps {
  underline?: boolean;
  crossed?: boolean;
  uppercase?: boolean;
  center?: boolean;
  nowrap?: boolean;
  bold?: boolean;
  size?: 'tiny' | 'small' | 'default' | 'medium' | 'large' | 'extraLarge';
  color?:
    | 'primary'
    | 'secondary'
    | 'title'
    | 'subtitle'
    | 'background'
    | 'disabled'
    | 'disabledSecondary';
  theme: typeof DefaultTheme & {
    disabled?: boolean;
  };
}
