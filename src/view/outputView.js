import { Console } from '@woowacourse/mission-utils';

class Output {
  /**
   *
   * @param {Number} count
   */
  purchase(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }
}

export default Output;
