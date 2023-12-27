// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.getTotalPrice();

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, ваш персонал будет ready в 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet);

// registerGuest("Mango", notify);
