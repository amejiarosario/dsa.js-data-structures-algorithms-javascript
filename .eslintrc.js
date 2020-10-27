module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true,
  },
  plugins: ['jest'],
  globals: {
    BigInt: true,
  },

  // check package.json for files to include
  // files: ['src/**/*.js', 'book/interview-questions/*.js'],

  rules: {
    // https://github.com/airbnb/javascript/issues/1089

    // https://stackoverflow.com/a/35637900/684957
    // allow to add properties to arguments
    'no-param-reassign': [2, { props: false }],

    // https://eslint.org/docs/rules/no-plusplus
    // allows unary operators ++ and -- in the afterthought (final expression) of a for loop.
    'no-plusplus': [0, { allowForLoopAfterthoughts: true }],
    'no-continue': [0],

    // Allow for..of
    'no-restricted-syntax': [0, 'ForOfStatement'],

    // jest plugin
    // 'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'warn',
    'jest/valid-expect': 'warn',
  },
};
