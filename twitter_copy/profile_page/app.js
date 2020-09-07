function myFunction(...options) {
  return options;
}

let fun = myFunction('a', 'b', 'c', 'bar');      // ["a", "b", "c"]

console.log(fun)