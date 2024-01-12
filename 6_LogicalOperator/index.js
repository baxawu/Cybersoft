// Toan tu logic
//-Phu dinh: ! nghich dao gia tri Boolean
//-Va: && -Tra ve True neu tat ca la deu la true
//-Hoac:|| -Tra ve neu co it nhat 1 True

console.log("!true", !true); // false
let a = 5;
let b = 8;
let c = 11;

console.log(a < b && b < c);
console.log(b < a && b < c);
console.log(b < a || b < c);

// Truthy value va falsy value
//falsy value: false, 0, "", null, undefined, NaN

//Truthy value: nhung gia tri con lai

//Toan tu || tim gia tri truthy value dau tien
// let result = value1 || value2 || value3

let fullName = "";
let nickName = "Bob";

let user = fullName || nickName || "Anonymous";
console.log("user:", user);

//Toan tu && tim gia tri falsy value dau tien
//let result = value1 && value2 && value3

let isLoggedIn = false;
let message = isLoggedIn && "Welcome!!!";
console.log("message:", message);

//Toan tu ! Ep kieu du lieu ve Boolean
console.log("!0:", !!0);
console.log("'!!Hello:'", !!"Hello");
