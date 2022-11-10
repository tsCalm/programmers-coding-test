/**
 * 문제 설명: 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
 * 제한사항
 * 2 < common의 길이 < 1,000
 * -1,000 < common의 원소 < 2,000
 * 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
 * 공비가 0인 경우는 없습니다.
 */

function solution(common) {
  const discCo = () => {
    const one = common[0];
    const two = common[1];
    const three = common[2];

    const oneDiff = two - one;
    const twoDiff = three - two;
    if (oneDiff === twoDiff)
      return {
        key: "등차수열",
        value: oneDiff,
      };

    const ratio = two / one;
    return {
      key: "등비수열",
      value: ratio,
    };
  };
  const coLastV = common.at(-1);
  const answer = discCo();
  return answer.key === "등차수열"
    ? coLastV + answer.value
    : coLastV * answer.value;
}

const param = [2, 4, 8];
/**
 * 1. 등차인지 등비인지를 판별한다.
 * 2. 등차 또는 등비를 구한다.
 * 3. common 배열의 length -1 값에 해당 공차 또는 공비를 계산해서 리턴한다.
 */
const result = solution(param);
console.log("result : ", result);
