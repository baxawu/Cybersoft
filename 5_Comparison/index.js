//Toan tu so sanh
//-So sanh bang: ==,===
//-so sanh lon, hon hon hoac bang: >, >=
//-so sanh be, be hon hoac bang: <, =<
//-so sanh khac: !=, !==
//=> Ket qua tra ve cua phep toan so sanh la boolean (true/False)

//so sanh number
console.log("5 == 5", 5 == 5); //true
console.log("3 == 8", 3 == 8); //false
console.log("'7'== 7", "7" == 7); //true
console.log("'9'=== 9", "9" == 9); //false

console.log("3 != 3", 3 != 3); //false
console.log("'3'!= 3", "3" != 3); //false
console.log("'3'!== 3", "3" !== 3); //true

console.log("5 > 7", 5 > 7); //false
console.log("'2' > 1", "2" > 1); //true

//so sanh string (chuoi)
console.log("'Anine'>'Alice'", "Annie" > "Alice"); //True
console.log("'Apple'>'Banana'", "Apple" > "Banana"); //False
console.log("'15'>'2'", "15" > "2"); //False
//=> dua theo bang ma ACII cho chu cai, chu cai hoac so dung sau thi se lon hon, neu so sanh bang cap so voi so don thi se lay so dau so sanh voi so don

// Ep kieu chuoi ve so
let a = "100";
let b = "100N";

let b = +a;
console.log("chuyen chuoi a thnh so - cach 1:", +a);
console.log("chuyen chuoi a thnh so - cach 2:", parseInt(a));

console.log("Co tinh ep 1 chuoi khong hop ly ve so", +b);

//Luu y: moi gia tri lay tu html deu la chuoi ta, neu muon tinh toan cac gia tri la so ta can ep kieu gia tri ve so

let num1 = document.getElementById("input-1").value; //"100"
let num2 = document.getElementById("input-2").value; //"300"

let total = num1 + num2; //"100300"
