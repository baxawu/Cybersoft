"use strict";
// Ctrl + Shift + B để chuyển qua js
console.log("Hello TypeScript");
//Types
// - Number, String, Boolean
let a;
a = 10;
// a="10" sai vì đã set number mà gán dạng chuỗi
let b = 10;
b = 20;
//b="30" phải gán kiểu number
let c;
c = "Hi!";
let d = "BC 52";
let e;
e = true;
//Array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr1=[1,2,3,4,5,6,7,8] có thể viết theo cách này
let arr2 = ["A", "B", "C"];
//Tuple (như sử dụng useState có 2 giá trị)
let tuple1 = ["Score", 5];
//Enum (dạng như hằng số)
var Language;
(function (Language) {
    Language["Ti\u1EBFng Vi\u1EC7t"] = "vn";
    Language["English-US"] = "en-us";
    Language["English-UK"] = "en-us";
    Language["Chinese"] = "cn";
})(Language || (Language = {}));
console.log(Language["English-US"]);
console.log(Language["English-UK"]);
console.log(Language["Chinese"]);
//Gán Student sau student: phải điền đúng không điền thiếu hoắc dư sẽ bị lỗi phải balance với nhau
const student = {
    name: "bob",
    email: "bob@gmail.com",
    className: "BC52",
    age: 20,
};
// type Student = {
//     name: string;
//     email: string;
//     className: string;
//     age?: number;
//   };
//   //Gán Student sau student: phải điền đúng không điền thiếu hoắc dư sẽ bị lỗi phải balance với nhau
//Trường hợp đặc biệt khi mà không có age ta thêm age? trên định nghĩa vẫn được
//   const student : Student = {
//     name: "bob",
//     email: "bob@gmail.com",
//     className: "BC52",
//   };
//Type nâng cao
//1. Cú pháp cùa là kiểu dữ liệu a vừa kiểu dữ liệu b (Union Type)
let data = null;
data = {
    name: "bob1",
    email: "bob1@gmail.com",
    className: "bc34",
};
const student1 = {
    name: "Tí",
};
//Record  ( ám chỉ một đối tượng dữ liệu đơn giản chứa các trường (fields) với các giá trị tương ứng)
let obj;
obj = {
    a: 1,
    b: "A",
    // c: true,
};
//Generic
function getData(url) {
    return {};
}
const data1 = getData("QuanLyPhim/LayDanhSachPhim");
const data2 = getData("QuanLyPhim/LayDanhSachPhim");
// const resp1 =axios.get<Movie[]>('QuanLyPhim/LayDanhSachPhim')
//vd Generic (giúp gợi ý các thuộc tính của biến khi đặt trong html element)
const btnEl = document.getElementById("btn-submit");
const inpEl = document.getElementById("inp-email");
//Class() (có 3 loại private, public, protected)
class Employee {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.email = email;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
const emp1 = new Employee("Dan", "Dguyen", "dan@gamil.com");
console.log(emp1.fullName);
console.log(emp1.email);
class Manager extends Employee {
    constructor(firstName, lastName, email) {
        super(firstName, lastName, email);
    }
}
class Car {
    constructor(brand, color, engine, releaseDate) {
        this.brand = brand;
        this.color = color;
        this.engine = engine;
        this.releaseDate = releaseDate;
    }
}
const newCar = new Car("Toyota", "Silver", "1000cc", "25/10/2020");
