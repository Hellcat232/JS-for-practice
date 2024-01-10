const body = document.querySelector(".body");
body.classList.add("body");

//=============================================
const header = document.querySelector("header");
const myLogo = document.createElement("a");
myLogo.classList.add("logo-link");
header.prepend(myLogo);
const logoImg = document.createElement("img");
logoImg.classList.add("logo-img");
myLogo.prepend(logoImg);
console.log(myLogo, logoImg);
const textTitle = document.querySelector(".title-text");
textTitle.innerHTML = 'New title for <span class = "title-span">JS</span> page';
//=========================================
const headerMenu = document.createElement("ul");
headerMenu.classList.add("menu");
headerMenu.textContent = "My menu";
header.append(headerMenu);
//=======================================
const menuList = document.createElement("li");
menuList.classList.add("menu-items");
menuList.textContent = "Our items";
headerMenu.append(menuList);
//========================================
const sectionHero = document.querySelector(".list-hero");
const addTeamMember = document.createElement("li");
addTeamMember.textContent = "Max";
sectionHero.append(addTeamMember);
//==================================
const textHero = document.querySelector(".hero");
const textElement = document.createElement("p");
textElement.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime.";
textHero.append(textElement);
console.log(textElement.innerHTML);
//================================================
const ourTechnologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const offers = document.querySelector(".our-offers");
const listOffers = ourTechnologies
  .map((technology) => `<li class ="offers-item">${technology}</li>`)
  .join("");
console.log(listOffers);
offers.innerHTML = listOffers;
offers.insertAdjacentHTML(
  "beforeend",
  '<li class = "offers-item">TypeScript</li>'
);
