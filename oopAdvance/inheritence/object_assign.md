## **🔹 Object.assign() সহজ ভাষায় ব্যাখ্যা ও ব্যবহার**  

**`Object.assign(target, ...sources)`** হলো JavaScript-এর একটি বিল্ট-ইন মেথড, যা **একটি অবজেক্টে (target) অন্যান্য অবজেক্টের (sources) প্রপার্টি কপি করে।**  

---

### **✅ ১. Object.assign() এর Basic Structure**
```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source);

console.log(target); // Output: { a: 1, b: 2, c: 3 }
```
🔹 এখানে **`source` অবজেক্টের সমস্ত প্রপার্টি `target` অবজেক্টে কপি হয়েছে।**  
✔️ **`target` পরিবর্তিত হয়েছে, কিন্তু `source` অবজেক্ট অপরিবর্তিত আছে।**  

---

## **🎯 কিভাবে সহজে মনে রাখবে?**
**`target` নিজেই update হয় এবং `sources` থেকে নতুন প্রপার্টি যোগ হয়।**  
মনে রাখার জন্য এই নিয়ম ফলো করো:  
> **"target অবজেক্টের মধ্যে sources এর সব কিছু ঢুকে যায়!"**  

---

### **✅ ২. Multiple Objects Merge (একাধিক অবজেক্ট একত্র করা)**
```javascript
const obj1 = { name: "Nayeem" };
const obj2 = { age: 25 };
const obj3 = { country: "Bangladesh" };

const mergedObj = Object.assign({}, obj1, obj2, obj3);

console.log(mergedObj); 
// Output: { name: 'Nayeem', age: 25, country: 'Bangladesh' }
```
✔️ এখানে **`obj1, obj2, obj3` থেকে সব ডাটা নতুন একটি অবজেক্টে কপি হয়েছে।**  
✔️ **`{}` নতুন অবজেক্ট হিসেবে ব্যবহার করা হয়েছে, যাতে `obj1` পরিবর্তিত না হয়।**  

---

### **✅ ৩. Override Property (আগের ভ্যালু পরিবর্তন করে নতুন ভ্যালু সেট করা)**
```javascript
const user = { name: "Nayeem", age: 25 };
const updatedInfo = { age: 30, country: "Bangladesh" };

Object.assign(user, updatedInfo);

console.log(user); 
// Output: { name: 'Nayeem', age: 30, country: 'Bangladesh' }
```
✔️ **`age: 25` থেকে `age: 30` হয়ে গেছে, কারণ নতুন অবজেক্ট আগের ভ্যালুকে ওভাররাইট করেছে।**  

---

### **✅ ৪. Object.assign() ব্যবহার করে Default Value সেট করা**
ধরো, তুমি এমন একটি ফাংশন বানাবে যেখানে **ডিফল্ট সেটিংস থাকবে, কিন্তু ইউজার চাইলে নিজের সেটিংস দিতে পারবে।**  

```javascript
function createUser(settings) {
  const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "English"
  };

  return Object.assign({}, defaultSettings, settings);
}

const user1 = createUser({ theme: "dark", language: "Bangla" });
console.log(user1); 
// Output: { theme: 'dark', notifications: true, language: 'Bangla' }
```
✔️ **ইউজার যদি কোনো ভ্যালু দেয়, তাহলে সেটি সেট হবে, না হলে ডিফল্ট ভ্যালু থাকবে।**  

---

### **✅ ৫. Object.assign() ব্যবহার করে Composition**
Composition-এর ক্ষেত্রে `Object.assign()` অনেক গুরুত্বপূর্ণ, কারণ এটি একটি অবজেক্টে একাধিক বৈশিষ্ট্য যোগ করতে সাহায্য করে।  

```javascript
const CanFly = {
  fly() {
    console.log(`${this.name} is flying!`);
  }
};

const CanAttack = {
  attack() {
    console.log(`${this.name} is attacking!`);
  }
};

class SuperHero {
  constructor(name) {
    this.name = name;
    Object.assign(this, CanFly, CanAttack); // ✅ একাধিক ক্ষমতা যোগ করা হচ্ছে
  }
}

const hero = new SuperHero("Superman");
hero.fly();   // Output: Superman is flying!
hero.attack(); // Output: Superman is attacking!
```
✔️ এখানে **SuperHero-তে একসাথে `CanFly` ও `CanAttack` ফিচার যোগ করা হয়েছে।**  
✔️ এটি **Inheritance ছাড়াই সহজভাবে নতুন বৈশিষ্ট্য যোগ করতে সাহায্য করে।**  

---

## **🔥 Object.assign() কেন ব্যবহার করবো?**
🚀 **Composition সহজ করতে সাহায্য করে।**  
🚀 **একাধিক অবজেক্ট একত্র করা যায়।**  
🚀 **Default Value সেট করা যায়।**  
🚀 **অবজেক্টের প্রপার্টি Update বা Override করা যায়।**  

---

## **📌 মনে রাখার সহজ উপায়**
🔹 `Object.assign(target, source)` → **"Target-এর মধ্যে Source ঢুকে যায়!"**  
🔹 **"Source-এর যেকোনো property target-এ merge হবে এবং আগের মান replace করবে!"**  

---

✅ যদি বুঝতে সমস্যা হয়, আমাকে জানাও! 😊