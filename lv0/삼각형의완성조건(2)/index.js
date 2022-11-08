/**
 * 문제 설명: 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.
 * 제한사항
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000
 */

function solution(sides) {
  sides.sort((a, b) => b - a);
  const sideBig = sides[0];
  const sideSmall = sides[1];
  const maxNumber = sideBig + sideSmall - 1;
  // max 사이즈가 sideBig 고정일 경우
  if (sideBig === maxNumber) return 1;

  // max 사이즈가 sideBig 또는 a일 경우
  let answer = 0;
  // 1. sideBig이 가장 클 경우
  const diffSide = sideBig - sideSmall + 1;
  for (let i = diffSide; i <= sideBig; i++) {
    answer++;
  }
  // 2. a가 제일 클 경우
  for (let i = sideBig + 1; i <= maxNumber; i++) {
    console.log(i);
    answer++;
  }
  return answer;
}

const param = [11, 7];

const result = solution(param);
console.log("result : ", result);
