### **লাইন-বাই-লাইন ভিজুয়ালাইজেশন: `findMin` ফাংশন**

আমরা ধাপে ধাপে ফাংশনটি কীভাবে কাজ করছে তা দেখব। এখানে ইনপুট অ্যারে `arr = [1, 3, 5, 1, 3, -5]`। 

---

### **কোড:**

```javascript
function findMin(arr, n = arr.length) {
    // Base case: if there is only one element
    if (n === 1) {
      return arr[0];
    }
  
    // Recursive call for the rest of the array
    const restMin = findMin(arr, n - 1);
    console.log(restMin);
  
    // Return the smaller of the current element or the result of the recursive call
    return arr[n - 1] < restMin ? arr[n - 1] : restMin;
}
```

---

### **ভিজুয়ালাইজেশন (ধাপে ধাপে)**

#### **ইনপুট:** `[1, 3, 5, 1, 3, -5]`
- প্রথমে `n`-এর ডিফল্ট মান `arr.length = 6`

---

### **প্রথম কল (n = 6):**

1. লাইন `if (n === 1)`:
   - `n` ৬, তাই বেস কেসে যাবে না।
2. লাইন `const restMin = findMin(arr, n - 1)`:
   - **Recursive Call:** `findMin(arr, 5)`-এ যায়।
   - বাকি অ্যারে: `[1, 3, 5, 1, 3]`।

---

### **দ্বিতীয় কল (n = 5):**

1. লাইন `if (n === 1)`:
   - `n` ৫, তাই বেস কেসে যাবে না।
2. লাইন `const restMin = findMin(arr, n - 1)`:
   - **Recursive Call:** `findMin(arr, 4)`-এ যায়।
   - বাকি অ্যারে: `[1, 3, 5, 1]`।

---

### **তৃতীয় কল (n = 4):**

1. লাইন `if (n === 1)`:
   - `n` ৪, তাই বেস কেসে যাবে না।
2. লাইন `const restMin = findMin(arr, n - 1)`:
   - **Recursive Call:** `findMin(arr, 3)`-এ যায়।
   - বাকি অ্যারে: `[1, 3, 5]`।

---

### **চতুর্থ কল (n = 3):**

1. লাইন `if (n === 1)`:
   - `n` ৩, তাই বেস কেসে যাবে না।
2. লাইন `const restMin = findMin(arr, n - 1)`:
   - **Recursive Call:** `findMin(arr, 2)`-এ যায়।
   - বাকি অ্যারে: `[1, 3]`।

---

### **পঞ্চম কল (n = 2):**

1. লাইন `if (n === 1)`:
   - `n` ২, তাই বেস কেসে যাবে না।
2. লাইন `const restMin = findMin(arr, n - 1)`:
   - **Recursive Call:** `findMin(arr, 1)`-এ যায়।
   - বাকি অ্যারে: `[1]`।

---

### **ষষ্ঠ কল (n = 1):**

1. লাইন `if (n === 1)`:
   - **True:** এখানে বেস কেস পূরণ হয়েছে।
2. লাইন `return arr[0]`:
   - রিটার্ন করে: `1`

---

### **রিটার্নিং প্রসেস শুরু হয় (পিছনে ফিরে আসে):**

#### **পঞ্চম কল (n = 2):**
1. `restMin = 1` (আগের কল থেকে পাওয়া রিটার্ন মান)।
2. `return arr[n - 1] < restMin ? arr[n - 1] : restMin`:
   - `arr[1] = 3` এবং `restMin = 1`
   - `3 < 1`? না → রিটার্ন `1`

---

#### **চতুর্থ কল (n = 3):**
1. `restMin = 1` (আগের কল থেকে পাওয়া রিটার্ন মান)।
2. `return arr[n - 1] < restMin ? arr[n - 1] : restMin`:
   - `arr[2] = 5` এবং `restMin = 1`
   - `5 < 1`? না → রিটার্ন `1`

---

#### **তৃতীয় কল (n = 4):**
1. `restMin = 1` (আগের কল থেকে পাওয়া রিটার্ন মান)।
2. `return arr[n - 1] < restMin ? arr[n - 1] : restMin`:
   - `arr[3] = 1` এবং `restMin = 1`
   - `1 < 1`? না → রিটার্ন `1`

---

#### **দ্বিতীয় কল (n = 5):**
1. `restMin = 1` (আগের কল থেকে পাওয়া রিটার্ন মান)।
2. `return arr[n - 1] < restMin ? arr[n - 1] : restMin`:
   - `arr[4] = 3` এবং `restMin = 1`
   - `3 < 1`? না → রিটার্ন `1`

---

#### **প্রথম কল (n = 6):**
1. `restMin = 1` (আগের কল থেকে পাওয়া রিটার্ন মান)।
2. `return arr[n - 1] < restMin ? arr[n - 1] : restMin`:
   - `arr[5] = -5` এবং `restMin = 1`
   - `-5 < 1`? হ্যাঁ → রিটার্ন `-5`

---

### **ফলাফল (Final Output):**
```javascript
console.log(findMin([1, 3, 5, 1, 3, -5]));
// Output: -5
```

---

### **চিন্তা করার টিপস:**
- প্রতিটি রিকারশন কলে শুধু এই ধাপে কী ঘটছে তা ভাবুন।
- বাকি কাজ রিকারশন নিজেই করে নেবে।
- বেস কেসে পৌঁছানোর পর ফলাফল ধীরে ধীরে উপরের দিকে ফিরে আসে।