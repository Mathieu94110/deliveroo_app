module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-native'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    quotes: ['error', 'single'],
    'no-console': 'off',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
};
