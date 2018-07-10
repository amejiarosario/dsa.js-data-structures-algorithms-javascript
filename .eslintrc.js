module.exports = {
  "extends": "airbnb-base",
  "env": {
    "jest": true
  },
  rules: {
    // https://stackoverflow.com/a/35637900/684957
    // allow to add properties to arguments
    "no-param-reassign": [2, { "props": false }]
  }
};
