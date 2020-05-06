module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true
  },
  globals: {
    BigInt: true,
  },
  rules: {
    // https://github.com/airbnb/javascript/issues/1089

    // https://stackoverflow.com/a/35637900/684957
    // allow to add properties to arguments
    'no-param-reassign': [2, { 'props': false }],

    // https://eslint.org/docs/rules/no-plusplus
    // allows unary operators ++ and -- in the afterthought (final expression) of a for loop.
    'no-plusplus': [0, { 'allowForLoopAfterthoughts': true }],
    'no-continue': [0],

    // Allow for..of
    'no-restricted-syntax': [0, 'ForOfStatement'],
  }
};
