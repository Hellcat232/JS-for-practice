function checkStorage(available, ordered) {
  //   let check;
  //   if (available < ordered) {
  //     check = "Not enough goods in stock!";
  //   } else {
  //     check = "Order is processed, our manager will contact you";
  //   }
  //   return check;
  let check = `${(available, ordered)}`;
  if (available < ordered) {
    check = "Not enough goods in stock!";
  } else {
    check = "Order is processed, our manager will contact you";
    return check;
  }
}
checkStorage(200, 20);
checkStorage(100, 50);
checkStorage(150, 180);
checkStorage(200, 150);
checkStorage(100, 130);
console.log(checkStorage(200, 20));
console.log(checkStorage(100, 50));
console.log(checkStorage(150, 180));
console.log(checkStorage(200, 150));
console.log(checkStorage(100, 130));
