module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'babel-plugin-styled-components',
    ['babel-plugin-react-native-config', {envfile: '.env'}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~components': './src/components',
          '~validations': './src/validations',
          '~constants': './src/constants',
          '~themes': './src/themes',
          '~store': './src/store',
          '~reducers': './src/store/reducers',
          '~views': './src/views',
          '~services': './src/services',
          '~router': './src/router',
          '~assets': './src/assets',
          '~images': './src/assets/images',
          '~animations': './src/assets/animations',
          '~config': './src/config',
          '~i18n': './src/i18n',
          '~types': './src/@types/types.d',
          '~modals': './src/modals',
        },
      },
    ],
  ],
};
