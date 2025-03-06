class Animals {
  //here
  constructor(name, sound, height, weight) {
    this.name = name;
    this.sound = sound;
    this.height = height;
    this.weight = weight;
  }
  log(name) {
    console.log(name);
  }
}

// new keyword instanciates the animal class and create an object.
const steven = new Animals("steven", "Rawr", "6", "180");
const Nikki = new Animals("Nikki", "Bing", "5'2", "104");

//console.log(steven.log("steven"), Nikki);

class Bird extends Animals {
  constructor(name, sound, height, weight, feathers, beak) {
    super(name, sound, height, weight);
    this.feathers = feathers;
    this.beak = beak;
  }
}

const Nuraly = new Bird("Nuraly", "kwaarrr", " 6'2", "180", "soft", "crook");

//console.log(Nuraly);

class Bank {
  checking;
  #savings;

  constructor(initialBalance) {
    this.checking = initialBalance;
    this.#savings = 2000;
  }

  deposit(amount) {
    this.checking += amount;
  }
  getSaving() {
    return this.#savings;
  }
}

const myaccount = new Bank(0);

console.log(myaccount.getSaving());

/**
 Problem 1: Person Class
Create a Person class with the following:

A constructor that takes a name and age.
A method called introduce() that logs a string like:
 console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
Instantiate at least two instances of the Person class and call their introduce() methods.

 */
