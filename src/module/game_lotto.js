import ValidLotto from '../controller/valid_lotto.js';
import ValidMoneyCount from '../controller/valid_money_count.js';
import LottoNum from './lottoNum.js';

class Game {
  #lottoNum;

  #bonusNum;

  #inputLotto;

  #randomLotto;

  #money;

  #count;

  #lotto;

  #lottoArray = [];

  constructor() {
    this.#inputLotto = new ValidLotto();
    this.#lotto = new LottoNum();
  }

  async play() {
    await this.find();
    await this.getLottoArray();
    console.log(this.#lottoNum);
    console.log(this.#bonusNum);
    const a = this.#countOfWinning();
    console.log(a);
  }

  async find() {
    // const lottoNum = new LottoNum();
    const { lotto, bonus } = this.#lotto.getLotto();
    this.#lottoNum = lotto;
    this.#bonusNum = bonus;
    // const validLotto = new ValidLotto();
    // this.#inputLotto = await validLotto.rightLotto();
    // this.#randomLotto = lottoNum.randomLotto();
    const validMoney = new ValidMoneyCount();
    await validMoney.validMoneyCount();
    const { money, count } = validMoney.getMoneyCount();
    this.#money = money;
    this.#count = count;
  }

  async getLottoArray() {
    for (let i = 0; i < this.#count; i++) {
      const aff = await this.#inputLotto.rightLotto(); // await 따로 빼기
      this.#lottoArray.push(aff);
    }
    for (let i = 0; i < this.#money - this.#count; i++) {
      this.#lottoArray.push(this.#lotto.randomLotto());
    }

    console.log(this.#lottoArray);
    return this.#lottoArray;
  }

  #countOfWinning() {
    const result = [0, 0, 0, 0, 0];
    this.#lottoArray.forEach((array) => {
      const winNum = this.#resultOfWinning(array);
      if (winNum === 3) result[4] += 1;
      if (winNum === 4) result[3] += 1;
      if (winNum === 5 && !array.include(this.#bonusNum)) result[2] += 1;
      if (winNum === 5 && array.include(this.#bonusNum)) result[1] += 1;
      if (winNum === 6) result[0] += 1;
    });

    return result;
  }

  /**
   *
   * @param {Array} array
   * @returns
   */
  #resultOfWinning(array) {
    const winCount = this.#lottoNum.filter((value) => array.includes(value));

    return winCount.length;
  }
}

export default Game;

// const game = new Game();
// const x = await game.play();
/// / const x = await game.find();
