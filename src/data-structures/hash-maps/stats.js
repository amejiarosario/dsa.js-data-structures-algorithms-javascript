/**
 * Related:
 * https://github.com/numbers/numbers.js/blob/master/test/statistic.test.js
 */
class Stats {
  constructor(serie = []) {
    this.serie = serie;
  }

  set serie(serie) {
    this.originalArray = serie;
    this.sortedArray = serie.sort((a, b) => b - a);
    this.evenSet = serie % 2 === 0;
    this.oddSet = !this.evenSet;
    this.length = serie.length;
    this.middleIndex = parseInt(serie.length / 2);
  }

  get serie() {
    return this.sortedArray;
  }

  count() {
    return this.serie.length;
  }

  sum() {
    return this.serie.reduce((sum, el) => sum + el);
  }

  /**
   * The mean is the average of the numbers: a calculated "central" value of a set of numbers.
   *
   * add up all the numbers, then divide by how many numbers there are.
   */
  mean() {
    return this.sum() / this.count();
  }

  /**
   * "middle" value
   */
  median(array = this.serie) {
    const sortedArray = array.sort((a, b) => b - a);
    const count = sortedArray.length;
    const middle = parseInt(count/2);
    if (count % 2 === 0) {
      // even
      return {
        median: (sortedArray[middle] + sortedArray[middle - 1]) / 2,
        medianIndex: null,
      };
    }
    // odd
    return {
      median: sortedArray[middle],
      medianIndex: middle,
    };
  }

  /**
   * A quartile is a type of quantile.
   * The first quartile (Q1) is defined as the middle number between the smallest number and the median of the data set.
   * The second quartile (Q2) is the median of the data.
   * The third quartile (Q3) is the middle value between the median and the highest value of the data set.
   *
   * Use the median to divide the ordered data set into two halves.
   * If there are an odd number of data points in the original ordered data set, include the median (the central value in the ordered list) in both halves.
   * If there are an even number of data points in the original ordered data set, split this data set exactly in half.
   * The lower quartile value is the median of the lower half of the data. The upper quartile value is the median of the upper half of the data.
   */
  quartile() {
    const { medianIndex, median } = this.median();
    let q1;
    let q3;

    if (this.evenSet) {
      // even - split half
      q1 = this.median(this.serie.slice(0, this.middleIndex)).median;
      q3 = this.median(this.serie.slice(this.middleIndex)).median;
    } else {
      // odd - include the median
      q1 = this.median(this.serie.slice(0, medianIndex + 1)).median;
      q3 = this.median(this.serie.slice(medianIndex)).median;
    }

    return {
      '25%': q1,
      '50%': median,
      '75%': q3,
    };
  }

  describe() {
    return {
      count: this.serie.length,
      mean: 0,
      std: 0,
      min: 0,
      '25%': 0,
      '50%': 0,
      '75%': 0,
      max: 0,
    };
  }
}

module.exports = Stats;
