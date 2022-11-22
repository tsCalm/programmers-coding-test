/**
 * 문제설명 :
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 *
 * 제한사항 :
 * n은 0 이상 3000이하인 정수입니다.
 */

const getMeasure = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const temp = n / i;
    console.log(temp);
    if (Number.isInteger(temp)) result.push(temp);
  }
  return result;
};

function solution(n) {
  const measure = getMeasure(n);
  return measure.reduce((prev, cur) => prev + cur, 0);
}

const param = 12;
const result = solution(param);

console.log("result : ", result);
