//Truy cap DOM bang Javascript thong qua doi tuong document

// Truy cap vao the body
console.log(document.body);

// Them style cho the body
document.body.style.backgroundColor = "green";
document.body.style.color = "white";
document.body.style.fontSize = "50px";
//Truy cap bang the bat ki bang Id
let titleEl = document.getElementById("title");
console.log("titleEl:", titleEl);
//lay ra noi dung cua tag
console.log("noi dung the titleEl:", titleEl.innerHTML);
// thay doi noi dung cua tag
titleEl.innerHTML = "Hello Dom";

// Neu truy cap mot the bang id khong ton tai thi se tra ra la Null
let testEl = document.getElementById("test");
console.log("testEl:", testEl);
//Null khong co cac thuoc tinh innerHTML hay style nhu 1 the binh thuong nen chuong trinh se bi loi
//testEl.innerHTML ="Test"

//truy cap tag input bang id
let inputBrandEl = document.getElementById("brand");
//Lay ra gia tri cua the input
console.log("Noi dung the input:", inputBrandEl.value);
//Thay doi gia tri cua the input
inputBrandEl.value = "Cybersoft Academy";

//Thay doi style cua tag
let p1El = document.getElementById("content-1");
p1El.style.color = "red";
//Cach 1
p1El.style.backgroundColor = "blue";
//Cach 2
p1El.style = "font-size: 60px; color:red; background-color:blue;";

//Thay doi class cua tag
let p2El = document.getElementById("content-2");
// Them class
p2El.classList.add("title", "active", "content");
//Xoa class
p2El.classList.remove("content");
// Toggle class: Neu the da co class => xoa di, nguoc lai chua co thi them vao
p2El.classList.toggle("test");

//**Ham (se duoc hoc ki hon o buoi 5)
// Nhung doan ma ben trong ham mac dinh no se khong duoc thuc thi
// function showMessage() {
//   let username = "Yasuo";
//   alert(`Hello ${username}`);
// }
// Ta can thuc thien thao tac goi hma de thuc thi nhung doan ma ben trong ham
// showMessage();
// BT1
function hiddenText() {
  document.getElementById("content-3").innerHTML = "Thay doi noi dung roi nhe";
}

// BT2
function toggleHide() {
  document.getElementById("content-4").classList.toggle("hide");
}

// BT3
function toggleOn() {
  document.getElementById("img-1").src = "./img/pic_bulboff.gif";
}

function toggleOff() {
  document.getElementById("img-1").src = "./img/pic_bulbon.gif";
}

// BT4
function disable() {
  document.getElementById("onOff").disabled = "True";
  document.getElementById("onOf").disabled = "True";
}

//BT5
function login() {
  //lay gia tri cua hai input
  let username = document.getElementById("input-username").value;
  let password = document.getElementById("input-password").value;

  let outputEl = document.getElementById("output-1");
  outputEl.innerHTML = `${username} - ${password}`;
  outputEl.classList.remove("hide");
  outputEl.style.backgroundColor = "blue";
  outputEl.style.color = "red";
}

//Tao dong va them phan tu vao HTML bang Javascript

// Cu phap tao moi mot phan tu
let h1El = document.createElement("h1");
h1El.innerHTML = "CyberSoft";
console.log(h1El);
// dua h1 vao body
document.body.appendChild(h1El);

let pEl = document.createElement("p");
pEl.innerHTML = "Javascript";

let containerEl = document.getElementById("container");
containerEl.appendChild(pEl);

//BT
function addProduct() {
  //B1: Lay gia tri cua 2 input ten san pham va gia
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;
  //B2: Tao dong cac the tr, td de dua vao trong tbody
  let tbody = document.getElementById("product-list");
  //tao tr va dua vao trong the tbody
  let tr = document.createElement("tr");
  tbody.appendChild(tr);

  //tao the td chua thong tin ten san pham va dua vao trong the tr
  let tdName = document.createElement("td");
  tdName.innerHTML = productName;
  tr.appendChild(tdName);
  //tao the td chua thong tin gia san pham va dua vao trong the tr
  let tdPrice = document.createElement("td");
  tdPrice.innerHTML = productPrice;
  tr.appendChild(tdPrice);
}

function addProduct2() {
  //B1: Lay gia tri cua 2 input ten san pham va gia
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;
  //B2: Hien thi ra giao dien
  let tbody = document.getElementById("product-list");

  let html = `
   <tr>
   <td>${productName}</td>
   <td>${productPrice}</td>
   </tr>
   `;

  tbody.innerHTML += html;
}
