/**
 * 문제설명 :
 * 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
 * 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
 *
 * 제한사항 :
 * a, b의 길이는 1 이상 1,000 이하입니다.
 * a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
 */
function solution(a, b) {
  const answer = a.map((num, index) => num * b[index]);
  return answer.reduce((prev, cur) => prev + cur, 0);
}

const param = [1, 2, 3, 4];
const param2 = [-3, -1, 0, 2];
const result = solution(param, param2);

console.log("result : ", result);
