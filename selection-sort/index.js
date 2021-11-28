// Sorts an array of numbers, using the selection sort algorithm.

/*

1. Use the spread operator (...) to clone the original array, arr.
2. Use a for loop to iterate over elements in the array.
3. Use Array.prototype.slice() and Array.prototype.reduce() to find the index of the minimum element in the subarray 
   to the right of the current index. Perform a swap, if necessary.
*/

const selectionSort = arr => {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    const min = a
      .slice(i + 1)
      .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
};