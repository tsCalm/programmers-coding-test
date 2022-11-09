/**
 * 문제 설명: 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
 * 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
 * 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
 * 제한사항
chicken은 정수입니다.
0 ≤ chicken ≤ 1,000,000
 */

function solution(chicken) {
  let service = 0;
  let coupon = chicken;
  const getService = (cp) => {
    const share = Math.floor(cp / 10);
    const remainder = cp % 10;
    service += share;
    coupon = remainder + share;
  };
  while (true) {
    getService(coupon);
    if (coupon < 10) break;
  }
  console.log(service, coupon);
  return service;
}
/**
 * 몫 1당 서비스 한 마리, 나머지 1당 쿠폰 1개
 * 1. 몫을 구하고 나머지 쿠폰을 구한다.
 *
 * 1. 쿠폰 583장, service 58마리 쿠폰 3장 totalService: 58
 * 2. 쿠폰 61장 , service 6마리, 쿠폰 한장 totalService: 64
 * 3. 쿠폰 7장 , service 0마리, 쿠폰 0장 totalService: 64, 남은 쿠폰 7장
 */
const param = 1081;
const result = solution(param);
console.log("result : ", result);
