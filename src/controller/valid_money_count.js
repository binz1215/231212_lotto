import InputView from '../view/inputView.js';
import { CountNum, MAX_AMOUNT, UNIT } from '../constants/contants.js';

class ValidMoneyCount {
  #money;

  #count;

  async validMoneyCount() {
    await this.#rightMoney();
    await this.#rightCount();
  }

  async #rightMoney() {
    let valid = true;
    this.#money = await new InputView().purchaseAmount();
    while (valid) {
      try {
        this.#moneyValidCheck();
        valid = false;
      } catch (error) {
        this.#money = await new InputView().purchaseAmount();
      }
    }
    return this.#money;
  }

  async #rightCount() {
    let valid = true;
    this.#count = await new InputView().manualCount();
    while (valid) {
      try {
        this.#countValidCheck();
        valid = false;
      } catch (error) {
        this.#count = await new InputView().manualCount();
      }
    }
    return this.#count;
  }

  // 구입금액 유효성 확인

  #moneyValidCheck() {
    if (this.#isRightUnit()) throw new Error();
    if (this.#isRightArange()) throw new Error();
    if (this.#isNum(this.#money)) throw new Error();
  }

  #isRightUnit() {
    if (this.#money % UNIT !== 0) {
      return true;
    }
  }

  #isRightArange() {
    if (this.#money < CountNum.ONE || this.#money >= MAX_AMOUNT) {
      return true;
    }
  }

  #isNum(item) {
    if (Number.isNaN(item)) return true;
  }

  // 수동 구입 개수 유효성 확인

  #countValidCheck() {
    if (this.#isRightCount()) throw new Error();
    if (this.#isNum(this.#count)) throw new Error();
  }

  #isRightCount() {
    if (this.#count > this.#money / UNIT || this.#count < CountNum.Zero) return true;
  }

  /**
   *
   * @returns money: 구매가능한 로또 숫자, count: 수동 구매 개수
   */
  getMoneyCount() {
    return { money: this.#money / UNIT, count: this.#count };
  }
}

export default ValidMoneyCount;

// const valid = new ValidMoneyCount();
// await valid.validMoneyCount();
// const { money, count } = valid.getMoneyCount();
// console.log(money, count);
