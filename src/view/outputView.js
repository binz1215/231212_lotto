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
/**
 *
 * @param {Array} result
 */
export function statePrint(result, ratio) {
  Console.print(`---
3개 일치 (5,000원) - ${result[4]}개
4개 일치 (50,000원) ${result[3]}개
5개 일치 (1,500,000원) ${result[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) ${result[1]}개
6개 일치 (2,000,000,000원) ${result[0]}개
총 수익률은 ${ratio}%입니다.`);
}
