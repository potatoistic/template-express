const jsconfig = require('./jsconfig.json');

const { paths } = jsconfig.compilerOptions;

const pathAlias = {};

// babel.config.js
module.exports.getBabelAlias = () => {
  Object.entries(paths).forEach(([key, value]) => {
    const [aliasKey] = key.split('*');
    const [aliasValue] = value[0].split('*');

    pathAlias[aliasKey] = aliasValue;
  });
  return pathAlias;
};

// .eslintrc.js
module.exports.getEslintAlias = () => Object.entries(pathAlias);
