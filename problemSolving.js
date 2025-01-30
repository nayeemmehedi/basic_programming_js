class Animal {
  constructor(name,age=30) {
      this.name = name;
      this.age = age;
  }

  speak() {
      console.log(`${this.name} makes a noise.`);
  }
}

// Child Class (inherits Animal)
class Dog extends Animal {
 
  speak() {
    
      console.log(`${this.age} barks.`);
  }
}

const myDog = new Dog("Buddy");
myDog.speak(); // Buddy barks.