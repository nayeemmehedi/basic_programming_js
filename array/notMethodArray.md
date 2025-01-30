If you want to manipulate an array and add items at the start, end, or a specific position **without using any built-in array methods**, you can manually handle the array by iterating through it and creating a new one.

### Add Item at the Start
Here, you shift all elements to the right to make room for the new item at the beginning:

```javascript
let arr = [2, 3, 4];
let newItem = 1;

// Create a new array manually
let newArr = new Array(arr.length + 1);

// Insert the new item at the start
newArr[0] = newItem;

// Copy the rest of the items
for (let i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
}

console.log(newArr); // [1, 2, 3, 4]
```

---

### Add Item at the End
Simply create a new array that is one item longer, then copy all items from the original array and insert the new item at the last position:

```javascript
let arr = [1, 2, 3];
let newItem = 4;

// Create a new array manually
let newArr = new Array(arr.length + 1);

// Copy the original items
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
}

// Add the new item at the end
newArr[arr.length] = newItem;

console.log(newArr); // [1, 2, 3, 4]
```

---

### Add Item at a Specific Position
You can manually insert the new item into a specific position by creating a new array and copying elements before and after the desired position:

```javascript
let arr = [1, 2, 4];
let newItem = 3;
let position = 2; // Insert at index 2

// Create a new array manually
let newArr = new Array(arr.length + 1);

// Copy elements before the position
for (let i = 0; i < position; i++) {
    newArr[i] = arr[i];
}

// Insert the new item
newArr[position] = newItem;

// Copy the rest of the elements
for (let i = position; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
}

console.log(newArr); // [1, 2, 3, 4]
```

---

### Explanation
1. **At the Start**: Create a new array and shift all elements of the original array to the right.
2. **At the End**: Create a new array and copy all elements, then place the new item at the end.
3. **At a Specific Position**: Split the original array into two parts (manually using loops), insert the new item at the desired position, and append the remaining elements.

These solutions avoid all built-in array methods like `push`, `unshift`, `splice`, or `slice`.