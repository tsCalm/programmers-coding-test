/**
 * 문제 설명: 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * 제한사항
 * 0 <denum1, num1, denum2, num2 < 1,000
 */
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
function solution(denum1, num1, denum2, num2) {
  const bigNum = num1 > num2 ? num1 : num2;
  const smallNum = num1 > num2 ? num2 : num1;

  // 최소공배수
  let temp1 = (bigNum * smallNum) / gcd(bigNum, smallNum);
  // 분자에 곱해야하는 값
  const v1 = temp1 / num1;
  const v2 = temp1 / num2;

  const de = denum1 * v1 + denum2 * v2;
  // 최대공약수
  let temp2 = gcd(de, temp1);
  return temp2 === 1 ? [de, temp1] : [de / temp2, temp1 / temp2];
}

const denum1 = 9;
const num1 = 2;
const denum2 = 1;
const num2 = 3;

/**
 * 분모의 최소공배수를 구한다
 * 각각의 분모에 맞는 수를 곱해준다. -> 각각을 변수에 저장
 * 저장된 변수 만큼 분자도 변수를 곱해준다.
 * 분모,분자를 합한 배열을 리턴한다
 */
const result = solution(denum1, num1, denum2, num2);
console.log("result : ", result);
