// function checkStorage(available, ordered) {
//   let check;
//   if (available < ordered) {
//     check = "Not enough goods in stock!";
//   } else {
//     check = "Order is processed, our manager will contact you";
//   }
//   return check;
// }

// console.log(checkStorage(200, 20));
// console.log(checkStorage(100, 50));
// console.log(checkStorage(150, 180));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(100, 130));

function getSubstring(string, length) {
  return string.slice(0, length);
  // const fullText = string;
  // return fullText.slice(0, length);
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 5));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));
