// Sorts an array of numbers, using the bubble sort algorithm.

/*

1. Declare a variable, swapped, that indicates if any values were swapped during the current iteration.
2. Use the spread operator (...) to clone the original array, arr.
3. Use a for loop to iterate over the elements of the cloned array, terminating before the last element.
4. Use a nested for loop to iterate over the segment of the array between 0 and i, 
swapping any adjacent out of order elements and setting swapped to true.
If swapped is false after an iteration, no more changes are needed, so the cloned array is returned.

*/

const bubbleSort = arr => {
  let swapped = false;
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    swapped = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) return a;
  }
  return a;
};

// Example
console.warn(bubbleSort([999, 234, 19, 5, 0])); // [1, 2, 3, 4]