import 'react-native-gesture-handler';
import 'moment/locale/pt-br';
import * as GlobalProps from 'react-native-global-props';
import ReactNative, {Platform, LogBox} from 'react-native';
import {enableES5} from 'immer';
import {DefaultConfigs, DefaultTheme} from './themes';
import {enableScreens} from 'react-native-screens';

enableScreens();
enableES5();

if (__DEV__) {
  ReactNative.unstable_enableLogBox();
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs([
    // Styled-components error
    'Failed prop type: Invalid props.style key `borderStyle` supplied to `Image`.',
    // Metro bundler error
    'Require cycle: node_modules\\react-native\\Libraries\\Network\\fetch.js',
    // Fork of react-native-material-textfield
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
    'Failed prop type: Helper: prop type `style` is invalid;',
    'Failed prop type: Label: prop type `style` is invalid;',
    // React-native-snap-carousel
    'Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.',
    // React-native-picker-select
    'Picker has been extracted from react-native',
  ]);
}

GlobalProps.setCustomText({
  style: {
    fontFamily: DefaultConfigs.typography.fontFamily.regular,
    fontSize: DefaultConfigs.typography.sizes.medium.size,
    lineHeight: DefaultConfigs.typography.sizes.medium.lineHeight,
    color: DefaultTheme.colors.title,
  },
  allowFontScaling: false,
});

GlobalProps.setCustomTextInput({
  style: {
    fontFamily: DefaultConfigs.typography.fontFamily.regular,
    fontSize: DefaultConfigs.typography.sizes.medium.size,
    lineHeight: DefaultConfigs.typography.sizes.medium.lineHeight,
    color: DefaultTheme.colors.title,
  },
});

GlobalProps.setCustomKeyboardAvoidingView({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
});

// Why did you re-render configuration
// Useful for performance optimizations

// if (__DEV__) {

//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   const ReactRedux = require('react-redux');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackExtraHooks: [[ReactRedux, 'useSelector', 'useReducer']],
//   });
// }
