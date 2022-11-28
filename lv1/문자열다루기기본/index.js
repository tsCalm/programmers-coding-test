/**
 * 문제설명 :
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 *
 * 제한사항 :
 * s는 길이 1 이상, 길이 8 이하인 문자열입니다.
 * s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
 */
function solution(s) {
  const sNumArr = [];
  const sArr = s.split("");
  const sLen = sArr.length;
  if (!(sLen === 4 || sLen === 6)) {
    console.log("sLen : ", sLen);
    return false;
  }
  for (let i = 0; i < 10; i++) {
    sNumArr.push(i.toString());
  }
  let answer = true;
  for (const char of sArr) {
    if (!sNumArr.includes(char)) {
      answer = false;
      break;
    }
  }
  return answer;
}

const param = "a234";
const result = solution(param);
console.log("result : ", result);
