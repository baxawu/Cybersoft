class Student {
  constructor(name, email, className) {
    // Khoi tao thuoc tinh
    this.name = name;
    this.email = email;
    this.className = className;
  }
  //Khoi tao phuong thuc
  sayHi() {
    console.log(`hi ${this.name}`);
  }
}

const Student1 = new Student("Bob", "bob@gmail.com", "BC52");
console.log("Student1", Student1);
Student1.sayHi();

// Lap trinh huong doi tuong OOP
// 4 tinh chat cua OOP: tinh dong goi, tinh ke thua, tinh da hinh, tinh truu tuong

//Tinh ke thua
class Employee {
  constructor(id, name, email, dateOfBirth, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
  }
  getinfo() {
    console.log(`ID: ${this.id}- Name: ${this.name}- Email: ${this.email}`);
  }
  calcSalary() {}
}

//Tao class IT ke thua class Employee
class IT extends Employee {
  constructor(id, name, email, dateOfBirth, address, role, languages) {
    //Goi va thuc thi constructor cua class cha
    super(id, name, email, dateOfBirth, address);
    //Ghi de (override) lai consstructor cua class cha
    this.role = role;
    this.languages = languages;
  }

  // Ghi de (override) lai phuong thuc cua class cha
  calcSalary(salary) {
    return salary * 0.9;
  }
}

const it1 = new IT(
  "IT001",
  "John",
  "John@email.com",
  "08/02/2000",
  "123 CMT8",
  "FontEnd",
  "HTML",
  "CSS",
  "JavaScript"
);

console.log("IT001", it1);
it1.getinfo();

class HR extends Employee {
  constructor(id, name, email, dateOfBirth, address, responsibility) {
    //Goi va thuc thi constructor cua class cha
    super(id, name, email, dateOfBirth, address);
    //Ghi de (override) lai consstructor cua class cha
    this.responsibility = responsibility;
  }
  calcSalary(salary) {
    const bonus = 1000;
    return (salary + bonus) * 0.9;
  }
}

const hr1 = new HR(
  "IT001",
  "John",
  "John@email.com",
  "08/02/2000",
  "123 CMT8",
  "Recruiments"
);

console.log("HR001:", hr1);
hr1.getinfo();

//Tinh da hinh
let employee = [it1, hr1];
// Boi vi tat ca object trong mang deu ke thua cung 1 lop cha, nen ta khong can quan tam phan tu hien tai la doi tuong cua lop nao, ta chi can biet no chac chan co phuong thuc calculator

for (let email of employee) {
  const salary = employee.calcSalary(2000);
  console.log(`${employee.name} - ${salary}`);
}
