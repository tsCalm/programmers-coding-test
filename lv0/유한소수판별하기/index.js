/**
 * 문제 설명: 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

 * 제한사항
a, b는 정수
0 < a ≤ 1,000
0 < b ≤ 1,000
 */
const getMeasure = (num) => {
  const measure = [];
  for (let i = 1; i <= num; i++) {
    const result = num / i;
    if (Number.isInteger(result)) {
      measure.push(i);
    }
  }
  return measure;
};
function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(a, b) {
  let calcA = a;
  let calcB = b;
  let commonMeasure = -1;
  const aMeasure = getMeasure(a);
  const bMeasure = getMeasure(b);
  aMeasure.forEach((num) => {
    const existB = bMeasure.includes(num);
    if (existB && num > commonMeasure) commonMeasure = num;
  });
  if (commonMeasure !== -1) {
    calcA = calcA / commonMeasure;
    calcB = calcB / commonMeasure;
  }
  const resultBMeasure = getMeasure(calcB).filter((measure) =>
    isPrime(measure)
  );
  const answer = resultBMeasure.filter((num) => num !== 2 && num !== 5);
  return answer.length > 0 ? 2 : 1;
}
