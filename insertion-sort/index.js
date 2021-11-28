// Sorts an array of numbers, using the insertion sort algorithm.

/*

1. Use Array.prototype.reduce() to iterate over all the elements in the given array.
2. If the length of the accumulator is 0, add the current element to it.
3. Use Array.prototype.some() to iterate over the results in the accumulator until the correct position is found.
4. Use Array.prototype.splice() to insert the current element into the accumulator.

*/

const insertionSort = arr =>
  arr.reduce((acc, x) => {
    if (!acc.length) return [x];
    acc.some((y, j) => {
      if (x <= y) {
        acc.splice(j, 0, x);
        return true;
      }
      if (x > y && j === acc.length - 1) {
        acc.splice(j + 1, 0, x);
        return true;
      }
      return false;
    });
    return acc;
  }, []);