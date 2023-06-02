// function factorial(n) {
//   return n === 1 ? 1 : n * factorial(n - 1);
// }

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

function factorial(n) {
  function iter(product, counter) {
    return counter > n ? product : iter(counter * product, counter + 1);
  }
  return iter(1, 1);
}

console.log(factorial(5));

function fibonacci(n) {
  return n === 1 ? 1 : n + fibonacci(n - 1);
}

console.log(fibonacci(2));
