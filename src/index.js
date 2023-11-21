// Задание 1
function counterLogger() {
  const count = 0;
  function logCounter() {
    console.log('count', count);
  }

  function incrementCounter() {
    count++;
  }
  return {
    logCounter,
    incrementCounter,
  };
}
const oneCounter = new counterLogger();
oneCounter.incrementCounter();
oneCounter.logCounter();

const twoCounter = new counterLogger();
twoCounter.incrementCounter();
twoCounter.incrementCounter();
twoCounter.logCounter();

// Задание 2
const user = {
  age: 28,
  name: 'Паша',
  getName() {
    console.log(this.name);
  },
  getAge() {
    console.log(this.age);
  },
};

user.getName();
user.getAge();

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.getName = function () {
  console.log(this.name);
};

User.prototype.getAge = function () {
  console.log(this.age);
};

const user1 = new User('Влад', 31);
user1.getName();
user1.getAge();

const user2 = new User('Константин', 18);
user2.getName();
user2.getAge();
