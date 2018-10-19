function getCoins(cents, coins = [], results = []) {

  if(cents === 0) {
    results.push(coins);
  } else if(cents > 0) {
    [25, 10, 5, 1].forEach(function (coin) {
      getCoins(cents - coin, coins.concat([coin]), results);
    });
  }

  return results;
}

function makeChange(amount) {

}

module.exports = makeChange;