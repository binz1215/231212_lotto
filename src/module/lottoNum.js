import { MissionUtils } from '@woowacourse/mission-utils';

class LottoNum {
  #lottoNum = {};

  constructor() {
    this.randomLotto();
    this.#bonusNum();
  }

  randomLotto() {
    const random = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 5);
    this.#lottoNum.lotto = random;

    return random;
  }

  #bonusNum() {
    let bonus;
    let count = 0;

    while (count !== 1) {
      bonus = MissionUtils.Random.pickUniqueNumbersInRange(1, 20, 1);
      if (!this.#lottoNum.lotto.includes(bonus)) {
        this.#lottoNum.bonus = bonus;
        count += 1;
      }
    }
  }

  getLotto() {
    return this.#lottoNum;
  }
}

export default LottoNum;

// const lotto = new LottoNum();

// const lot = lotto.getLotto();
// console.log(lot);
