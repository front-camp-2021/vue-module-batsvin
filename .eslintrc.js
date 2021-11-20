module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: { "vue/no-multiple-template-root": "off" },
  extends: [
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  }
};
