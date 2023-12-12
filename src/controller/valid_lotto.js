import InputView from '../view/inputView.js';
import { CountNum, LottoArange } from '../constants/contants.js';

class ValidLotto {
  #lotto;

  async rightLotto() {
    let valid = true;

    while (valid) {
      try {
        this.#lotto = await this.#lottoNum();
        this.#lottoValidCheck();
        valid = false;
      } catch (error) {}
    }
    return this.#lotto;
  }

  async #lottoNum() {
    const inputView = new InputView();
    const manualLotto = await inputView.manualLotto();
    return manualLotto.map((item) => Number(item));
  }

  #lottoValidCheck() {
    if (this.#isRightArange()) throw new Error();
    if (this.#isDuplication()) throw new Error();
    if (this.#isRightCount()) throw new Error();
    if (this.#isNum()) throw new Error();
  }

  #isRightArange() {
    return this.#lotto.some((num) => num < LottoArange.MIM || num > LottoArange.MAX);
  }

  #isNum() {
    return this.#lotto.some((num) => Number.isNaN(num));
  }

  #isDuplication() {
    const lottoSet = new Set(this.#lotto);
    if (this.#lotto.length !== lottoSet.size) return true;
  }

  #isRightCount() {
    if (this.#lotto.length !== CountNum.SIX) return true;
  }
}

export default ValidLotto;

// const valid = new ValidLotto();
// const x = await valid.rightLotto();
// console.log(x);
