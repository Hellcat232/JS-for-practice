const el = document.querySelector(".text");
const nested = document.querySelector(".sub-text");
console.log(el.textContent);
console.log(nested.textContent);

const link = document.querySelector(".link");
console.log(link);
const hasActiveClass = link.classList.contains("is-active");
const hasTitleClass = link.classList.contains("title");
console.log(hasActiveClass, hasTitleClass);
link.classList.add("special");
link.classList.remove("is-active");
console.log(link.classList);
