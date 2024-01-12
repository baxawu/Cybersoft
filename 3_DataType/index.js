//Number
let age = 25;
console.log("age:", age);
let number = 12.5;
console.log("number:", number);
let total = 1_000_000;
console.log("total:", total);

let a = 8;
let b = 13;
// Su dung toan tu: +, -, *, /, % (chi lay phan du)
let c = a + b;
console.log("c:", c);
let d = b - a;
console.log("d:", d);
let e = a * b;
console.log("e:", e);
let f = b / a;
console.log("f:", f);
let g = b % a;
console.log("g:", g);

// Toan tu: ++, --
// Thuc hien phep gan truoc sau do moi cong ban than no X++
let h = a++;
console.log("h:", h, "a:", a);
// thuc hien cong ban than no len truoc roi moi gan ++X
let i = ++a;
console.log("i:", i, "a:", a);

//Toan tu gan: =, +=, -=, *=, /=, %=
a = a + 3;
b += 3; // tuong duong b = b + 3
b *= 2; // tuong duong b = b * 2
console.log("b:", b);

console.log("hello" / 5); //  Lay chu chia voi con so se cho ra gia tri la: NaN (not a number)

// Baitap 1: tinh canh huyen khi biet hai canh goc vuong

let AB = 3;
let AC = 4;

//math la mot doi tuong co san trong Javascript, no cung cap lam nhiem vu toan hoc cho minh

// Math.pow(3, 2) // tinh la 3^2
// Math.sqrt(25) // tinh can bac 2

let BC = Math.sqrt(Math.pow(AB, 2) + Math.pow(AC, 2));
console.log("Bai tap 1: canh BC=", BC);
//lam tron so nguyen
console.log("Math.floor(1.5):", Math.floor(1.5)); // lam tron xuong so nguyen gan nhat
console.log("Math.ceil(1.5):", Math.ceil(1.5)); //lam tron len so nguyen gan nhat
console.log("Math.round(2.3):", Math.round(2.3)); //lam tron toi so nguyen gan nhat

//Bai tap 2: nhap vao n nguyen duong co 3 ky so, tinh tong 3 ky so
//VD: n = 123 => 1 + 2 + 3 = 6

let n = 429;
let sum = 0;

sum += n % 10; //sum =0+9
n = Math.floor(n / 10); //n=42
sum += n % 10; // sum=9+2
n = Math.floor(n / 10);
sum += n; // sum=11+4
console.log("Bai tap 2 - sum=", sum);

//string (Chuoi)
let massage = "Hello World";
let username = "alice";

// Noi chuoi bang toan tu
let firstName = "Phi";
let lastName = "Le";
let fullName = firstName + " " + lastName;
console.log("fullName:", fullName);

// Chuoi su dung dau backtick ``
//Cho phep xuong hang trong chuoi
let content = `ABC
XYZ
123
`;
console.log("content:", content);

let street = "cao thang";
let district = "Quan 3";
let city = "Ho Chi Minh";
// let address = street +", " + district +", "+ city
let address = `${street}, ${district}, ${city}`;
console.log("address:", address);

//null: nham tao ra mot bien voi gia tri dai dien cho khong gi ca, rong, hoac la gia tri chua biet
let birthday = null;
birthday = "25/05/2002";
console.log("birthday", birthday);

//undefined: mang y nghia chua duoc gan gia tri
//khoi tao bien khong gan gia tri thi gia tri mac dinh la underfined
let product;
console.log("product:", product);

// Hoac co the khoi tao bien mang gia tri undefined
let data = undefined;

//Boolean: Kieu du lieu luan li chi mang hai gia tri la True hoac la False
//True: Mang nghia la dung
//False: Mang nghia la sai
//Cach dat ten cac bien Boolean: thuong co chu is..., has,... should,...

let isActive = true;

// Tu khoa "typeof" dung de kiem tra kieu du lieu cua 1 bien
console.log("typeof isActive:", typeof isActive);
console.log("typeof product:", typeof product);
console.log("typeof address:", typeof address);
