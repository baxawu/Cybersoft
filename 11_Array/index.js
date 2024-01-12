let colorRed = "red";
let colorBlue = "blue";

//Cu phap tao mang
let colors = ["red", "green", "blue"];
let animals = ["dog", "cat", "duck"];
let scores = [1, 3, 8, 4];
let emtyArr = [];

//TRuy cap vao phan tu cua mang bang chi mua (index)
//Luu y: Chi muc bat dau tu 0
console.log("colors[1]:", colors[1]); //green
console.log("animals[0]:", animals[0]); //dog
console.log("animals[10]:", animals[10]); //undefined

//Thay doi gia tri  cua phan tu trong mang
colors[1] = "yellow";
console.log("colors[1] sau khi thay doi:", colors[1]);

//Lay do dai cua mang (so luong phan tu)
console.log("do dai cua mang colors", colors.length);

//Dung vong lap de duyet mang
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// Cac phuong thuc lam viec voi mang
// - array.Push(value1, value2,...): them 1 hoac nhieu phan tu vao cuoi mang
colors.push("black", "orange", "grey");
console.log("Mang colors sau khi push:'", colors);

// - array.pop(): xoa 1 phan tu o cuoi mang va ham nay co returns de tra ve ching phan tu do
let lastColor = colors.pop();
console.log("Mang colors sau khi pop:", colors);
console.log("Gia tri tra ve :", lastColor);

// - array.unshift(value1, value2,...): GIong push them 1 hoac nhieu phan tu vao dau mang
colors.unshift("pink", "pupple");
console.log("Mang colors sau khi unshift:", colors);

// - array.shift(): xoa 1 phan tu o dau mang va ham nay co returns de tra ve chinh phan tu do
let firstColor = colors.shift();
console.log("Mang colors sau khi shift:", colors);
console.log("Gia tri tra ve :", firstColor);

// - array.splice(startIndex, deleteCount, value1, value2,...):
animals.splice(2, 0, "tiger", "pig");
console.log("Mang colors sau khi them bang splice:", animals);

let removedAnimals = animals.splice(3, 2);
console.log("Mang colors sau khi xoa bang splice:", animals);
console.log("Gia tri tra ve:", removedAnimals);

// - array.slice(start, end ): copy ra mot mang moi tu vi tri start den end( khong bao phan tu o vi tri end)
let newColors = colors.slice(1, 3);
console.log("Mang colors moi bang slice:", newColors);

// - array.concat(array1, array2,...): Tao ra mot mang moi bao gom tat ca cac phan tu cua mang ban dau, va cac mang duoc truyen vao

let concatArray = colors.concat(newColors);
console.log("Mang colors moi bang concat:", concatArray);

// -array.indexOf(value): Tra ve chi muc phan tu dau tien neu tim thay, nguoc lai se tra lai -1
// -array.lastindexOf(value): Giong indexOf nhung tim kiem tu cuoi mang

let indexCat = animals.indexOf("cat");
if (indexCat !== -1) {
  console.log("Co gia tri 'cat' trong mang animals");
} else {
  console.log("Khong co gia tri 'cat' trong mang animals");
}

// - array.includes(value): tra ve true neu thay, nguoc lai tra ve false

let hasDuck = animals.includes("duck");
if (hasDuck) {
  console.log("Co gia tri 'duck' trong mang animals");
} else {
  console.log("Khong co gia tri 'duck' trong mang animals");
}

// join: chuyen mang thanh chuoi kem ki tu phan cach
let date = [10, 5, 2023];
let str = date.join("/");
console.log("joine:", date);

//split: chuyen chuoi thanh mang dua vao ki tu phan cach
let arr = str.split("/");
console.log("slipt:", arr);

// - array.reverse(): Dao nguoc thu tu cua phan tu trong mang
console.log("mang colors truoc khi reverse:", colors);
colors.reverse();
console.log("mang colors sau khi reverse:", colors);

// Dao nguoc chuoi bang split, join , reverse
let myStr = "Hello Cybersoft";
let strArr = myStr.split("");
console.log(strArr);
strArr.reverse();
let reverseStr = strArr.join("");
console.log("CHuoi dao nguoc:", reverseStr);

