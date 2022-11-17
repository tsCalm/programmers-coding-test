/**
 * 문제 설명: 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
 * [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
 * 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 * 
 * 제한사항
0 ≤ dots의 원소 ≤ 100
dots의 길이 = 4
dots의 원소의 길이 = 2
dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.
 */

// 기울기 구하는 공식
function getAngle([x1, y1], [x2, y2]) {
  var rad = Math.atan2(y2 - y1, x2 - x1);
  return (rad * 180) / Math.PI;
}

function solution(dots) {
  let answer = [];
  const tanArr = dots
    .map((arr, index, arrs) => {
      return arrs
        .map((ar, idx) => {
          if (arr === ar) return null;
          return getAngle(arr, ar);
        })
        .filter((item) => item !== null);
    })
    .flat(1);
  tanArr.forEach((tan) => {
    const findedTan = answer.find((item) => item.key === tan);
    if (!findedTan) {
      answer.push({
        key: tan,
        count: 1,
      });
    } else {
      findedTan.count++;
    }
  });
  // const fhl = getAngle(dots[0], dots[2]);
  // const shl = getAngle(dots[1], dots[3]);
  // const fvl = getAngle(dots[0], dots[1]);
  // const svl = getAngle(dots[2], dots[3]);
  // if (fhl === shl) answer = 1;
  // if (fvl === svl) answer = 1;
  return answer.filter((item) => item.count >= 2).length > 0 ? 1 : 0;
}

const param = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];
const result = solution(param);
console.log("result : ", result);
