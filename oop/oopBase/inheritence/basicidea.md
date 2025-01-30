### ইনহেরিটেন্স (Inheritance) A to Z | JavaScript (বাংলা)  

> **ইনহেরিটেন্স (Inheritance)** হলো অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)-এর একটি গুরুত্বপূর্ণ কনসেপ্ট, যেখানে একটি ক্লাস বা অবজেক্ট আরেকটি ক্লাস বা অবজেক্ট থেকে প্রপার্টি এবং মেথড ইনহেরিট করতে পারে। এটি **কোড পুনঃব্যবহারযোগ্যতা (code reusability)** এবং **ক্লিন কোড রাইটিং (clean code writing)** নিশ্চিত করে।

---

## 🔹 ইনহেরিটেন্স কী? 
ইনহেরিটেন্স হলো এমন একটি প্রক্রিয়া, যেখানে এক অবজেক্ট বা ক্লাসের বৈশিষ্ট্য (property & method) অন্য অবজেক্ট বা ক্লাসের মাধ্যমে ব্যবহার করা যায়। অর্থাৎ, আপনি যদি নতুন অবজেক্ট তৈরি করেন, তাহলে আগের কোনো অবজেক্টের ফিচার সরাসরি সেটার মধ্যে নিয়ে আসতে পারবেন।

---

## 🔹 ইনহেরিটেন্স-এর ধরন  

JavaScript-এ ইনহেরিটেন্স প্রধানত দুইভাবে করা যায়:  

1. **Prototype-based Inheritance**  
2. **Class-based Inheritance (ES6 Classes)**  

---

## 🔥 (১) প্রোটোটাইপ বেইজড ইনহেরিটেন্স (Prototype-Based Inheritance)

JavaScript-এ প্রতিটি অবজেক্টের একটি `prototype` থাকে, যা অন্য অবজেক্ট থেকে প্রপার্টি ও মেথড ইনহেরিট করতে পারে।  

**🎯 উদাহরণ:**  

```javascript
const parent = {
    name: "Parent Object",
    greet: function () {
        console.log("Hello from Parent!");
    }
};

// Child object তৈরি করা এবং parent থেকে ইনহেরিট করা
const child = Object.create(parent);

console.log(child.name); // Parent Object
child.greet(); // Hello from Parent!
```

> এখানে `child` অবজেক্ট `parent` অবজেক্ট থেকে প্রপার্টি এবং মেথড ইনহেরিট করেছে।

---

## 🔥 (২) ক্লাস বেইজড ইনহেরিটেন্স (Class-Based Inheritance)

ES6 থেকে JavaScript-এ `class` এবং `extends` ব্যবহার করে ইনহেরিটেন্স করা যায়।

**🎯 উদাহরণ:**  

```javascript
// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Child Class (inherits Animal)
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Buddy");
myDog.speak(); // Buddy barks.
```

> `Dog` ক্লাসটি `Animal` থেকে ইনহেরিট করেছে এবং `speak()` মেথড ওভাররাইড করেছে।

---

## 🔥 সুপার (super) কী?  
`super` কীওয়ার্ড প্যারেন্ট ক্লাসের কনস্ট্রাক্টর বা মেথডকে এক্সেস করার জন্য ব্যবহার করা হয়।  

**🎯 উদাহরণ:**  

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name); // Parent constructor call
        this.color = color;
    }

    speak() {
        super.speak(); // Parent class method call
        console.log(`${this.name} meows.`);
    }
}

const myCat = new Cat("Kitty", "White");
myCat.speak(); 
// Kitty makes a noise.
// Kitty meows.
```

> `super()` ব্যবহার করে আমরা `Animal` ক্লাসের কনস্ট্রাক্টর এবং মেথড এক্সেস করেছি।

---

## 🔥 প্রোটোটাইপ চেইন (Prototype Chain)
JavaScript-এ অবজেক্টগুলোর ইনহেরিটেন্স **প্রোটোটাইপ চেইন** এর মাধ্যমে কাজ করে। যখন আমরা কোনো প্রপার্টি খুঁজে পাই না, তখন তা তার `prototype` এ গিয়ে খোঁজে।  

**🎯 উদাহরণ:**  

```javascript
function Person(name) {
    this.name = name;
}

// Prototype এ মেথড যোগ করা
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Nayeem");
person1.sayHello(); // Hello, my name is Nayeem
```

> `person1` অবজেক্ট সরাসরি `sayHello()` মেথড ধারণ করে না, বরং এটি `Person.prototype` থেকে ইনহেরিট করেছে।

---

## 🔥 ইনহেরিটেন্স ওভাররাইট (Method Overriding)
একটি সাব-ক্লাস যদি প্যারেন্ট ক্লাসের কোনো মেথডকে নতুনভাবে ডিফাইন করে, তাহলে সেটাকে **Method Overriding** বলে।  

**🎯 উদাহরণ:**  

```javascript
class Vehicle {
    start() {
        console.log("Vehicle is starting...");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car is starting...");
    }
}

const myCar = new Car();
myCar.start(); // Car is starting...
```

> `Car` ক্লাস `start()` মেথডকে নতুনভাবে ডিফাইন করায় প্যারেন্টের `start()` কাজ করবে না।

---

## 🔥 ইনহেরিটেন্স প্রাকটিক্যাল ব্যবহার (Advanced Example)
ধরি, আপনি একটি `Employee` এবং `Manager` ক্লাস বানাচ্ছেন, যেখানে `Manager` ক্লাসটি `Employee` থেকে ইনহেরিট করবে।

```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log(`${this.name} earns ${this.salary} per month.`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    showDetails() {
        console.log(`${this.name} is a manager in ${this.department} department and earns ${this.salary} per month.`);
    }
}

const emp1 = new Employee("Rahim", 50000);
emp1.showDetails(); // Rahim earns 50000 per month.

const mgr1 = new Manager("Karim", 80000, "IT");
mgr1.showDetails(); // Karim is a manager in IT department and earns 80000 per month.
```

> **এখানে:**  
> - `Employee` হলো প্যারেন্ট ক্লাস।  
> - `Manager` ইনহেরিট করে এবং `showDetails()` মেথড ওভাররাইড করে।

---

## ✅ উপসংহার (Summary)
✔ **Prototype-based Inheritance:** `Object.create(parentObj)` ব্যবহার করে ইনহেরিট করা যায়।  
✔ **Class-based Inheritance:** `class` এবং `extends` ব্যবহার করে ইনহেরিট করা যায়।  
✔ **super():** প্যারেন্ট ক্লাসের কনস্ট্রাক্টর বা মেথড কল করতে ব্যবহৃত হয়।  
✔ **Method Overriding:** সাব-ক্লাসের মেথড প্যারেন্ট ক্লাসের মেথডকে ওভাররাইট করতে পারে।  
✔ **Prototype Chain:** একটি অবজেক্ট তার `prototype` থেকে প্রপার্টি এবং মেথড ইনহেরিট করে।  

---

এইভাবে আপনি JavaScript-এ ইনহেরিটেন্স পুরোপুরি আয়ত্ত করতে পারবেন! 😊  

🔥 **কোনো প্রশ্ন থাকলে জানাবেন!** 🚀