// Returns the memoized (cached) function.

/* 
1. Create an empty cache by instantiating a new Map object.
2. Return a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not.
3. The function keyword must be used in order to allow the memoized function to have its this context changed if necessary.
4. Allow access to the cache by setting it as a property on the returned function.
*/

const memoize = fn => {
  const cache = new Map();
  const cached = function (val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
// See the `anagrams` snippet.
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // returns virtually instantly since it's cached
console.log(anagramsCached.cache); // The cached anagrams map