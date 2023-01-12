module.exports = {
  presets: [
    //using loose true because of this issue: https://github.com/storybookjs/storybook/issues/12093
    ['@babel/preset-env', { loose: true }],
    '@babel/typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
};
