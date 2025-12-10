## Algorithms used fot the previous six days

### Brute force

    - Explore all possible solutions to find the correct one.

> Example: nested loops to check every combination or permutation.

```js
// Find all pairs that sum to target
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      // do something
    }
  }
}
```

### Hash map

    - Use key-value pairs for efficient data retrieval.

> Example: store counts or indices of elements for quick access.

```js
// Count occurrences of each element
const map = new Map();
for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1); // this is same as

  // or using an object
  // obj[arr[i]] = (obj[arr[i]] || 0) + 1
}
```

// or using a plain object

```js
const obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}
```

### Two pointer

    - Use two pointers to traverse the array from both ends or at different speeds.

> Example: one pointer at the start and one at the end, moving towards each other.

```js
// Reverse array or check for palindrome
let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] !== arr[right]) return false;
  left++;
  right--;
}
```

### Sliding window

    - Maintain a window (subarray) and slide it across the array to find optimal solutions.

> Example: fixed-size or variable-size window to calculate sums or averages.

```js
// Find max sum of subarray of length k
let sum = 0;
for (let i = 0; i < k; i++) {
  sum += arr[i];
}
// or let sum = arr.slice(0, k).reduce((a, b) => a + b, 0);

let maxSum = sum;
for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k];
  maxSum = Math.max(maxSum, sum);
}
```

### Stack data structure

    - Use a stack to keep track of elements, allowing for LIFO access.

> Example: push and pop elements to reverse order or track states.

```js
// Check for balanced parentheses
let stack = [];
for (let char of str) {
  if (char === "(") stack.push(char);
  else if (char === ")") stack.pop();
}
```

### Linear search

    - Traverse the array sequentially to find a target value.

> Example: loop through each element until the target is found.

```js
// Find index of target in array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) return i;
}
return -1;
```

### Binary search

    - Repeatedly divide the search interval in half to find a target in a sorted array.

> Example: compare target with middle element and adjust search range accordingly.

```js
// Find target in sorted array
let left = 0,
  right = arr.length - 1;
while (left <= right) {
  let mid = Math.floor((left + right) / 2); // where Math.floor is used for rounding down the result of division
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
return -1;
```
