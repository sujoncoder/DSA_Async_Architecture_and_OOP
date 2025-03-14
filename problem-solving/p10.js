const memoize = (fn) => {
    const caches = new Map(); // Cache to store results of function calls
    let callCount = 0; // Counter to track the number of original function calls

    // Memoized function that will be returned
    const memoizedFn = (...args) => {
        const key = JSON.stringify(args); // Convert arguments to a string for caching
        if (caches.has(key)) {
            return caches.get(key); // Return cached result if it exists
        }

        const result = fn(...args); // Call the original function
        caches.set(key, result); // Cache the result
        callCount++; // Increment call count
        return result;
    };

    // Attach the getCallCount function to the memoized function
    memoizedFn.getCallCount = () => callCount;

    return memoizedFn; // Return the memoized function
};

// Define the functions to be memoized
const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// Example usage:

// Memoize the sum function
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(2, 2)); // Output: 4 (cached result)
console.log(memoizedSum.getCallCount()); // Output: 1
console.log(memoizedSum(1, 2)); // Output: 3
console.log(memoizedSum.getCallCount()); // Output: 2

// Memoize the factorial function
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(2)); // Output: 2
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial(2)); // Output: 2 (cached result)
console.log(memoizedFactorial.getCallCount()); // Output: 2

// Memoize the Fibonacci function
const memoizedFib = memoize(fib);
console.log(memoizedFib(5)); // Output: 8
console.log(memoizedFib.getCallCount()); // Output: 1
