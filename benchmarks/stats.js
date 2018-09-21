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
    this.sortedArray = serie.sort((a, b) => a - b);
    this.evenSet = serie % 2 === 0;
    this.oddSet = !this.evenSet;
    this.length = serie.length;
    [this.min] = this.sortedArray;
    this.max = this.sortedArray[this.length - 1];
    this.middleIndex = parseInt(serie.length / 2, 10);
  }

  get serie() {
    return this.sortedArray;
  }

  count() {
    return this.serie.length;
  }

  get percentiles() {
    const i25 = parseInt(this.length * 0.25, 10);
    const i50 = parseInt(this.length * 0.50, 10);
    const i75 = parseInt(this.length * 0.75, 10);
    const i5 = Math.ceil(this.length * 0.05);
    const i95 = parseInt(this.length * 0.95, 10);
    return {
      q5: this.sortedArray[i5],
      q25: this.sortedArray[i25],
      q50: this.sortedArray[i50],
      q75: this.sortedArray[i75],
      q95: this.sortedArray[i95],
    };
  }

  get median() {
    const { q50 } = this.percentiles;
    return q50;
  }

  iterateSerie() {
    this.sumValue = 0;
    this.frequencies = {};
    let maxFrequency = 0;

    this.sortedArray.forEach((element) => {
      // sum
      this.sumValue += element;

      // mode
      const frequency = 1 + (this.frequencies[element] || 0);
      this.frequencies[element] = frequency;
      if (frequency > maxFrequency) {
        this.modeValue = element;
        maxFrequency = frequency;
      }
    });
  }

  get mode() {
    if (!this.modeValue) {
      this.iterateSerie();
    }
    return this.modeValue;
  }

  get sum() {
    if (!this.sumValue) {
      this.iterateSerie();
    }
    return this.sumValue;
  }

  get mean() {
    if (!this.sumValue) {
      this.iterateSerie();
    }
    return this.sumValue / this.length;
  }

  /**
   * Standard Deviation (SD, also sigma σ or letter s)
   * How far data is from the mean value. The bigger the value,
   * the more disperse is from the mean.
   */
  get std() {
    const { mean } = this;
    const squareDifference = this.serie.reduce((sum, el) => {
      return sum + ((el - mean) ** 2);
    }, 0);
    return Math.sqrt(squareDifference / (this.length - 1));
  }

  describe() {
    const {
      q5,
      q25,
      q50,
      q75,
      q95,
    } = this.percentiles;

    return {
      '5%': q5,
      '25%': q25,
      '50%': q50,
      '75%': q75,
      '95%': q95,
      min: this.min,
      median: this.median,
      max: this.max,
      std: this.std,
      count: this.length.toLocaleString(),
      mode: this.mode,
    };
  }
}

module.exports = Stats;
