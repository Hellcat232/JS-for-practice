// const el = document.querySelector(".text");
// const nested = document.querySelector(".sub-text");
// console.log(el.textContent);
// console.log(nested.textContent);
// //======================================================
// const link = document.querySelector(".link");
// console.log(link);
// const hasActiveClass = link.classList.contains("is-active");
// const hasTitleClass = link.classList.contains("title");
// console.log(hasActiveClass, hasTitleClass);
// link.classList.add("special");
// link.classList.remove("is-active");
// link.classList.toggle("is-active");
// link.classList.replace("special", "regular");
// console.log(link.classList);
// //===========================================================
// const button = document.querySelector(".btn");
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style);
// //===========================================================
// const image = document.querySelector(".image");
// image.hasAttribute("src", "width");
// console.log(image);
// console.log(image.hasAttribute("src"));
// console.log(image.hasAttribute("width"));
// console.log(image.hasAttribute("haight"));
// image.getAttribute("alt");
// console.log(image.getAttribute("alt"));
// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt"));
// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt"));
// //========================================================
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action);
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action);
// saveBtn.dataset.action = "update";
// console.log(saveBtn.dataset.action);
// saveBtn.dataset.role = "admin";
// console.log(saveBtn.dataset.role);
// delete saveBtn.dataset.action;
// console.log(saveBtn.dataset.action);
// //==========================================================
// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading);

const array = [1, 2, 3, 4, 5];

Array.prototype.calcArr = function (n) {
  return this.map(function (i) {
    return i + n;
  });
};

console.log(array.calcArr(20));

const isSuccess = false;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise settled"));
document.r;
