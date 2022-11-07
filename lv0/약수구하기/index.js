/**
 * 문제 설명: 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 * 제한사항
1 ≤ n ≤ 10,000
 */

function solution(n) {
  var answer = [];
  let index = 1;
  while (index <= n) {
    if (n % index === 0) answer.push(index);
    index++;
  }
  return answer;
}
