const jsconfig = require('./jsconfig.json');

const { paths } = jsconfig.compilerOptions;

const alias = {};
Object.entries(paths).forEach(([key, value]) => {
  const [aliasKey] = key.split(/\/\*/);
  const [aliasValue] = value[0].split(/\/\*/);

  alias[aliasKey] = aliasValue;
});

// babel.config.js
module.exports.getBabelAlias = alias;

// .eslintrc.js
module.exports.getEslintAlias = Object.entries(alias);
