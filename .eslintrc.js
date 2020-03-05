module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
      typescript: {},
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
      '.ts',
    ],
  },
  globals: {
    Promise: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 'react/jsx-uses-react': 2,
  },
};
