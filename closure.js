function nigam(name) {
  console.log(name);
  function greet(message) {
    console.log(name + " " + message);
  }
  return greet;
}

const myFn = nigam("kumar");
console.log(myFn);
myFn("hii");
