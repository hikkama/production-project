module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': [
      'error',
    ],
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': [0],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'warn',
    indent: [1],
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] }],
    'jsx-a11y/no-static-element-interactions': 'off', // temporary
    'jsx-a11y/click-events-have-key-events': 'off', // temporary
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['**/src/**/*.stories.@(js|jsx|ts|tsx)'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'max-len': 'off',
      },
    },
  ],
}
