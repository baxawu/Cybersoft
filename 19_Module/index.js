import { Student } from "./student.js";
// import { sayHi, sayHello } from "./greeting.js";
import * as greeting from "./greeting.js";
import { sum as mathSum } from "./math.js";
const student1 = new Student("Alice", "alice@gmail.com", "BC52");
console.log(student1);

//sayHi(student1.name);
//sayHello(student1.name);
greeting.sayHi(student1.name);
greeting.sayHello(student1.name);

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 6));
console.log(mathSum(3, 7, 11, 12));

document.getElementById("btn-click").onclick = () => {
  greeting.sayHi("BC52");
};

// Tao dong 1 button bang JS
document.body.innerHTML += `<button id="btn-hello">Hello</button>`;
document.getElementById("btn-hello").onclick = () => {
  greeting.sayHello("Hello-BC52");
};

document.getElementById("btn-add").onclick = () => {
  const ramdom = Math.floor(Math.random() * 100);
  const product = {
    id: ramdom,
    name: `product-${ramdom}`,
  };

  document.getElementById("product-list").innerHTML += `
<tr>
<td>${product.id}</td>
<td>${product.name}</td>
<td> <button data-id="${product.id}" data-type="delete">xoa</button>
<td> <button data-id="${product.id}" data-type="update">chinh sua</button>
</td>
</tr>`;
};

document.getElementById("product-list").onclick = (event) => {
  const element = event.target;

  const id = element.getAttribute("data-id");
  const type = element.getAttribute("data-type");
  console.log("id: ", id);
  console.log("type: ", type);
};


