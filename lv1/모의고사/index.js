/**
 * 문제설명 :
 * 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 *
 * 제한사항 :
 * 시험은 최대 10,000 문제로 구성되어있습니다.
 * 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
 * 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 */

/**
 * 소수 조건
 * 1. 2를 제외한 짝수는 전부 소수가 아님
 * 2. 제곱근 보다 작은 2이상의 자연수로 나누어 떨어지면 소수가 아님
 */
function solution(answers) {
  const one = {
    name: 1,
    repeatArr: [1, 2, 3, 4, 5],
    answerCount: 0,
  };
  const two = {
    name: 2,
    repeatArr: [2, 1, 2, 3, 2, 4, 2, 5],
    answerCount: 0,
  };
  const three = {
    name: 3,
    repeatArr: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    answerCount: 0,
  };

  const getIdx = (objs, answer, idx) => {
    for (let obj of objs) {
      const index =
        idx > obj.repeatArr.length - 1 ? idx % obj.repeatArr.length : idx;
      if (obj.repeatArr[index] === answer) obj.answerCount++;
    }
  };
  answers.forEach((num, idx) => {
    getIdx([one, two, three], num, idx);
  });
  const answer = [one, two, three].sort((a, b) => {
    return b.answerCount - a.answerCount;
  });
  return answer
    .filter((obj) => obj.answerCount === answer[0].answerCount)
    .map((obj) => obj.name);
}
const param = [1, 3, 2, 4, 2];
const result = solution(param);

console.log("result : ", result);
