### **OOP-এর চারটি মূলনীতি (Core Principles of OOP)**  

Object-Oriented Programming (OOP)-এ চারটি মূলনীতি হল:  
1. **Encapsulation (সংবদ্ধতা)**  
2. **Abstraction (জটিলতা লুকানো)**  
3. **Inheritance (উত্তরাধিকার)**  
4. **Polymorphism (বহুরূপিতা)**  

এগুলো JavaScript-এ কীভাবে কাজ করে, উদাহরণসহ বিস্তারিত আলোচনা নিচে করা হলো।

---

### **1. Encapsulation (সংবদ্ধতা)**  
**সংজ্ঞা:**  
Encapsulation বলতে একটি অবজেক্টের ডেটাকে (properties) প্রাইভেট করে রাখা এবং শুধু নির্দিষ্ট মেথডের মাধ্যমে সেই ডেটা অ্যাক্সেস করা বোঝায়। এটি ডেটাকে সরাসরি পরিবর্তন করা থেকে সুরক্ষিত রাখে।  

#### **কেন দরকার?**
- ডেটাকে সুরক্ষিত রাখা।  
- অবজেক্টের ভিতরের বাস্তবায়ন লুকিয়ে রাখা।  
- শুধু নির্দিষ্ট নিয়মে ডেটা অ্যাক্সেস এবং আপডেট করা।  

#### **JavaScript উদাহরণ:**
```javascript
class User {
    #password; // Private property

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    // Getter
    getPassword() {
        return "Password is private.";
    }

    // Setter
    setPassword(newPassword) {
        if (newPassword.length >= 6) {
            this.#password = newPassword;
            console.log("Password updated successfully.");
        } else {
            console.log("Password must be at least 6 characters.");
        }
    }
}

const user = new User("nayeem", "12345");

// Accessing private property directly (not allowed)
// console.log(user.#password); // Error

// Using getter and setter
console.log(user.getPassword());
user.setPassword("newPass123");
```

---

### **2. Abstraction (জটিলতা লুকানো)**  
**সংজ্ঞা:**  
Abstraction এমন একটি প্রক্রিয়া যেখানে শুধুমাত্র প্রয়োজনীয় তথ্য প্রকাশ করা হয় এবং অবজেক্টের ভিতরের জটিলতা লুকানো হয়।  

#### **কেন দরকার?**
- ব্যবহারকারীকে কমপ্লেক্স ডিটেইলস থেকে মুক্ত রাখা।  
- বড় কোডকে সহজবোধ্য করা।  
- কোডের মডুলারিটি বৃদ্ধি করা।  

#### **JavaScript উদাহরণ:**
```javascript
class Payment {
    constructor(amount) {
        this.amount = amount;
    }

    // Public method (Essential details exposed)
    makePayment() {
        this.#connectToBank(); // Private method
        console.log(`Payment of $${this.amount} completed.`);
    }

    // Private method (Hides complexity)
    #connectToBank() {
        console.log("Connecting to bank...");
    }
}

const payment = new Payment(500);
payment.makePayment(); // Exposes only necessary details
```

---

### **3. Inheritance (উত্তরাধিকার)**  
**সংজ্ঞা:**  
Inheritance-এর মাধ্যমে একটি ক্লাস অন্য ক্লাসের প্রপার্টি এবং মেথড গ্রহণ করতে পারে। এটি কোড পুনর্ব্যবহারযোগ্যতা বাড়ায়।  

#### **কেন দরকার?**
- কোড পুনরায় লিখতে হয় না।  
- একবার তৈরি করা ফাংশনালিটি সহজে অন্য ক্লাসে ব্যবহার করা যায়।  

#### **JavaScript উদাহরণ:**
```javascript
// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }
}

// Child Class
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Inherited from parent class
dog.bark(); // Specific to Dog class
```

---

### **4. Polymorphism (বহুরূপিতা)**  
**সংজ্ঞা:**  
Polymorphism মানে একটি ইন্টারফেস বা মেথড বিভিন্ন ফর্মে ব্যবহার করা। এটি একাধিক ক্লাসে একই নামের মেথডকে আলাদা আলাদাভাবে কাজ করতে দেয়।  

#### **কেন দরকার?**
- কোডের ফ্লেক্সিবিলিটি বাড়ায়।  
- একক ইন্টারফেস ব্যবহার করে বিভিন্ন ক্লাস পরিচালনা করা যায়।  

#### **JavaScript উদাহরণ:**
```javascript
class Animal {
    makeSound() {
        console.log("Some generic animal sound.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}

// Polymorphism in action
const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(animal => animal.makeSound());
```

---

### **সংক্ষেপে চারটি মূলনীতি:**  
| **মূলনীতি**       | **কাজ**                                                                                     |
|-------------------|--------------------------------------------------------------------------------------------|
| **Encapsulation** | ডেটাকে প্রাইভেট রাখা এবং getter/setter দিয়ে অ্যাক্সেস।                                         |
| **Abstraction**   | শুধুমাত্র প্রয়োজনীয় তথ্য দেখানো এবং কমপ্লেক্স ডিটেইলস লুকানো।                                |
| **Inheritance**   | এক ক্লাস থেকে আরেক ক্লাসে প্রপার্টি ও মেথড শেয়ার করা।                                        |
| **Polymorphism**  | একাধিক ক্লাসে একই ইন্টারফেস বা মেথড আলাদাভাবে ব্যবহার করা।                                      |

---

### **এগুলো শিখলে কী সুবিধা হবে?**  
- **কোড সহজবোধ্য:** বড় প্রজেক্ট সহজে ম্যানেজ করা যায়।  
- **কোড পুনর্ব্যবহারযোগ্য:** একই ফাংশনালিটি একাধিক জায়গায় ব্যবহার করা যায়।  
- **কোড সুরক্ষিত:** ডেটা এবং মেথডকে নিয়ন্ত্রিতভাবে ব্যবহার করা যায়।  

**আপনার আরও উদাহরণ বা নির্দিষ্ট কোনো টপিকের ব্যাখ্যা দরকার হলে জানাবেন! 😊**