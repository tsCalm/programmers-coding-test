/**
 * 문제설명 :
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 *
 * 제한사항 :
 * s는 길이가 1 이상, 100이하인 스트링입니다.
 */

function solution(s) {
  const sArr = s.split("");
  const sLenCheck = sArr.length % 2 === 0;
  const start = sLenCheck
    ? Math.floor(sArr.length / 2) - 1
    : Math.ceil(sArr.length / 2) - 1;
  const end = sLenCheck ? start + 2 : start + 1;
  const answer = sArr.slice(start, end);
  return answer.join("");
}

const param = "abcde";
const result = solution(param);

console.log("result : ", result);
