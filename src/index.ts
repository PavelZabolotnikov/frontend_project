// Задание 1
function counterLogger() {
  let count = 0;
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
const user : { name: string, age: number, tasks: string[] } = {
  age: 28,
  name: 'Паша',
  tasks:['arays-objects-methods', 'async_js', 'lint-format','scope_this'], 
};

user.tasks.push("typescript");
console.log(user.tasks);

