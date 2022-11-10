/**
 * 문제 설명: 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 * 제한사항
 * 0 < array의 길이 < 100
 * 0 ≤ array의 원소 < 1000
 */

function solution(array) {
  // if (array.length === 1) return array[0];

  const set = new Set(array);
  const coArr = [...set].map((num) => {
    return {
      num,
      count: 0,
    };
  });
  if (coArr.length === 1) return coArr[0].num;
  array.forEach((num) => {
    const findNum = coArr.find((obj) => obj.num === num);
    findNum.count++;
  });
  coArr.sort((a, b) => b.count - a.count);
  if (coArr[0].count === coArr[1].count) return -1;
  return coArr[0].num;
}

const param = [1];
const result = solution(param);
console.log("result : ", result);
