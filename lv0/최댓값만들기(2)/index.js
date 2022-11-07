/**
 * 문제 설명: 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 * 제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100
 */

function solution(numbers) {
  const minusArr = numbers.filter((num) => num < 0);
  const plusArr = numbers.filter((num) => num >= 0);
  let minusResult = -1;
  let plusResult = -1;
  if (minusArr.length > 1) {
    minusArr.sort((a, b) => a - b);
    minusResult = minusArr[0] * minusArr[1];
  }
  if (plusArr.length > 1) {
    plusArr.sort((a, b) => b - a);
    plusResult = plusArr[0] * plusArr[1];
  }
  let answer = minusResult > plusResult ? minusResult : plusResult;
  if (minusArr.length === 1 && plusArr.length === 1) {
    answer = minusArr[0] * plusArr[0];
  }

  return answer;
}
