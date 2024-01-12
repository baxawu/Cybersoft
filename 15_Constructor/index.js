let studentsA = {
  name: "Alice",
  className: "BC52",
  age: 20,

  calcScore(html, css, js) {
    return (html, css, js) / 3;
  },
};

let studentsB = {
  name: "Bob",
  className: "BC52",
  age: 25,

  calcScore(html, css, js) {
    return (html, css, js) / 3;
  },
};

// Ding nghia Contructor
function Student(name, className, age) {
  // Ngam dinh tao ra doi 1 tuong this={}

  this.name = name;
  this.className = className;
  this.age = age;

  //Ngam dinh return ve doi tuong this o trne
}

Student.prototype.getInfor = function () {
  console.log(`Name: ${this.name}- Class: ${this.className}`);
};

Student.prototype.calcScore = function (html, css, js) {
  return (html, css, js) / 3;
};

//Su dung contructor
let StudentC = new Student("Jack", "BC52", 28);
console.log("studentC", StudentC);
StudentC.getInfor();
console.log("StudentC", StudentC.calcScore(5, 5, 5));

let StudentD = new Student("Thinh", "BC52", 20);
console.log("studentD", StudentD);
StudentD.getInfor();
console.log("StudentD", StudentD.calcScore(5, 5, 5));
