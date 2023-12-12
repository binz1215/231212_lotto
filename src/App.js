import { Console } from '@woowacourse/mission-utils';
import Calculation from './module/calculation.js';
import Game from './module/game_lotto.js';
import { PRIZE } from './constants/contants.js';
import { purchasePrint, answerPrint } from './view/outputView.js';

class App {
  #result = {};

  async play() {
    const game = new Game();
    const result = await game.play();

    this.#result.money = result.money;
    this.#result.lotto = result.lotto;
    this.#result.bonus = result.bonus;
    this.#result.numArray = result.numArray;
    this.#result.winningCount = result.winnigCount;
    this.#purchaseDetail();
    this.#resultDetail();
  }

  #purchaseDetail() {
    purchasePrint(this.#result.money);
    this.#result.numArray.forEach((array) => {
      Console.print(array);
    });
    answerPrint(this.#result.lotto, this.#result.bonus);
  }

  #resultDetail() {
    const calculation = new Calculation();
    const ratio = calculation.returnRatio(this.#result.winningCount, this.#result.money);

    Console.print(ratio);
  }
}

export default App;
