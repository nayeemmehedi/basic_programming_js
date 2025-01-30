### 🔥 **JavaScript Inheritance: Advanced Examples & Deep Explanation**  

আমরা আগেই ইনহেরিটেন্স (Inheritance)-এর বেসিক অংশগুলো দেখেছি। এবার আরো **অ্যাডভান্সড উদাহরণ ও কনসেপ্ট** ব্যাখ্যা করবো, যাতে আপনি প্রো-লেভেলে ইনহেরিটেন্স বুঝতে পারেন এবং বাস্তবে এটি কীভাবে কাজ করে তা আয়ত্ত করতে পারেন।  

---

# 🚀 **1. Complex Class-Based Inheritance with Multiple Methods**
ধরি, আমাদের **Employee Management System** আছে যেখানে **Employee**, **Manager**, এবং **CEO** থাকবে। আমরা ইনহেরিটেন্স ব্যবহার করে এটি তৈরি করবো।

```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} earns ${this.salary} per month.`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    getDetails() {
        return `${this.name} is a manager of ${this.department} department and earns ${this.salary} per month.`;
    }

    approveLeave(days) {
        return `${this.name} approved ${days} days leave.`;
    }
}

class CEO extends Manager {
    constructor(name, salary, department, company) {
        super(name, salary, department);
        this.company = company;
    }

    getDetails() {
        return `${this.name} is the CEO of ${this.company}, leads the ${this.department} department, and earns ${this.salary} per month.`;
    }

    makeDecision(decision) {
        return `${this.name} made a decision: "${decision}"`;
    }
}

const emp1 = new Employee("Rahim", 50000);
console.log(emp1.getDetails());  
// Rahim earns 50000 per month.

const mgr1 = new Manager("Karim", 80000, "IT");
console.log(mgr1.getDetails());  
// Karim is a manager of IT department and earns 80000 per month.
console.log(mgr1.approveLeave(5));  
// Karim approved 5 days leave.

const ceo1 = new CEO("Mahbub", 200000, "Operations", "TechCorp");
console.log(ceo1.getDetails());  
// Mahbub is the CEO of TechCorp, leads the Operations department, and earns 200000 per month.
console.log(ceo1.makeDecision("Expand Business to Europe"));  
// Mahbub made a decision: "Expand Business to Europe"
```

✅ **Key Takeaways:**  
- **Employee → Manager → CEO** ইনহেরিটেন্সের মাধ্যমে **চেইন** তৈরি করেছি।  
- `super()` দিয়ে প্যারেন্ট ক্লাসের **constructor** কল করা হয়েছে।  
- **Method Overriding** ব্যবহার করা হয়েছে `getDetails()` মেথডের মধ্যে।  
- `Manager` ক্লাসে নতুন মেথড `approveLeave()` যোগ করেছি।  
- `CEO` ক্লাসে নতুন মেথড `makeDecision()` যোগ করা হয়েছে।  

---

# 🚀 **2. Using Getters & Setters in Inheritance**
জাভাস্ক্রিপ্টে **getters & setters** ব্যবহার করে প্রাইভেট ভেরিয়েবল কন্ট্রোল করা যায়।

```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this._email = email; // Private property (Conventionally using _)
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        if (newEmail.includes("@")) {
            this._email = newEmail;
        } else {
            console.log("Invalid email!");
        }
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    getDetails() {
        return `${this.name} is an ${this.role} with email: ${this.email}`;
    }
}

const admin1 = new Admin("Jahid", "jahid@example.com", "Super Admin");
console.log(admin1.getDetails());  
// Jahid is an Super Admin with email: jahid@example.com

admin1.email = "invalid-email";  
// Invalid email!

admin1.email = "new.admin@example.com";  
console.log(admin1.getDetails());  
// Jahid is an Super Admin with email: new.admin@example.com
```

✅ **Key Takeaways:**  
- **Getter & Setter** ব্যবহার করে `email` ভেরিয়েবলকে প্রাইভেট করা হয়েছে।  
- Setter মেথড ইমেইল চেক করে **ভুল ইমেইল রিজেক্ট** করছে।  
- `super()` ব্যবহার করে `Admin` ক্লাস `User` ক্লাস থেকে ইনহেরিট করছে।  

---

# 🚀 **3. Abstract Class Simulation in JavaScript**
JavaScript-এ সরাসরি **Abstract Class** নেই, তবে আমরা এটি ইমপ্লিমেন্ট করতে পারি।

```javascript
class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Abstract classes cannot be instantiated.");
        }
        this.name = name;
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);
console.log(`${circle.name} Area: ${circle.area()}`);
// Circle Area: 314.1592653589793

const shape = new Shape();  
// Error: Abstract classes cannot be instantiated.
```

✅ **Key Takeaways:**  
- `Shape` ক্লাসটি **Abstract Class** এর মতো কাজ করছে।  
- `area()` মেথড **Implemented না করলে Error** দিচ্ছে।  
- `Circle` ক্লাস এটি ইনহেরিট করে `area()` মেথড ইমপ্লিমেন্ট করেছে।  

---

# 🚀 **4. Multiple Levels of Inheritance**
```javascript
class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }

    move() {
        return `${this.type} is moving at ${this.speed} km/h.`;
    }
}

class Car extends Vehicle {
    constructor(speed, brand) {
        super("Car", speed);
        this.brand = brand;
    }

    move() {
        return `${this.brand} car is moving at ${this.speed} km/h.`;
    }
}

class ElectricCar extends Car {
    constructor(speed, brand, batteryLife) {
        super(speed, brand);
        this.batteryLife = batteryLife;
    }

    charge() {
        return `${this.brand} car is charging, battery life: ${this.batteryLife}%.`;
    }
}

const tesla = new ElectricCar(120, "Tesla", 90);
console.log(tesla.move());  
// Tesla car is moving at 120 km/h.
console.log(tesla.charge());  
// Tesla car is charging, battery life: 90%.
```

✅ **Key Takeaways:**  
- `Vehicle` → `Car` → `ElectricCar` তিন স্তরের ইনহেরিটেন্স করা হয়েছে।  
- `move()` মেথড ওভাররাইড করা হয়েছে।  
- `ElectricCar`-এ নতুন মেথড `charge()` যোগ হয়েছে।  

---

# 🎯 **Final Summary**
✔ **Prototype-Based Inheritance** → `Object.create()` দিয়ে ইনহেরিটেন্স।  
✔ **Class-Based Inheritance** → `class` এবং `extends` ব্যবহার।  
✔ **super()** → প্যারেন্ট ক্লাসের **constructor/method** কল করার জন্য।  
✔ **Method Overriding** → সাব-ক্লাস প্যারেন্টের মেথড পরিবর্তন করতে পারে।  
✔ **Getters & Setters** → প্রাইভেট ডেটা হ্যান্ডল করতে।  
✔ **Abstract Class Simulation** → `throw new Error()` দিয়ে ইমপ্লিমেন্ট করা যায়।  
✔ **Multiple Levels of Inheritance** → `Grandparent → Parent → Child` সম্পর্ক তৈরি করা যায়।  

---

✅ **এখন আপনি জাভাস্ক্রিপ্ট ইনহেরিটেন্স পুরোপুরি প্রফেশনাল লেভেলে বুঝতে পারবেন!** 🚀💯  
🔥 **কোনো প্রশ্ন থাকলে জানাবেন!** 😊