export default function getArrayDifference(arr1, arr2) {
  return arr1.filter((item1) => !arr2.find((item2) => item1 === item2));
}
