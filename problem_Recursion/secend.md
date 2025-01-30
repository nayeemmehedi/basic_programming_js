Here are **5-10 recursion problems** where intermediate values are stored and processed during the recursive calls:

---

### **1. Find Maximum in an Array**
**Problem:** Find the maximum value in an array using recursion.  
**Solution:**  
```javascript
function findMax(arr, n = arr.length) {
  if (n === 1) {
    return arr[0];
  }
  const restMax = findMax(arr, n - 1);
  return arr[n - 1] > restMax ? arr[n - 1] : restMax;
}
console.log(findMax([3, 1, 4, 1, 5, 9])); // Output: 9
```

---

### **2. Count Occurrences of an Element**
**Problem:** Count the occurrences of a specific element in an array.  
**Solution:**  
```javascript
function countOccurrences(arr, target, n = arr.length) {
  if (n === 0) {
    return 0;
  }
  const countRest = countOccurrences(arr, target, n - 1);
  return arr[n - 1] === target ? countRest + 1 : countRest;
}
console.log(countOccurrences([1, 2, 3, 2, 2, 4, 2], 2)); // Output: 4
```

---

### **3. Find Sum of Array Elements**
**Problem:** Find the sum of all elements in an array using recursion.  
**Solution:**  
```javascript
function findSum(arr, n = arr.length) {
  if (n === 0) {
    return 0;
  }
  const restSum = findSum(arr, n - 1);
  return restSum + arr[n - 1];
}
console.log(findSum([1, 2, 3, 4, 5])); // Output: 15
```

---

### **4. Reverse an Array**
**Problem:** Reverse an array using recursion.  
**Solution:**  
```javascript
function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseArray(arr, start + 1, end - 1);
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
```

---

### **5. Check if Array is Sorted**
**Problem:** Check if an array is sorted in ascending order.  
**Solution:**  
```javascript
function isSorted(arr, n = arr.length) {
  if (n === 1) {
    return true;
  }
  const sortedRest = isSorted(arr, n - 1);
  return sortedRest && arr[n - 2] <= arr[n - 1];
}
console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([1, 3, 2, 4, 5])); // Output: false
```

---

### **6. Product of Array Elements**
**Problem:** Calculate the product of all elements in an array using recursion.  
**Solution:**  
```javascript
function productOfArray(arr, n = arr.length) {
  if (n === 0) {
    return 1;
  }
  const restProduct = productOfArray(arr, n - 1);
  return restProduct * arr[n - 1];
}
console.log(productOfArray([1, 2, 3, 4])); // Output: 24
```

---

### **7. Find the Index of an Element**
**Problem:** Find the index of a target element in an array using recursion.  
**Solution:**  
```javascript
function findIndex(arr, target, index = 0) {
  if (index === arr.length) {
    return -1; // Element not found
  }
  if (arr[index] === target) {
    return index;
  }
  return findIndex(arr, target, index + 1);
}
console.log(findIndex([5, 3, 8, 6, 2], 8)); // Output: 2
```

---

### **8. Find GCD of Array**
**Problem:** Find the greatest common divisor (GCD) of an array of numbers.  
**Solution:**  
```javascript
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function gcdOfArray(arr, n = arr.length) {
  if (n === 1) {
    return arr[0];
  }
  const restGCD = gcdOfArray(arr, n - 1);
  return gcd(arr[n - 1], restGCD);
}
console.log(gcdOfArray([12, 15, 21])); // Output: 3
```

---

### **9. Flatten a Nested Array**
**Problem:** Flatten a nested array using recursion.  
**Solution:**  
```javascript
function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  return arr.reduce((flat, item) => flat.concat(flattenArray(item)), []);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
```

---

### **10. Count Paths in a Grid**
**Problem:** Count the number of paths in an `m x n` grid from top-left to bottom-right.  
**Solution:**  
```javascript
function countPaths(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  return countPaths(m - 1, n) + countPaths(m, n - 1);
}
console.log(countPaths(3, 3)); // Output: 6
```

---

These examples demonstrate how recursive calls process intermediate values and store results for further computation. Let me know if you need more such examples or a detailed explanation of any solution!