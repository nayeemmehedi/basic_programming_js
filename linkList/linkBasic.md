## **📌 লিংকড লিস্ট (Linked List) কি?**  
লিংকড লিস্ট হলো **ডাটা স্ট্রাকচার**, যেখানে **প্রত্যেকটি এলিমেন্ট একটি নোড (Node)** হিসেবে থাকে এবং **পরবর্তী নোডের অ্যাড্রেস ধারণ করে**।  

### **✅ লিংকড লিস্ট বনাম অ্যারে পার্থক্য**
| বিষয় | **Linked List** | **Array** |
|--------|--------------|----------|
| **মেমোরি ব্যবস্থাপনা** | ডায়নামিকভাবে মেমোরি এলোকেশন হয় | নির্দিষ্ট আকারের মেমোরি আগে থেকেই নিতে হয় |
| **অ্যাড করা/ডিলিট করা** | সহজ এবং দ্রুত (O(1) সময়) | সময়সাপেক্ষ (O(n) সময়) |
| **ডাটা অ্যাক্সেস** | O(n) সময় লাগে, কারণ ধারাবাহিকভাবে খুঁজতে হয় | O(1) সময় লাগে, কারণ সরাসরি ইনডেক্স দিয়ে অ্যাক্সেস করা যায় |

---

## **📌 লিংকড লিস্টের প্রকারভেদ**
### **✅ ১. Singly Linked List (একদিকীয় লিংকড লিস্ট)**
🔹 **প্রত্যেকটি নোডে দুটি অংশ থাকে:**  
1️⃣ **ডাটা (value)**  
2️⃣ **নেক্সট (next pointer)** → এটি পরবর্তী নোডের অ্যাড্রেস ধরে রাখে।  

### **🔥 Example: Singly Linked List**
```
[10 | next] → [20 | next] → [30 | next] → null
```
🔹 এখানে `10` পরের নোডের অ্যাড্রেস জানে, `20` পরের নোডের অ্যাড্রেস জানে, কিন্তু `30` শেষে আছে, তাই `null`।  

#### **🚀 Singly Linked List এর কোড (JavaScript)**
```javascript
class Node {
  constructor(value) {
    this.value = value;  // ডাটা
    this.next = null;    // পরবর্তী নোডের লিংক
  }
}

class LinkedList {
  constructor() {
    this.head = null; // লিংকড লিস্টের শুরু
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// ✅ লিংকড লিস্ট তৈরি করা
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);

list.display(); 
// Output: 10 20 30
```

---

### **✅ ২. Doubly Linked List (দ্বিমুখী লিংকড লিস্ট)**
🔹 **প্রত্যেক নোডে তিনটি অংশ থাকে:**  
1️⃣ **ডাটা (value)**  
2️⃣ **প্রিভিয়াস (previous pointer)** → আগের নোডের অ্যাড্রেস ধরে রাখে  
3️⃣ **নেক্সট (next pointer)** → পরবর্তী নোডের অ্যাড্রেস ধরে রাখে  

### **🔥 Example: Doubly Linked List**
```
null ← [10 | prev, next] ⇄ [20 | prev, next] ⇄ [30 | prev, next] → null
```

#### **🚀 Doubly Linked List এর কোড (JavaScript)**
```javascript
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  displayForward() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  displayBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

// ✅ ডাবলি লিংকড লিস্ট তৈরি করা
const list = new DoublyLinkedList();
list.add(10);
list.add(20);
list.add(30);

list.displayForward();  // Output: 10 20 30
list.displayBackward(); // Output: 30 20 10
```

---

### **✅ ৩. Circular Linked List (বৃত্তাকার লিংকড লিস্ট)**
🔹 শেষ নোডটি **প্রথম নোডের লিংক রাখে**, ফলে এটি সার্কুলার হয়ে যায়।  
🔹 এতে **শেষ থেকে আবার প্রথমে আসা যায়**, যা গেম বা ক্যাশ ম্যানেজমেন্টে উপযোগী।

### **🔥 Example: Circular Linked List**
```
[10 | next] → [20 | next] → [30 | next] ↺ (ফিরে 10-এ চলে যাবে)
```

#### **🚀 Circular Linked List এর কোড (JavaScript)**
```javascript
class CircularNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new CircularNode(value);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  display() {
    let current = this.head;
    if (!current) return;
    do {
      console.log(current.value);
      current = current.next;
    } while (current !== this.head);
  }
}

// ✅ সার্কুলার লিংকড লিস্ট তৈরি করা
const list = new CircularLinkedList();
list.add(10);
list.add(20);
list.add(30);

list.display(); 
// Output: 10 20 30 (তারপর আবার 10 থেকে শুরু হবে)
```

---

## **📌 লিংকড লিস্টের সময়ের জটিলতা (Time Complexity)**
| অপারেশন | **Singly Linked List** | **Doubly Linked List** | **Circular Linked List** |
|----------|----------------|----------------|----------------|
| **Insertion (শেষে)** | O(1) | O(1) | O(1) |
| **Deletion (মাঝখানে)** | O(n) | O(n) | O(n) |
| **Traversal (ঘুরে দেখা)** | O(n) | O(n) | O(n) |
| **Searching (কোনো মান খুঁজতে)** | O(n) | O(n) | O(n) |

---

## **🎯 কখন লিংকড লিস্ট ব্যবহার করবো?**
✔ **যখন ডাটা ডাইনামিকভাবে সংযোজন/মুছতে হবে** (যেমন: লাইভ স্ট্রিম চ্যাট)।  
✔ **যখন অ্যারের ফিক্সড সাইজ দরকার নেই** (যেমন: স্ট্যাক বা কুই)।  
✔ **যখন ইনসারশন/ডিলিশন বেশি দরকার** (যেমন: মেমোরি ম্যানেজমেন্ট)।  

---

## **📌 উপসংহার**
- **Singly Linked List**: শুধুমাত্র সামনে এগোনো যায়।  
- **Doubly Linked List**: সামনে ও পিছনে দুই দিকেই নেভিগেশন করা যায়।  
- **Circular Linked List**: শেষ নোড প্রথম নোডে লিংক থাকে, চক্রাকারে চলে।  

🔥 **তুমি যদি স্ট্রাকচারড ভাবে প্র্যাকটিস করো, তাহলে লিংকড লিস্ট একদম সহজ হয়ে যাবে! 🚀**