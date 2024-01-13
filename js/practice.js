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

// Функция с параметром
function приветствиеИмя(имя) {
  console.log("Привет, " + имя + "!");
}

// Вызов функции с аргументом
приветствиеИмя("Алиса");
