function arrSum(arr1, arr2) {
  const sumArr1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sumArr2 = arr2.reduce((acc, curr) => acc + curr, 0);
  return sumArr1 + sumArr2;
}
