function checkStorage(storage, item) {
  let word = item === item.toLowerCase();
  let check = 0;
  if (storage.indexOf(item)) {
    check = `${item} is available to order!`;
  } else {
    check = "Sorry! We are out of stock!";
  }
  return check;
}
checkStorage(["apple", "plum", "pear"], "plum");
checkStorage(["apple", "plum", "pear"], "pLuM");
checkStorage(["apple", "plum", "pear"], "pear");
checkStorage(["apple", "plum", "pear"], "pEAr");
checkStorage(["apple", "plum", "pear"], "orange");
checkStorage(["apple", "plum", "pear"], "carrot");
