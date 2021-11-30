// Sorts an array of numbers, using the quicksort algorithm.

/*
  1. Use recursion.
  2. Use the spread operator (...) to clone the original array, arr.
  3. If the length of the array is less than 2, return the cloned array.
  4. Use Math.floor() to calculate the index of the pivot element.
  5. Use Array.prototype.reduce() and Array.prototype.push() to split the array into two subarrays. The first one contains elements smaller than or equal to pivot and the second on elements greather than it. Destructure the result into two arrays.
  6. Recursively call quickSort() on the created subarrays.
*/

const quickSort = arr => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};