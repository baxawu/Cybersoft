// Ctrl + Shift + B để chuyển qua js
console.log("Hello TypeScript");

//Types

// - Number, String, Boolean
let a: number;
a = 10;
// a="10" sai vì đã set number mà gán dạng chuỗi

let b = 10;
b = 20;
//b="30" phải gán kiểu number

let c: string;
c = "Hi!";

let d = "BC 52";

let e: boolean;
e = true;

//Array
let arr1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
// arr1=[1,2,3,4,5,6,7,8] có thể viết theo cách này
let arr2: String[] = ["A", "B", "C"];

//Tuple (như sử dụng useState có 2 giá trị)
let tuple1: [string, number] = ["Score", 5];

//Enum (dạng như hằng số)

enum Language {
  "Tiếng Việt" = "vn",
  "English-US" = "en-us",
  "English-UK" = "en-us",
  "Chinese" = "cn",
}

console.log(Language["English-US"]);
console.log(Language["English-UK"]);
console.log(Language["Chinese"]);
//Chỉ sử dụng với dạng tiền tệ hoặc là mã màu
// Currency.America = "acxcz" => sai

//Object
//Định nghĩa
// type Student = {
//   name: string;
//   email: string;
//   className: string;
//   age: number;
// };

//Sử dụng interface để tạo

interface Student {
  name: string;
  email: string;
  className: string;
  age?: number;
}

//Gán Student sau student: phải điền đúng không điền thiếu hoắc dư sẽ bị lỗi phải balance với nhau
const student: Student = {
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

let data: Student | null = null;
data = {
  name: "bob1",
  email: "bob1@gmail.com",
  className: "bc34",
};

//2. Pick (Khi sử dụng pick thì kh sử dụng interface được => phải dùng type)
//

type CreateStudent = Pick<Student, "name" | "email">;

//Omit (ngược lại của pick, lấy type ban đầu, lược bỏ bớt những thuộc tính mà kh muốn lấy)

type UpdateStudent = Omit<Student, "age" | "className">;

//Partial (biến các thuộc tính của type thành optional)

type OptionalStudent = Partial<Student>;
const student1: OptionalStudent = {
  name: "Tí",
};

//Record  ( ám chỉ một đối tượng dữ liệu đơn giản chứa các trường (fields) với các giá trị tương ứng)
let obj: Record<string, string | number>;
obj = {
  a: 1,
  b: "A",
  // c: true,
};

//Generic
function getData<T>(url: string): T {
  return {} as T;
}

const data1 = getData<Student[]>("QuanLyPhim/LayDanhSachPhim");
const data2 = getData<Student>("QuanLyPhim/LayDanhSachPhim");

// const resp1 =axios.get<Movie[]>('QuanLyPhim/LayDanhSachPhim')

//vd Generic (giúp gợi ý các thuộc tính của biến khi đặt trong html element)
const btnEl = <HTMLButtonElement>document.getElementById("btn-submit");
const inpEl = <HTMLInputElement>document.getElementById("inp-email");

//Class() (có 3 loại private, public, protected)

class Employee {
  protected _firstName: string;
  protected _lastName: string;
  public email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.email = email;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
const emp1 = new Employee("Dan", "Dguyen", "dan@gamil.com");
console.log(emp1.fullName);
console.log(emp1.email);

class Manager extends Employee {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email);
  }
}

// Interface ()

interface ICar {
  brand: String;
  color: String;
  engine: String;
  releaseDate: String;
}

class Car implements ICar {
  constructor(
    public brand: string,
    public color: String,
    public engine: String,
    public releaseDate: String
  ) {}
}

const newCar = new Car("Toyota", "Silver", "1000cc", "25/10/2020");  

