### 1. **Traversing an Array**
You can traverse an array using a `for` loop, `for...of`, or `forEach`.

#### Example: Using a `for` loop
```javascript
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]); // Access each element
}
```

#### Example: Using `for...of`
```javascript
for (const value of a) {
  console.log(value);
}
```

---

### 2. **Deleting Values**

#### a. **Delete First Element**
- Using `shift()` (built-in):
  ```javascript
  let a = [1, 2, 3, 4, 5];
  a.shift(); // Removes the first element
  console.log(a); // Output: [2, 3, 4, 5]
  ```

- Without Methods:
  ```javascript
  let a = [1, 2, 3, 4, 5];
  for (let i = 0; i < a.length - 1; i++) {
    a[i] = a[i + 1]; // Shift elements left
  }
  a.length--; // Reduce the array size
  console.log(a); // Output: [2, 3, 4, 5]
  ```

---

#### b. **Delete Last Element**
- Using `pop()` (built-in):
  ```javascript
  let a = [1, 2, 3, 4, 5];
  a.pop(); // Removes the last element
  console.log(a); // Output: [1, 2, 3, 4]
  ```

- Without Methods:
  ```javascript
  let a = [1, 2, 3, 4, 5];
  a.length--; // Reduce the array size directly
  console.log(a); // Output: [1, 2, 3, 4]
  ```

---

#### c. **Delete Element from Middle**
- Using `splice()` (built-in):
  ```javascript
  let a = [1, 2, 3, 4, 5];
  a.splice(2, 1); // Removes the element at index 2 (3)
  console.log(a); // Output: [1, 2, 4, 5]
  ```

- Without Methods:
  ```javascript
  let a = [1, 2, 3, 4, 5];
  let index = 2; // Index of the element to remove
  for (let i = index; i < a.length - 1; i++) {
    a[i] = a[i + 1]; // Shift elements left
  }
  a.length--; // Reduce the array size
  console.log(a); // Output: [1, 2, 4, 5]
  ```

---

#### d. **Delete Element at Any Position**
You can generalize the above logic for any index.

---

### 3. **Adding Values**

#### a. **Add to the Beginning**
- Using `unshift()`:
  ```javascript
  let a = [2, 3, 4, 5];
  a.unshift(1); // Adds 1 to the beginning
  console.log(a); // Output: [1, 2, 3, 4, 5]
  ```

- Without Methods:
  ```javascript
  let a = [2, 3, 4, 5];
  for (let i = a.length; i > 0; i--) {
    a[i] = a[i - 1]; // Shift elements right
  }
  a[0] = 1; // Insert new element at the start
  console.log(a); // Output: [1, 2, 3, 4, 5]
  ```

---

#### b. **Add to the End**
- Using `push()`:
  ```javascript
  let a = [1, 2, 3, 4];
  a.push(5); // Adds 5 to the end
  console.log(a); // Output: [1, 2, 3, 4, 5]
  ```

- Without Methods:
  ```javascript
  let a = [1, 2, 3, 4];
  a[a.length] = 5; // Append directly
  console.log(a); // Output: [1, 2, 3, 4, 5]
  ```

---

#### c. **Add to the Middle**
- Using `splice()`:
  ```javascript
  let a = [1, 2, 4, 5];
  a.splice(2, 0, 3); // Adds 3 at index 2
  console.log(a); // Output: [1, 2, 3, 4, 5]
  ```

- Without Methods:
  ```javascript
  let a = [1, 2, 4, 5];
  let index = 2;
  for (let i = a.length; i > index; i--) {
    a[i] = a[i - 1]; // Shift elements right
  }
  a[index] = 3; // Insert the new element
  console.log(a); // Output: [1, 2, 3, 4, 5]
  ```

---

### 4. **Getting Values**

#### a. **Get First or Last Value**
- First Value:
  ```javascript
  console.log(a[0]); // First element
  ```

- Last Value:
  ```javascript
  console.log(a[a.length - 1]); // Last element
  ```

---

### 5. **Replace or Update Values**
```javascript
let a = [1, 2, 3, 4, 5];
a[2] = 99; // Replace the value at index 2
console.log(a); // Output: [1, 2, 99, 4, 5]
```

---

### Summary:
- You can manipulate arrays using **methods** or **manual logic**.
- Use loops for dynamic sizes.
- Update `length` property directly to trim or extend arrays.
- Always test your implementation to ensure correct behavior!