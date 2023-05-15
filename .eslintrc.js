module.exports = {
  env: {
    es2021: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'linebreak-style': 0,
  },
};
