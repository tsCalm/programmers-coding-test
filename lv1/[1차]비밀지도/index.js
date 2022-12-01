const convertArr = (n, arr) => {
  return arr.map((num) => {
    const cr = num.toString(2);
    const crArr = cr.split("");
    const z = "0".repeat(n - crArr.length);
    return z + cr;
  });
};
const combineResult = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  return arr1
    .map((char, idx) => {
      if (char === "0" && arr2[idx] === "0") return " ";
      return "#";
    })
    .join("");
};
function solution(n, arr1, arr2) {
  const ca1 = convertArr(n, arr1);
  const ca2 = convertArr(n, arr2);
  return ca1.map((str, idx) => combineResult(str, ca2[idx]));
}
const param = [9, 20, 28, 18, 11];
const param2 = [30, 1, 21, 17, 28];
const result = solution(5, param, param2);
console.log("result : ", result);
