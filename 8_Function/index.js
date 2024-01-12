// Dinh nghia ham

function showMessage() {
  console.log("Hello World!!!");
}

// GOi ham
showMessage();
// Ham co tinh chat tai su dung
showMessage();
showMessage();

// Ham co tham so
function greeting(name) {
  console.log(`Hello ${name}`);
}
// Goi ham va truyen vao doi so
greeting("Alice");
greeting("Bob");

// Ham co gia tri tra ve
function sum(a, b) {
  return a + b;
}

// Goi ham va nhan ket qua tra ve
let sum1 = sum(5, 8);
console.log("sum1:", sum1);
let sum2 = sum(4, 13);
console.log("sum2:", sum2);

// Tam vuc hoat dong cua bien

//Bien cuc bo (local variable): nhung bien duoc khai bao ben trong ham, chi co the duoc truy cap ben trong ham do
//Bien ben ngoai (outer variable): nhung bien duoc khai bao ben ngoai ham, thi ham co the truy cap nhung bien do

let username = "dannd";
function showMsg() {
  username = "dan.nguyen";
  let msg = `Hello ${username}`;
  console.log(msg);
}
showMsg();
// console.log("Bien msg:", msg); // Loi

//Cac cach khac de dinh nghia ham

// Function expression
const doSomeThing = function () {
  console.log("function expresstion");
};
doSomeThing();

// Mot cach khac de khai bao su kiem click cua button
let btn1El = document.getElementById("btn-1");
btn1El.onclick = function () {
  alert("btn 1 clicked");
};

// Arrow Function

const doSomeThing1 = () => {
  console.log("arrow function");
};

doSomeThing();

//Viet ham nhan vao 1 so va tra ve ket qua binh phuong cua so do
// const square = (a) => {
//   return Math.pow(a, 2);
// };

// Cho phep bo qua cap ngoac nhon ra tu khoa return khi tra ve gia tri trong truong hop ham chi co 1 dong duy nhat
const square = (a) => Math.pow(a, 2);
let x = square(3);
console.log("X:", x);
let y = square(7);
console.log("y:", y);

let btn2El = document.getElementById("btn-2");
btn2El.onclick = () => {
  alert("btn 2 clicked");
};

// Callback function
// Tham so callback la 1 ham
function doSomeThing2(callBack) {
  console.log("Vi du call back Function");
  callBack(); //Goi toi ham displayMessage
}

function displayMessage() {
  console.log("Hello");
}

function displayName() {
  console.log("Hello John");
}

//Ham displayMessage la doi so cua ham doSomeThing2=> ham displayMessage duoc goi la callback function
doSomeThing2(displayMessage);
// Ta co the goi ham doSomeThing2 kem theo bat ki ham callback nao khac
doSomeThing2(displayName);
//Xay dung chuong trinh nhu sau: Hien thi ra 1 cau hoi va hai tuy chon YES or NO dua vao cai lua chon cua nguoi dung ma ta se thuc hien cac hanh dong khac nhau

function askInformation(questions, yesCallback, noCallback) {
  let isAllowed = confirm(questions);

  if (isAllowed) {
    yesCallback();
  } else {
    noCallback();
  }
}

function yes1() {
  alert("Ban da dong y");
}
function no1() {
  alert("Ban da khong dong y");
}

function yes2() {
  alert("Ban da dong y truy cap vi tri");
}

function no2() {
  alert("Ban khong dong y cho phep truy cap vi tri");
}

// asksInformation("ban co cho phep truy cap cac thong tin an danh hay khong")
askInformation("Ban co cho phep truy cap an danh hay khong", yes1, no1);
askInformation("Ban co cho phep truy cap vi tri hay khong", yes2, no2);
askInformation(
  "Cheo phep truy cap webcam",
  function () {
    alert("Cho phep truy cap webcam");
  },
  function () {
    alert("Khong cho phep truy cap webcam");
  }
);

askInformation(
  "Ban co cho phep truy cap camera",
  () => {
    alert("Cho phep truy cap camera");
  },
  () => {
    alert("Khong cho phep truy cap camera");
  }
);
