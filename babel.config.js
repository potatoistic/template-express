const { getBabelAlias } = require('./config');

module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          useBuiltIns: 'usage',
          corejs: '3.6.5',
        },
      ],
    ],
    plugins: [
      ['istanbul'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: getBabelAlias,
        },
      ],
    ],
  };
};
