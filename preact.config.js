module.exports = function (config, env) {
  config.resolve.alias.src = env.src;
  config.resolve.modules.push(env.src);
};
