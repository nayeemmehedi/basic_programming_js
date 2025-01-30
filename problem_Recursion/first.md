Here are **20 recursion examples** ranging from medium to complex problems, along with solutions:

---

### **1. Fibonacci Sequence**
**Problem:** Find the nth Fibonacci number.  
**Solution:**  
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8
```

---

### **2. Factorial Calculation**
**Problem:** Calculate the factorial of a given number.  
**Solution:**  
```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

---

### **3. Sum of Digits**
**Problem:** Find the sum of digits of a number.  
**Solution:**  
```javascript
function sumOfDigits(n) {
  if (n === 0) return 0;
  return n % 10 + sumOfDigits(Math.floor(n / 10));
}
console.log(sumOfDigits(1234)); // Output: 10
```

---

### **4. Reverse a String**
**Problem:** Reverse a string using recursion.  
**Solution:**  
```javascript
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello")); // Output: "olleh"
```

---

### **5. Power Calculation**
**Problem:** Calculate `x^n`.  
**Solution:**  
```javascript
function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}
console.log(power(2, 3)); // Output: 8
```

---

### **6. Check Palindrome**
**Problem:** Check if a string is a palindrome.  
**Solution:**  
```javascript
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("radar")); // Output: true
```

---

### **7. Tower of Hanoi**
**Problem:** Solve Tower of Hanoi for n disks.  
**Solution:**  
```javascript
function towerOfHanoi(n, from, to, aux) {
  if (n === 0) return;
  towerOfHanoi(n - 1, from, aux, to);
  console.log(`Move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, aux, to, from);
}
towerOfHanoi(3, "A", "C", "B");
// Output: Steps to move disks
```

---

### **8. Binary Search**
**Problem:** Perform binary search using recursion.  
**Solution:**  
```javascript
function binarySearch(arr, target, left, right) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  return binarySearch(arr, target, mid + 1, right);
}
console.log(binarySearch([1, 2, 3, 4, 5], 3, 0, 4)); // Output: 2
```

---

### **9. String Permutations**
**Problem:** Generate all permutations of a string.  
**Solution:**  
```javascript
function permutations(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    permutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
  }
}
permutations("abc"); // Output: All permutations of "abc"
```

---

### **10. Subset Sum**
**Problem:** Check if a subset with a given sum exists.  
**Solution:**  
```javascript
function subsetSum(arr, n, sum) {
  if (sum === 0) return true;
  if (n === 0) return false;
  if (arr[n - 1] > sum) return subsetSum(arr, n - 1, sum);
  return subsetSum(arr, n - 1, sum) || subsetSum(arr, n - 1, sum - arr[n - 1]);
}
console.log(subsetSum([3, 34, 4, 12, 5, 2], 6, 9)); // Output: true
```

---

### **11. Word Search in Grid**
**Problem:** Check if a word exists in a grid.  
**Solution:**  
```javascript
function wordSearch(board, word, i, j, idx) {
  if (idx === word.length) return true;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[idx]) return false;
  const temp = board[i][j];
  board[i][j] = "#";
  const found = wordSearch(board, word, i + 1, j, idx + 1) ||
                wordSearch(board, word, i - 1, j, idx + 1) ||
                wordSearch(board, word, i, j + 1, idx + 1) ||
                wordSearch(board, word, i, j - 1, idx + 1);
  board[i][j] = temp;
  return found;
}
console.log(wordSearch([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], 'ABCCED', 0, 0, 0)); // Output: true
```

---

### **12. Generate Parentheses**
**Problem:** Generate all combinations of balanced parentheses.  
**Solution:**  
```javascript
function generateParentheses(n, open = 0, close = 0, str = "") {
  if (str.length === 2 * n) {
    console.log(str);
    return;
  }
  if (open < n) generateParentheses(n, open + 1, close, str + "(");
  if (close < open) generateParentheses(n, open, close + 1, str + ")");
}
generateParentheses(3); // Output: All valid parentheses combinations
```

---

### **13. N-Queens Problem**
**Problem:** Place N queens on an NxN chessboard.  
**Solution:**  
```javascript
function nQueens(board, row, n) {
  if (row === n) {
    console.log(board.map(row => row.join(" ")).join("\n"), "\n");
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col, n)) {
      board[row][col] = "Q";
      nQueens(board, row + 1, n);
      board[row][col] = ".";
    }
  }
}
function isSafe(board, row, col, n) {
  for (let i = 0; i < row; i++) if (board[i][col] === "Q") return false;
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j] === "Q") return false;
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) if (board[i][j] === "Q") return false;
  return true;
}
const n = 4;
nQueens(Array.from({ length: n }, () => Array(n).fill(".")), 0, n);
```

---

Let me know if you need detailed explanations for any of these examples!