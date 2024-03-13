export default function analyzeArray(arr) {
  const avg = arr.reduce((accu, actual) => {
    return accu + actual / arr.length;
  }, 0);

  const minMax = (arr, operation) => {
    let orderArr = arr.sort((a, b) => a - b);
    return operation ? orderArr[0] : orderArr[orderArr.length - 1];
  };
  return {
    average: avg,
    min: minMax(arr, true),
    max: minMax(arr, false),
    length: arr.length,
  };
}
