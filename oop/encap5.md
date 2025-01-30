Encapsulation is one of the core principles of object-oriented programming (OOP), where the internal details of an object are hidden from the outside world, and access to them is controlled through methods. In JavaScript, encapsulation can be implemented using techniques like closures, private fields, and getter/setter methods. Here are 5 examples demonstrating encapsulation in JavaScript OOP:

---

### **1. Using Closures**
```javascript
function BankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit(amount) {
            if (amount > 0) balance += amount;
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) balance -= amount;
        },
        getBalance() {
            return balance; // controlled access
        }
    };
}

const account = BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance()); // 1200
console.log(account.balance); // undefined (no direct access)
```

---

### **2. Using ES6 Classes with Getters and Setters**
```javascript
class Car {
    #speed = 0; // private field

    accelerate(amount) {
        this.#speed += amount;
    }

    decelerate(amount) {
        if (this.#speed - amount >= 0) this.#speed -= amount;
    }

    get speed() {
        return this.#speed; // controlled access
    }

    set speed(value) {
        if (value >= 0) this.#speed = value; // validation
    }
}

const myCar = new Car();
myCar.accelerate(50);
console.log(myCar.speed); // 50
myCar.speed = 30; // set speed
console.log(myCar.speed); // 30
```

---

### **3. Using WeakMap for Private Data**
```javascript
const privateData = new WeakMap();

class Employee {
    constructor(name, salary) {
        privateData.set(this, { name, salary });
    }

    getName() {
        return privateData.get(this).name; // controlled access
    }

    getSalary() {
        return privateData.get(this).salary; // controlled access
    }
}

const emp = new Employee("John Doe", 5000);
console.log(emp.getName()); // John Doe
console.log(emp.getSalary()); // 5000
console.log(emp.name); // undefined (no direct access)
```

---

### **4. Using Functions Inside a Class**
```javascript
class Product {
    constructor(name, price) {
        let _price = price; // private variable

        this.getName = () => name;
        this.getPrice = () => _price;
        this.setPrice = (newPrice) => {
            if (newPrice > 0) _price = newPrice; // validation
        };
    }
}

const product = new Product("Laptop", 1200);
console.log(product.getName()); // Laptop
console.log(product.getPrice()); // 1200
product.setPrice(1500);
console.log(product.getPrice()); // 1500
console.log(product.price); // undefined
```

---

### **5. Encapsulation with Factory Functions**
```javascript
function User(username, password) {
    let _password = password; // private variable

    return {
        getUsername() {
            return username;
        },
        validatePassword(inputPassword) {
            return _password === inputPassword;
        }
    };
}

const user = User("nayeem", "secret123");
console.log(user.getUsername()); // nayeem
console.log(user.validatePassword("secret123")); // true
console.log(user.password); // undefined (no direct access)
```

---

### Key Points in These Examples:
1. **Private Variables**: Managed through closures, `#privateFields`, or `WeakMap`.
2. **Controlled Access**: Use getters and setters to expose or modify private data.
3. **Validation**: Ensure data integrity through validation in setters or methods.

Let me know if you'd like further explanations!