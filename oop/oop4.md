### **Getters and Setters in JavaScript**  
Getters এবং Setters হল JavaScript-এর **Encapsulation** (OOP-এর একটি পিলার) বাস্তবায়নের একটি উপায়, যা ডেটার অ্যাক্সেস এবং আপডেট নিয়ন্ত্রণ করতে ব্যবহৃত হয়। এগুলো আপনাকে ডেটা পড়া (getter) এবং সেট করা (setter) উভয় ক্ষেত্রেই অতিরিক্ত লজিক যোগ করার সুবিধা দেয়।  

---

### **Getter এবং Setter-এর ভূমিকা:**  
1. **Retrieve (Getter):**  
   - Private বা সংরক্ষিত ডেটা পাবলিকলি অ্যাক্সেস করার জন্য।  
   - ডেটা ফরম্যাটিং বা প্রসেস করার আগে ব্যবহারকারীর কাছে প্রদর্শন করা।  

2. **Update (Setter):**  
   - Private ডেটা আপডেট করার সময় ভ্যালিডেশন যোগ করা।  
   - লজিক অ্যাড করা যাতে ডেটা সরাসরি পরিবর্তন করা না যায়।  

---

### **Getter এবং Setter ব্যবহার করার সময়:**  
1. **Private Variable অ্যাক্সেস করার সময়।**  
2. **ডেটা ভ্যালিডেশনের প্রয়োজন হলে।**  
3. **ডেটা পরিবর্তনের উপর নিয়ন্ত্রণ প্রয়োগ করতে হলে।**  
4. **Debugging বা Logging করার প্রয়োজন হলে।**  

---

### **Encapsulation-এর মাধ্যমে Getter এবং Setter:**  
Encapsulation হল **OOP-এর চারটি মূল স্তম্ভের (Pillars)** একটি। Getter এবং Setter ব্যবহার করে আপনি ডেটাকে হাইড করে অ্যাক্সেস নিয়ন্ত্রণ করতে পারেন।  

### **JavaScript উদাহরণ:**  

#### **Encapsulation দিয়ে Getter এবং Setter:**  
```javascript
class User {
    constructor(name, age) {
        this._name = name; // Private variable (নাম conventionally underscore দিয়ে শুরু করা হয়)
        this._age = age;
    }

    // Getter: Retrieve private variable
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    // Setter: Validate and update private variable
    set name(newName) {
        if (newName.length < 3) {
            console.log("Name must be at least 3 characters long.");
        } else {
            this._name = newName;
        }
    }

    set age(newAge) {
        if (newAge < 0 || newAge > 120) {
            console.log("Age must be between 0 and 120.");
        } else {
            this._age = newAge;
        }
    }
}

const user1 = new User("Nayeem", 25);

// Using Getters
console.log(user1.name); // Output: Nayeem
console.log(user1.age);  // Output: 25

// Using Setters with validation
user1.name = "Me";      // Output: Name must be at least 3 characters long.
user1.name = "Mehedi";  // Name updated successfully
user1.age = 150;        // Output: Age must be between 0 and 120.
user1.age = 30;         // Age updated successfully

console.log(user1.name); // Output: Mehedi
console.log(user1.age);  // Output: 30
```

---

### **Getter এবং Setter OOP-এর কোন পিলারকে সাপোর্ট করে?**  
1. **Encapsulation (মূল পিলার):**  
   - **ডেটা হাইড করে এবং শুধুমাত্র অনুমোদিত অ্যাক্সেস প্রদান করে।**  
   - উদাহরণ: `_name` এবং `_age` সরাসরি ব্যবহারকারী পরিবর্তন করতে পারে না। Setter ব্যবহার করে নিয়ন্ত্রিত ভাবে পরিবর্তন করা যায়।  

2. **Abstraction:**  
   - **অপ্রয়োজনীয় জটিলতা লুকিয়ে, কেবল প্রয়োজনীয় অংশ প্রকাশ করে।**  
   - উদাহরণ: ইউজারকে `_name` বা `_age` এর ভিতরের কাঠামো জানার দরকার নেই, তারা শুধু `name` এবং `age` গেটার এবং সেটার ব্যবহার করবে।  

3. **Polymorphism:**  
   - গেটার এবং সেটার **ভিন্ন ভিন্ন ডেটা প্রসেসিং** করার জন্য **পরিবর্তনশীল লজিক** অ্যাড করতে পারে।  

---

### **কখন Getter এবং Setter ব্যবহার করবেন?**  
1. **ডেটা অ্যাক্সেস এবং আপডেট নিয়ন্ত্রণের জন্য।**  
2. **ডেটার ভ্যালিডেশন প্রয়োজন হলে।**  
   - উদাহরণ: বয়স 0-120 এর মধ্যে থাকতে হবে।  
3. **ডেটা আপডেটের সময় লজিক যোগ করার জন্য।**  
   - উদাহরণ: ডেটা পরিবর্তন করার সাথে লগ বা ইভেন্ট ট্রিগার করতে।  
4. **ডেটা সরাসরি অ্যাক্সেস না করার অভ্যাস তৈরি করতে।**  

---

### **Getter এবং Setter-এর সুবিধা:**  
1. **ক্লিন এবং মডুলার কোড:**  
   - ডেটা অ্যাক্সেস এবং আপডেট এক জায়গায় নিয়ন্ত্রণ করা যায়।  

2. **ভ্যালিডেশন যোগ করার ক্ষমতা:**  
   - ডেটা সঠিক কিনা তা নিশ্চিত করা যায়।  

3. **Debugging সহজ করা:**  
   - ডেটা অ্যাক্সেস বা আপডেট হওয়ার সময় লগ করা যায়।  

4. **Encapsulation-এর বাস্তবায়ন সহজ করা:**  
   - ডেটা সরাসরি পরিবর্তন হওয়া থেকে রক্ষা করা যায়।  

---

### **আপনার কোডে Getter এবং Setter কখন ব্যবহার করবেন:**  
যদি আপনি ডেটা হ্যান্ডল করার সময় নিয়ন্ত্রণ, ভ্যালিডেশন, বা অতিরিক্ত লজিক যোগ করতে চান, তাহলে Getter এবং Setter ব্যবহার করা গুরুত্বপূর্ণ। এগুলো Encapsulation-এর শক্তিশালী হাতিয়ার।  

যদি কোনো উদাহরণ আরও পরিষ্কার করতে চান, জানাবেন। 😊