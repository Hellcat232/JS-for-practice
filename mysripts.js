const header = document.querySelector("header");
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
