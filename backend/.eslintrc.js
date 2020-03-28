module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': [2, 'always'],
    indent: ['error', 2],
    'arrow-parens': [2, 'as-needed'],
    'linebreak-style': 0,
    'max-len': 0
  }
};
