/**
 * 문제설명 :
 * 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
 * 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항 :
 * 1 ≤ left ≤ right ≤ 1,000
 */
const getMeasure = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const temp = n / i;
    if (Number.isInteger(temp)) result.push(temp);
  }
  return result;
};

function solution(left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    const measure = getMeasure(i);
    const mCheck = measure.length % 2 === 0;
    answer.push(mCheck ? i : i * -1);
  }
  return answer.reduce((prev, cur) => prev + cur, 0);
}
const param = 13;
const param2 = 17;
const result = solution(param, param2);

console.log("result : ", result);
