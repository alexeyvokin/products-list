module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': ['error', 'ignorePackages'],
  },
};
