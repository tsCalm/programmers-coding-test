/**
 * 문제 설명: 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
 * 제한사항
1 ≤ s1, s2의 길이 ≤ 100
1 ≤ s1, s2의 원소의 길이 ≤ 10
s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
s1과 s2는 각각 중복된 원소를 갖지 않습니다.
 */

function solution(s1, s2) {
  const s1Length = s1.length;
  const s2Length = s2.length;
  let longArr = [];
  let shortArr = [];
  if (s1Length === s2Length) {
    longArr = s1;
    shortArr = s2;
  } else {
    longArr = s1Length > s2Length ? s1 : s2;
    shortArr = s1Length > s2Length ? s2 : s1;
  }
  let answer = 0;
  shortArr.forEach((num) => {
    const findNum = longArr.includes(num);
    if (findNum) answer++;
  });
  return answer;
}
