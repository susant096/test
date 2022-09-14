/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
   a: 2,
   b: 4
};

function result(numbers) {
   // Your Code Here
   return Object.keys(numbers)
      .reduce((acc, val, i) => ({
         ...acc, [val]: Object.values(numbers)
            .reverse()[i]
      }), {});


}

console.log(result(numbers));
