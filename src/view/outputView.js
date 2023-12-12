import { Console } from '@woowacourse/mission-utils';

/**
 *
 * @param {Number} count
 */
export function purchasePrint(count) {
  Console.print(`${count}개를 구매했습니다.`);
}

export function answerPrint(lotto, bonus) {
  Console.print(`${'\n'}당첨 번호 공개 ${'\n'}[${lotto}] + [${bonus}]`);
}
