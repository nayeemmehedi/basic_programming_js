### **1. Create (Add Elements)**

#### Add to the End:
```javascript
let arr = [1, 2, 3];
arr.push(4); // Adds 4 to the end
console.log(arr); // Output: [1, 2, 3, 4]
```

#### Add to the Beginning:
```javascript
arr.unshift(0); // Adds 0 to the beginning
console.log(arr); // Output: [0, 1, 2, 3, 4]
```

#### Add to a Specific Position:
```javascript
arr.splice(2, 0, 99); // Adds 99 at index 2
console.log(arr); // Output: [0, 1, 99, 2, 3, 4]
```

---

### **2. Read (Access Elements)**

#### Access by Index:
```javascript
let value = arr[2]; // Get the element at index 2
console.log(value); // Output: 99
```

#### Traverse All Elements:
```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Logs each element
}
```

#### Using `for...of`:
```javascript
for (let value of arr) {
  console.log(value); // Logs each element
}
```

---

### **3. Update (Modify Elements)**

#### Update by Index:
```javascript
arr[2] = 50; // Change the element at index 2 to 50
console.log(arr); // Output: [0, 1, 50, 2, 3, 4]
```

#### Update Using `map()`:
```javascript
arr = arr.map((value) => (value === 50 ? 100 : value)); // Replace 50 with 100
console.log(arr); // Output: [0, 1, 100, 2, 3, 4]
```

---

### **4. Delete (Remove Elements)**

#### Remove the Last Element:
```javascript
arr.pop(); // Removes the last element
console.log(arr); // Output: [0, 1, 100, 2, 3]
```

#### Remove the First Element:
```javascript
arr.shift(); // Removes the first element
console.log(arr); // Output: [1, 100, 2, 3]
```

#### Remove by Index:
```javascript
arr.splice(1, 1); // Removes 1 element at index 1
console.log(arr); // Output: [1, 2, 3]
```

#### Remove All Occurrences of a Value:
```javascript
arr = arr.filter((value) => value !== 2); // Removes all 2s
console.log(arr); // Output: [1, 3]
```

---

### **5. Combine CRUD Example**

Here’s an example implementing all CRUD operations:
```javascript
let arr = []; // Create an empty array

// Create
arr.push(10, 20, 30); // Add elements
console.log("After Create:", arr); // Output: [10, 20, 30]

// Read
console.log("Read First Element:", arr[0]); // Output: 10

// Update
arr[1] = 25; // Update the second element
console.log("After Update:", arr); // Output: [10, 25, 30]

// Delete
arr.splice(1, 1); // Delete the second element
console.log("After Delete:", arr); // Output: [10, 30]
```

---

### Advanced Tips:
- **Dynamic Manipulation**: Use loops for operations on dynamic-sized arrays.
- **Immutable Updates**: Prefer `map`, `filter` for immutable operations.
- **Optimization**: For performance-critical scenarios, direct index manipulation (`arr[i]`) is faster.

With these techniques, you can effectively manage array data in JavaScript!