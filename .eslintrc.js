const { getEslintAlias } = require('./config');

module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['jsdoc'],
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
    // disabled no-used-vars for jsdoc
    'jsdoc/no-undefined-types': 1,
  },
  ignorePatterns: ['temp/', 'node_modules/', 'dist/'],
  settings: {
    'import/resolver': {
      alias: {
        map: getEslintAlias,
        extensions: ['.js', '.json'],
      },
    },
  },
};
