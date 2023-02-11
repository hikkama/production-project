module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': [0],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'warn',
    indent: [1],
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
}
