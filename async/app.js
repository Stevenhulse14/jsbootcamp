// adding to the stack
console.log("Hello World! 1");
// queueing the callback
setTimeout(function () {
  console.log("Hello World! 2");
}, 0);
//added to the top of the stack
console.log("Hello World! 3");

// Output:  Hello World! 1
