/**
 * 문제 설명: 머쓱이는 프로그래머스에 로그인하려고 합니다. 
 * 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
회원들의 아이디는 문자열입니다.
회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
회원들의 패스워드는 숫자로 구성된 문자열입니다.
회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
id_pw의 길이는 2입니다.
id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다.
1 ≤ 아이디의 길이 ≤ 15
1 ≤ 비밀번호의 길이 ≤ 6
1 ≤ db의 길이 ≤ 10
db의 원소의 길이는 2입니다.
 */
function solution(id_pw, db) {
  const findUser = db.find((item) => item[0] === id_pw[0]);
  if (!findUser) return "fail";
  if (findUser[1] !== id_pw[1]) return "wrong pw";
  return "login";
}
