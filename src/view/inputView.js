import { Console } from '@woowacourse/mission-utils';

class InputView {
  async purchaseAmount() {
    const purchase = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return Number(purchase);
  }

  async manualCount() {
    const manual = await Console.readLineAsync('수동 개수를 입력해 주세요.\n');

    return Number(manual);
  }

  async manualLotto() {
    const lotto = await Console.readLineAsync('로또 번호를 입력해 주세요.(,로 구분)\n');
    const arrayLotto = lotto.split(',');

    return arrayLotto;
  }
}

export default InputView;

// const input = new InputView();
// const lotto = await input.manualLotto();
// console.log(lotto);
