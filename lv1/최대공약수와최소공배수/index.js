/**
 * 문제설명 :
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수,
 * 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 *
 * 제한사항 :
 * 두 수는 1이상 1000000이하의 자연수입니다.
 */

/**
 * 1. 최대공약수를 구하는 함수를 만든다.
 * 2. 최소공배수를 구하는 함수를 만든다.
 * 3. 1,2번 함수를 호출한다.
 * 4. 리턴한다.
 */

// 일반적인 반복문으로는 속도문제로 통과 불가능, 유클리드 호제법-'어떤 자연수 a, b가 있을 때 (a > b), 두 수의 최대공약수는 a를 b로 나눈 나머지와 b의 최대공약수와 같다.'을 이용해 풀기

function getGcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return getGcd(b, remainder);
}

function solution(n, m) {
  const gcd = getGcd(n, m);
  const gcf = (n * m) / gcd;
  return [gcd, gcf];
}

const result = solution(10, 100);
console.log("result : ", result);
