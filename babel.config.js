module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'module-resolver',
        {
          alias: {
            '@Components': './src/Components',
            '@Screens': './src/Screens',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
