// Cac phuong thuc cua cac kieu du lieu co ban

//- Number
let a = 10000000;
console.log("toLocaleString:", a.toLocaleString());

let b = 1234.56789;
console.log("toFixed:", b.toFixed(2));

let c = 10;
console.log("toString:", c.toString());

//Phuong thuc cua doi tuong Math
let max = Math.max(3, 8, 9, 15);
console.log("Math.max:", max);
let min = Math.min(3, 8, 9, 15);
console.log("Math.min:", min);

// random ra so ngau nhien trong khoang min -> max:
//Math.floor(Math.random() * (max - min) + min);

let random = Math.floor(Math.random() * (100 - 50) + 50);
console.log("Math.random:", random);

// - String
let msg = "Hello Cybersoft";

console.log("toUpperCase:", msg.toUpperCase());
console.log("toLowerCase:", msg.toLowerCase());

//trim (xoa het), start (xoa dau), end (xoa cuoi)
let userName = "     KietLac     ";
console.log("trim:", userName.trim());

// Slice (cat chuoi)
console.log("slice:", msg.slice(6));

// let indexHello = msg.indexOf("cybersoft");
console.log("index:", msg.indexOf("Cybersoft"));

// let includeCybersoft = msg.includes("cybersoft");
console.log("include:", msg.includes("Cybersoft"));

let data = "Hello BC52 BC52";
let replaceDate = data.replace("BC52", "World");
console.log("replace:", replaceDate);

let replaceAllData = data.replaceAll("BC52", "World");
console.log("replaceAll:", replaceAllData);

let str = "ABC*123$XYZ";
let replaceAllStr = str.replaceAll(/[*$!@]/g, "");
console.log("replaceAllStr:", replaceAllStr);

//Primitive value $ references value
//Primitive value: number, string, boolean, null, boolean
//Reference value: array, object,

//Primitive value
let x = 5;
let y = x;
y++;

console.log("x, y:", x, y);

//Reference value
let obj = { name: "A", age: 18 };

let obj1 = obj;

obj1.name = "B";

console.log("obj ,obj1:", obj, obj1); //{name: "B", age: 18}

//Sao chep ra 1 object moi, ke thua tat ca cac thuoc tinh va phuong thuc cua object hien tai
// let obj2 = Object.assign({}, obj); // Cach 1
let obj2 = { ...obj }; //Cach 2
obj2.age = 25;
obj2.name = "C";
console.log("obj, obj2:", obj, obj2);

let arr = [1, 2, 3];
let arr1 = arr;
arr1.push(4);
console.log("arr, arr1:", arr, arr1);

//Sao chep ra 1 array moi, ke thua tat ca phan tu cua array hien tai
// let arr2 = arr.slice(); //Cach 1
let arr2 = [...arr];
arr2.push(5);
console.log("arr, arr2:", arr, arr2);

let o1 = { a: 1 };
let o2 = { a: 2 };

console.log(o1 === o2);//false



