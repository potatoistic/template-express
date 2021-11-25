const { getEslintAlias } = require('./config');

const alias = getEslintAlias();
module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    // enable dev depedencies for test files
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.js',
          '**/*.test.mjs',
          '**/*.spec.mjs',
          '**/*.test.mjs',
        ],
      },
    ],
  },
  ignorePatterns: ['temp/', 'node_modules/', 'dist/'],
  settings: {
    'import/resolver': {
      alias: {
        map: alias,
        extensions: ['.js', '.json'],
      },
    },
  },
};
