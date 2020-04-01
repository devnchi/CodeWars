/*
You have to return the digits of this number within an array in reverse order.
Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
  let newArray = n.toString();
  return newArray.split("").map(Number).reverse();
}
