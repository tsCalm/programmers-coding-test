/**
 * 문제 설명: 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
1 ≤ my_str의 길이 ≤ 100
1 ≤ n ≤ my_str의 길이
my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 */
function solution(my_str, n) {
  const myStrArr = my_str.split("");
  const answer = [];
  while (myStrArr.length >= n) {
    const resultItemArr = myStrArr.splice(0, n);
    const resultItem = resultItemArr.join("");
    answer.push(resultItem);
  }
  if (myStrArr.length > 0) {
    const lastItem = myStrArr.join("");
    answer.push(lastItem);
  }
  return answer;
}
