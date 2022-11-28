/**
 * 문제설명 :
 * 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,
 * solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
 *
 * 제한사항 :
 * n은 길이 10,000이하인 자연수입니다.
 */
function solution(n) {
  if (n <= 0) return "";
  const items = ["수박", "수"];
  const nCheck = n % 2 === 0;
  const loopCount = Math.floor(n / 2);
  return nCheck
    ? items[0].repeat(loopCount)
    : items[0].repeat(loopCount) + items[1];
}

const param = 2;
const result = solution(param);

console.log("result : ", result);
