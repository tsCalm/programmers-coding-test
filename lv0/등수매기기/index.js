/**
 * 문제 설명: 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
 * 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
0 ≤ score[0], score[1] ≤ 100
1 ≤ score의 길이 ≤ 10
score의 원소 길이는 2입니다.
score는 중복된 원소를 갖지 않습니다.
 */
function solution(score) {
  const avgSet = new Set();
  let scoreArr = score.map((scArr, index) => {
    const avgSc = (scArr[0] + scArr[1]) / 2;
    avgSet.add(avgSc);
    return {
      index,
      avgSc,
      order: -1,
    };
  });
  scoreArr.sort((a, b) => b.avgSc - a.avgSc);
  const avgSetArr = [...avgSet]
    .map((avgSc, idx) => {
      const count = scoreArr.filter((obj) => obj.avgSc === avgSc).length;
      return {
        avgSc,
        count,
      };
    })
    .sort((a, b) => b.avgSc - a.avgSc);
  let order = 1;
  avgSetArr.forEach((obj) => {
    const comAvg = scoreArr.filter((el) => el.avgSc === obj.avgSc);
    comAvg.forEach((chObj) => {
      chObj.order = order;
    });
    order += obj.count;
  });
  scoreArr.sort((a, b) => a.index - b.index);
  return scoreArr.map((obj) => obj.order);
}
