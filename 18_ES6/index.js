// 1.Khai báo biến
// Thay var bằng let, const

// var cho phép khai báo lại một biến đã được khai báo

var a = 1;
var a = "hello";
console.log(a);

// let, const không cho phép khai báo lại một biến đã được khai báo
// let chỉ phép gán lại giá trị cho biến
// const không được gán lại gia trị cho biến

let b = 1;
// let b= "Cybersoft"

b = "Cybersoft";

// Cơ chế Hoisting

console.log(c); //undefined
var c = 10;
console.log(c); //10

// console.log(d); //Error
let d = 5;
console.log(d); //5

// Scope: tầm vực hoạt động của biến
// -global: các biến toàn cục được khai báo ngoài cùng của file
// -function (var): các biến được khai báo bên trong hàm
// -block (let, const): các biến được khai báo bên trong {}. VD: if() {}, for() {}

function demoScope() {
  var msg = "Hello";
  var times = 4;

  if (times > 3) {
    var msg = "Hello Cybersoft";
  }

  console.log(msg);
}

demoScope();

function demoScope() {
  let msg = "Hello";
  let times = 4;

  if (times > 3) {
    let msg = "Hello Cybersoft";
  }

  console.log(msg);
}

demoScope();

// 2. Arrow function

// function delecration
//- hoisting
//- có con trỏ this
//=> thường dùng để khai báo các hàm toàn cục và khai báo phương thức của object

function fn1() {}

// arrow function
//- cú pháp ngắn gọn
//- không có con trỏ this mà sẽ dùng this của hàm cha của nó
// => thường dùng để khai báo callback

const fn2 = () => {};

const fn3 = function () {};

const student = {
  name: "Alice",
  className: "BC52",

  sayHi() {
    //this
    setTimeout(() => {
      console.log(`Hello ${this.name} - ${this.className}`);
    }, 2000);
  },
};

student.sayHi();

// 3. Default Parameters values

const sum = (a = 0, b = 0) => a + b;

console.log(sum());
console.log(sum(2, 3));
console.log(sum(4));

const calcBill = (price, discount = 0, tax = 0.1) => {
  const discountPrice = price - price * discount;
  return discountPrice + discountPrice * tax;
};

console.log(calcBill(100000));
console.log(calcBill(100000, 0.2));
console.log(calcBill(100000, 0.2, 0.5));

// 4. Rest Parameters values

// const total3 = (a, b, c) => a + b + c;
// const total4 = (a, b, c, d) => a + b + c + d;

const total = (...number) => {
  return number.reduce((result, number) => {
    return result + number;
  }, 0);
};
console.log(total(1, 2, 3));
console.log(total(1, 2, 3, 4, 5, 6));

// 5.Spread Operator

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // => { a: 1, b: 2}
console.log(obj2);
console.log(obj1 === obj2);
const obj3 = { ...obj1, c: 3, d: 4 };
console.log(obj3);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1 === arr2);
const arr3 = [...arr1, 4, 5, 6];
console.log(arr3);

const number = [19, 3, 5, 2, 8, 12, 13, 15];
console.log(Math.max(...number));
console.log(Math.min(...number));

// 6. Destructuring

//Tách tên
const fullName = "Phi Lê";
// const arrName = fullName.split(" "); //["Phi", "Lê"]
// const firstName = arrName[0]; // "Phi"
// const lastName = arrName[1]; //"Lê"

const [firstName, lastName, midName] = fullName.split(" ");
//const [firstName, lastName] = ["Phi", "Lê", undefined];

// Swap giá trị của 2 biến
let admin = "John";
let guest = "Bob";

[admin, guest] = [guest, admin]; //["Bob", "John"]
console.log(admin, guest);

const user = {
  username: "khaitruong",
  email: "khaitruong@gmail.com",
  className: "BC52",
};

//const username =user.username
//const email =user.email
//const className =user.className

const { username, email, className: classInfo } = user;
console.log(username, email, classInfo);

const myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
const { a: _a, b: _b, ...myObj1 } = myObj;
console.log(myObj1);

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , ...myArr1] = myArr;
console.log(myArr1);

// 7.Templates strings
// Sử dụng dấu backtick `

// 8. Object literal
const name = "Iphone 13";
const price = 2500000;
const type = "phone";

const key = "quantity";
const value = 100;
const product = {
  // Nếu tên thuôc tính và tên biến để gán giá trị giống nhau, ta rút gọn như sau:
  name, // => name:name
  price,
  type,

  //Khai báo động tên thuộc tính dựa vào giá trị của 1 biến
  [key]: value,
};

console.log(product);

// 9. For...in, for...of

const colors = ["green", "yellow", "red", "blue"];

for (let i in colors) {
  console.log(`value: ${colors[i]}, index: ${i}`);
}

//Đối với for...of thì không có chỉ mục
for (let value of colors) {
  console.log(`value: ${value}`);
}

//Ngoài ra có thể dùng for...in để duyệt object
for (let key in product) {
  console.log(`key: ${key} - value: ${product[key]}`);
}

