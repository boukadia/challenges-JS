"use strict";
let modifier = document.querySelectorAll("button")[2];
let nombreClique = document.querySelector(".nombreClique");
let nbrClique = document.querySelector(".nbrClique");
let carte = document.querySelector(".carte");
let add = document.querySelector(".add");
let navbar = document.querySelector(".navbar");
let affichage = document.querySelector(".affiche");
let position = document.querySelectorAll(".position .coordonnes")[0];
let menu = document.querySelector(".menu").children[1].querySelectorAll("div");
let menuContent = document.querySelector(".menu");
let menuC = document.querySelector(".menuC");
let textModifier = document.querySelector(".text-modifier");
console.log(menuC);
console.log(menu);
let c = 0;
// ------------------------------DEBUT: counter du click----------------------------
nombreClique.onclick = function () {
  c++;
  nbrClique.children[0].textContent = c;
};
// ------------------------------fin: counter du click----------------------------

// ------------------------------DEBUT: changer le couleur du body----------------------------
add.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
// ------------------------------fin: changer le couleur du body----------------------------

// ------------------------------DEBUT: coordonnes----------------------------
function show(event) {
  let positionVertical = event.clientX;
  let positionHorizental = event.clientY;
  let text =
    "coord du X: " +
    positionVertical +
    `<br>` +
    " coord du Y : " +
    positionHorizental;
  position.innerHTML = text;
}
// ------------------------------fin: coordonnes----------------------------

// ------------------------------DEBUT: carte affichage----------------------------
affichage.addEventListener("click", function (event) {
  carte.toggleAttribute("hidden");
});
// ------------------------------FIN: carte affichage----------------------------

// ------------------------------DEBUT: menu affichage----------------------------
function showMenu() {
  menuContent.style.backgroundColor = " antiquewhite";
  for (let i = 0; i <= menu.length; i++) menu[i].classList.toggle("hidden");
  menuC.classList.toggle("hidden");
}
// ------------------------------FIN: menu affichage----------------------------

// ------------------------------DEBUT: TEXT MODIFICATION----------------------------
textModifier.addEventListener("mousemove", function () {
  textModifier.textContent = "you welcome";
});
// ------------------------------FIN: TEXT MODIFICATION----------------------------

// ------------------------------DEBUT: validation du input6----------------------------
let inpt = document.createElement("input");
let btn = document.createElement("button");
btn.textContent = "click";
let form = document.createElement("form");
form.appendChild(inpt);
form.appendChild(btn);
document.body.appendChild(form);

btn.onclick = function () {
  if (inpt.value.length <= 5) alert("il faut saisir plus du 5 caracters");
  return;
};
// ------------------------------ FIN: validation du input6----------------------------

// ------------------------------DEBUT: ajouter une class lors d'un clic ----------------------------
add.onclick = function () {
  textModifier.classList.add("addColor");
};
// ------------------------------FIN: ajouter une class lors d'un clic ----------------------------

// -------------------------------debut:chrono..................................

