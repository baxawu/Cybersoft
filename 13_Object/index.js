let car = {
  // Khai bao thuoc tinh (property) cho object
  // Key: value
  brand: "Toyota",
  color: "Silver",
  weight: 1000,
};

//Truy cap cac thuoc tinh cua object bang toan tu.
console.log("brand:", car.brand);
console.log("color", car.color);
//Truy cap cac thuoc tinh cua object bang object["property"]
console.log("color", car["color"]);
//Truy cap dong cac thuoc tinh cua object banggia tri cua mot bien
let key = "weight";
console.log(car[key]); // => car["weight"]

//Thay doi gia tri cua thuoc tinh
car.color = "red";
console.log("Object car sau khi thay doi thuoc tinh color:", car);

//Them thuoc tinh
car.price = 50000000;
console.log("Object car sau khi them thuoc tinh price:", car);

//Xoa thuoc tinh
delete car.weight;
console.log("Object car sau khi xoa thuoc tinh weight:", car);

//Kiem tra 1 thuoc tinh co ton tai trong object hay khong
//Khi truy cap mot thuoc tinh khong ton tai, tra ra undefined
if (car.powered) {
  console.log("Thuoc tinh power co ton tai");
}
//Hoac su dung tu khoa in de kiem tra
if ("price" in car) {
  console.log("thuoc tinh price co ton tai");
}

console.log(this); //Windown

let user = {
  //Thuoc tinh
  name: "Alice",
  age: 20,
  //Phuong thuc
  sayHi() {
    // console.log(`Hi ${user.name}`);

    //Tu khoa "this": Dai dien cho doi tuong goi toi phuong thuc
    console.log(`Hi ${this.name}`);
  },

  // Khoong nen su dung arrow function de dinh nghia phuong thuc cho Object
  // Ly do: arrow function khong dinh nghia tu khoa this, ma no se su dung this cua ham cha bao boc lay no (neu co)
  //   sayHello: () => {
  //     console.log(`Hello ${this.name}`);
  //   },
};

user.sayHi();
// user.sayHello();
