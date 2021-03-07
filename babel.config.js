module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-env',
      'module:metro-react-native-babel-preset'
    ],
  };
};
