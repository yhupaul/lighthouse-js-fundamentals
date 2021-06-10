/*const sayHello = function () {
  console.log("Hello, world");
}

sayHello();*/

/*const sayHello = function (name) {
  console.log("Hello, " + name);
}
sayHello("dan");
sayHello("mike");*/

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('john');

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('john');
console.log(greeting);