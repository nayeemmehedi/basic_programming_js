## **1. What is OOP?**
OOP is a programming paradigm that organizes code into **objects** that represent real-world entities. These objects have **properties** (data) and **methods** (functions) that operate on the data.

---

## **2. Core Concepts of OOP**
The four main concepts of OOP are:
1. **Encapsulation**
3. **Polymorphism**
4. **Abstraction**
2. **Inheritance**

Let’s explore each concept in detail.

---

## **3. Objects in JavaScript**
In JavaScript, objects are key-value pairs. They can be created using:
- Object literals
- Constructor functions
- Classes (ES6)

### Example: Object Literal
```javascript
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is John
```

---

## **4. Encapsulation**
Encapsulation is the bundling of data (properties) and methods that operate on the data into a single unit (object). It also restricts direct access to some of an object's components.

### Example:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice
```

---

## **5. Inheritance**
Inheritance allows a class to inherit properties and methods from another class. This promotes code reusability.

### Example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.
```

---

## **6. Polymorphism**
Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It enables methods to behave differently based on the object that invokes them.

### Example:
```javascript
class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }
}

const animals = [
  new Dog("Rex", "German Shepherd"),
  new Bird("Tweety")
];

animals.forEach(animal => animal.speak());
// Output:
// Rex barks.
// Tweety chirps.
```

---

## **7. Abstraction**
Abstraction hides the complex implementation details and shows only the necessary features of an object. It simplifies the interface for interacting with objects.

### Example:
```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    this.#igniteEngine();
    console.log(`${this.make} ${this.model} started.`);
  }

  #igniteEngine() {
    console.log("Engine ignited.");
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: Engine ignited. Toyota Corolla started.
```

---

## **8. Classes in JavaScript (ES6)**
Classes are syntactic sugar over JavaScript's prototype-based inheritance. They provide a cleaner way to create objects and handle inheritance.

### Example:
```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area()); // Output: 200
```

---

## **9. Prototypes**
JavaScript uses prototypal inheritance. Every object has a prototype, and properties/methods can be shared across objects.

### Example:
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
person1.greet(); // Output: Hello, my name is Alice
```

---

## **10. Static Methods**
Static methods belong to the class itself, not instances of the class. They are called on the class, not the object.

### Example:
```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(5)); // Output: 25
```

---

## **11. Getters and Setters**
Getters and setters allow you to define methods to get or set the value of an object's properties.

### Example:
```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // Output: 10
circle.diameter = 14;
console.log(circle.radius); // Output: 7
```

---

## **12. Private Fields (ES2022)**
Private fields are properties that can only be accessed within the class.

### Example:
```javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
```

---
