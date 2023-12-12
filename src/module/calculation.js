import { PRIZE } from '../constants/contants.js';

class Calculation {
  /**
   *
   * @param {Array} result
   */
  sum(result) {
    const sum = PRIZE.fifth * result[4] + PRIZE.fourth * result[3] + PRIZE.third * result[2] + PRIZE.second * result[1] + PRIZE.first * result[0];

    return sum;
  }

  returnRatio(result, purchase) {
    const sum = this.sum(result);

    const ratio = 100 - (sum / (purchase * 1000)) * 100;

    return ratio;
  }
}
export default Calculation;
