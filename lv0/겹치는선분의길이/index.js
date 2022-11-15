/**
 * 문제 설명: 빨간색, 초록색, 파란색 선분이 x축 위에 있습니다. 
 * 세 선분의 x좌표 시작과 끝이 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 
 * 두 개 이상의 선분이 겹치는 부분의 길이를return 하도록 solution 함수를 완성해보세요.
 * lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
 * 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 2만큼 겹쳐있습니다.
 * 
 * 제한사항
lines의 길이 = 3
lines의 원소의 길이 = 2
모든 선분은 길이가 1 이상입니다.
lines의 원소는 [a, b] 형태이며, a, b는 각각 양 끝점 중 하나입니다.
-100 ≤ a < b ≤ 100
 */

function solution(lines) {
  const getNums = ([start, end]) => {
    const rst = [];
    for (let i = start; i <= end; i++) {
      rst.push(i);
    }
    return rst;
  };
  const sliceArr = (arr, store) => {
    const arr_ = [...arr];
    let bv = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const mv = arr[i] - bv;
      if (mv !== 1) {
        arr_.splice(i, 1, ",");
        break;
      }

      bv = arr[i];
    }
    return arr_;
  };
  let temp = [];

  const numbers = lines.map((arr) => getNums(arr));
  while (numbers.length > 1) {
    const arr = numbers.shift();
    numbers.forEach((line) => {
      const item = line.filter((num) => arr.includes(num));
      temp.push(item);
    });
  }
  temp = temp.filter((arr) => arr.length > 1);
  const result = [...new Set(temp.flat(1))].sort((a, b) => a - b);
  if (result.length < 2) return 0;
  const test = sliceArr(result, []);
  return result.length > 1 ? result.at(-1) - result[0] : 0;
}

const param = [
  [0, 5],
  [9, 15],
  [1, 10],
];
const result = solution(param);
console.log("result : ", result);