// array.sort(): Sap xep mang
console.log("mang animals truoc khi soft:", animals);
animals.sort();
console.log("mang animals sau khi soft:", animals);

// Mac dinh ham soft se chuyen cac gia tri trong mang ve chuoi de so sanh
// De sap xep so: ta se viet 1 ham so sanh, ham nay se nhan vao 2 tham so a,b.
// De sap xep tang dan ta return a - b, giam gian return b - a
// Sau do dua ham nay vao lam doi so cua ham sort

let nums = [3, 5, 1, 9, 15, 8, 21, 7];
function compare(a, b) {
  return a - b;
}
nums.sort(compare);
console.log("mang nums sau khi soft:", nums);

//Cach phuong thuc nang cao cua mang

// B1: Đặt biến
let num = [1, 2, 3, 4, 5];

let numsX2 = [];
for (let i = 0; i < num.length; i++) {
  let value = num[i] * 2;
  numsX2.push(value);
}
console.log("numsX2:", numsX2);

// - map
let numsX3 = num.map(callBackNumX3);
function callBackNumX3(value, index) {
  return value * 3;
}
console.log("numX3:", numsX3);
let numsX4 = num.map((value, index) => {
  return value * 4;
});
console.log("numsX4:", numsX4);

// - filter

let numsOdd = num.filter((value, index) => {
  return value % 2 !== 0;
});

console.log("numsOdd:", numsOdd);

// - reduce
// [1, 2, 3, 4, 5]
let total = num.reduce((result, value) => {
  return (result += value);
}, 0);

console.log("total:", total);

// lan 1: value = 1, result = 0 => result + value = 1
// lan 2: value = 2, result = 1 => result + value = 3
// lan 3: value = 3, result = 3 => result + value = 6
// lan 4: value = 4, result = 6 => result + value = 10
// lan 5: value = 5, result = 10 => result + value = 15

let products = [
  { id: 1, name: "Iphone 13 ProMax", brand: "Apple", price: 32_000_000 },
  { id: 2, name: "SamSung S23 Ultra", brand: "SamSung", price: 28_000_000 },
  { id: 3, name: "Oppo X5", brand: "Oppo", price: 18_000_000 },
  { id: 4, name: "Xiaomi Mi 13", brand: "Xiaomi", price: 15_000_000 },
  { id: 5, name: "Phone 13", brand: "Apple", price: 27_000_000 },
  { id: 6, name: "SamSung note", brand: "Samsung", price: 20_000_000 },
];

//YC1: Trả ra yêu cầu 1 mảng chỉ bao gồm tên của các sản phẩm
//["Iphone 13 Promax", "Samsung s23 ultra", "Oppo X5", "Xiaomi mi 13", "Iphone 13", "Samsung"]

let nameOfProduct = products.map((value) => {
  return value.name;
});

console.log("nameOfProduct:", nameOfProduct);

//YC 2: Trả ra một mảng mới chỉ bao gồm các sản phẩm của Apple

let appleBrand = products.filter((value) => value.brand === "Apple");
console.log("AppleBrand:", appleBrand);

//YC 3: Hiển thị ra giao diện của mảng theo cấu trúc sau
/**
 * <ul id="product-list">
 * <li>Iphone 13 Promax - 32_000_000</li>
 * <li>Samsung S23 ultra - 28_000_000</li>
 * <li>Oppo X5 - 18_000_000</li>
 * ...
 * </ul>
 *
 */

// let html = `
// <li>Iphone 13 Promax - 32_000_000</li>
//  <li>Samsung S23 ultra - 28_000_000</li>
//  <li>Oppo X5 - 18_000_000</li>
//  `;

let html = products.reduce((result, value) => {
  return result + `<li>${value.name} - ${value.price} </li>`;
}, "");

console.log("html: ", html);
document.getElementById("product-list").innerHTML = html;

// - find, findIndex(trả ra vị trí đứng)
//Tim sản phẩm có id= 3
let product = products.find((value) => {
  return value.id === 3;
});

console.log("product: ", product);

//Tim sản phẩm có id= 5
let productIndex = products.findIndex((value) => {
  return value.id === 5;
});

console.log("Index product: ", productIndex);

// - forEach
products.forEach((value, index) => {
  console.log(`Product ${value.id}, ${value.name}`);
});
