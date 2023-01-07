/**
 * 문제설명 :
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 * 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
 * (1은 소수가 아닙니다.)
 *
 * 제한사항 :
 * n은 2이상 1000000이하의 자연수입니다.
 */

/**
 * 소수 조건
 * 1. 2를 제외한 짝수는 전부 소수가 아님
 * 2. 제곱근 보다 작은 2이상의 자연수로 나누어 떨어지면 소수가 아님
 */
function solution(n) {
  const answer = [2];
  const isDesimal = (num) => {
    let temp = true;
    if (num === 2 || num === 3) return temp;
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        temp = false;
        break;
      }
    }
    return temp;
  };
  for (let i = 3; i <= n; i++) {
    if (i % 2 !== 0) answer.push(i);
  }
  return answer.filter((num) => isDesimal(num)).length;
}
const param = 10;
const result = solution(param);

console.log("result : ", result);
