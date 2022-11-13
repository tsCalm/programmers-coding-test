/**
 * 문제 설명: 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
 * 
 * 제한사항
board는 n * n 배열입니다.
1 ≤ n ≤ 100
지뢰는 1로 표시되어 있습니다.
board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
 */
function solution(board) {
  const chA = (area) => {
    const cloneArea = [...area];
    const dangerArea = area.map(() => 0);
    area.forEach((num, idx) => {
      const bNum = cloneArea[idx - 1];
      const aNum = cloneArea[idx + 1];
      if (cloneArea[idx] === 1) {
        if (bNum === 0 || bNum === 2) {
          dangerArea[idx - 1] = 2;
          cloneArea[idx - 1] = 2;
        }
        if (aNum === 0 || aNum === 2) {
          dangerArea[idx + 1] = 2;
          cloneArea[idx + 1] = 2;
        }
        dangerArea[idx] = 2;
      }
    });
    // 현재 에리어 정보와 이전, 이후 에리어 위험지역 정보리턴
    return [cloneArea, dangerArea];
  };

  const result = [...board];
  board.forEach((area, index, array) => {
    // 이전 에리어
    const bArea = result[index - 1];
    // 이후 에리어
    const aArea = result[index + 1];
    const changeArea = chA(area);

    result[index] = changeArea[0];

    if (bArea) {
      bArea.forEach((num, idx) => {
        if (num === 0 && changeArea[1][idx] === 2) {
          bArea[idx] = 2;
        }
      });
    }
    if (aArea) {
      aArea.forEach((num, idx) => {
        if (num === 0 && changeArea[1][idx] === 2) {
          aArea[idx] = 2;
        }
      });
    }
  });
  const answer = result.flat(1).filter((num) => num === 0);
  return answer.length;
}

const param = [
  [0, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
];
const result = solution(param);
console.log("result : ", result);
