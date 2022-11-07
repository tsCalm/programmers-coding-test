/**
 * 문제 설명: 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
return 값은 이진수를 의미하는 문자열입니다.
1 ≤ bin1, bin2의 길이 ≤ 10
bin1과 bin2는 0과 1로만 이루어져 있습니다.
bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.
 */
function solution(bin1, bin2) {
  const bin1Arr = bin1.split("").map((char) => Number(char));
  const bin2Arr = bin2.split("").map((char) => Number(char));
  const bigArr = bin1Arr.length > bin2Arr.length ? bin1Arr : bin2Arr;
  const smallArr = bin1Arr.length > bin2Arr.length ? bin2Arr : bin1Arr;
  const lenDiff = bigArr.length - smallArr.length;
  for (let i = 0; i < lenDiff; i++) {
    smallArr.unshift(0);
  }

  const answer = [];
  let roundedNum = 0;
  bigArr.reverse();
  smallArr.reverse();
  console.log(bigArr);
  console.log(smallArr);
  for (let i = 0; i < bigArr.length; i++) {
    const result = bigArr[i] + smallArr[i] + roundedNum;
    if (result === 0) {
      answer.push(0);
      roundedNum = 0;
    } else if (result === 1) {
      answer.push(1);
      roundedNum = 0;
    } else if (result === 2) {
      answer.push(0);
      roundedNum = 1;
    } else {
      answer.push(1);
      roundedNum = 1;
    }
  }
  if (roundedNum === 1) answer.push(1);
  return answer.reverse().reduce((prev, cur) => prev + cur, "");
}
