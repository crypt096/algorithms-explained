// Sorts an array of numbers, using the merge sort algorithm.

/*
  1. Use recursion.
  2. Use the spread operator (...) to clone the original array, arr.
  3. If the length of the array is less than 2, return the cloned array.
  4. Use Math.floor() to calculate the index of the pivot element.
  5. Use Array.prototype.reduce() and Array.prototype.push() to split the array into two subarrays. The first one contains elements smaller than or equal to pivot and the second on elements greather than it. Destructure the result into two arrays.
  6. Recursively call quickSort() on the created subarrays.
*/

const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, mid));
  const r = mergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
};