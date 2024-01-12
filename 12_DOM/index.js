//Truy cap phan tu bang tag name

let pEls = document.getElementsByTagName("p");
console.log("pEls", pEls);

let firstPEL = pEls[0];
console.log("The p dau tien:", firstPEL);

for (let i = 0; i < pEls.length; i++) {
  pEls[i].style.color = "green";
}

//Truy cap phan tu bang class name
let p1Els = document.getElementsByClassName("p-1");

console.log("p1Els", p1Els);

for (let i = 0; i < p1Els.length; i++) {
  p1Els[i].style.fontSize = "40px";
}

// querySelector: Tra ve phan tu dau tien tim thay
// selector id: #title
// selector class: .title
// selector tag: p, h1, div,...

let firstP1El = document.querySelector(".p-1");

console.log("The p dau tien:", firstP1El);

// querySelectorAll(selector): Tra ve danh sach cac phan tu khop selector
let liEls = document.querySelectorAll(".list > li");

console.log("liEls", liEls);

let activeLiEls = document.querySelector(".list li.active");

console.log("activeLiEls", activeLiEls);

function dom(pars) {
  return document.querySelector(pars);
}

function domAll(params) {}
