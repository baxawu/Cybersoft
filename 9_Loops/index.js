// 1. Vong lap While

// B1: Khoi tao bien kieu dieu kien
let i = 1;
// B2: Khai bao while va bieu thuc dieu kien
while (i <= 5) {
  // B3: Thuc hien cac doan ma
  console.log("Xin chao, CyberSoft");
  // B4: thay doi gia tri cua bien dieu kien
  i++;
}

//Bai tap 1: Nhap vao n duong, chan. Chia n cho 2 den khi n <= 1

document.getElementById("btn-1").onclick = () => {
  let n = +document.getElementById("input-1").value;
  let outputEl = document.getElementById("output-1");
  let count = 1;

  outputEl.innerHTML = "";

  while (n > 1) {
    n = Math.floor(n / 2);

    outputEl.innerHTML += `<p>count: ${count} - num: ${n} </p>`;

    count++;
  }

  outputEl.classList.remove("d-none");
};

//2. Vong lap do ... while
// Diem kahc biet so voi vong lap while la do ... while se thuc hien cac doan ma 1 lan truoc khi kiem tra dieu kien

let j = 1;
do {
  console.log("xin chao, BC52");
  j++;
} while (j <= 5);

//Bai tap 2: Nhap vao n duong, chan. Chia n cho 2 den khi n <= 1

document.getElementById("btn-2").onclick = () => {
  let m = +document.getElementById("input-2").value;
  let o = 1;
  let total = 0;

  let outputEl2 = document.getElementById("output-2");

  do {
    total += o;
    o++;
  } while (o <= m);

  outputEl2.innerHTML = total;
  outputEl2.classList.remove("d-none");
};

//3. Vong lap for

for (let i = 1; i <= 5; i++) {
  console.log("Xin chao, JavaScript");
}

//Bai tap 3: In tat ca so nguyen duong le nho hon 100

function ex3() {
  let output = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      output += i + ",";
    }
  }

  // output = "1,3,5,7,9,....,99"
  console.log("ex3:' ", output);
}

ex3();

//4.Vong lap long nhau
let count = 0;

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    count++;
  }
}

console.log("so lan chay:", count);

//i=1, j 1->5
//i=2, j 1->5

//Bai tap 4: In ra hinh vuong dau * co kich thuoc 5x5
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function ex4() {
  let output = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      output += "* ";
    }
    output += "\n";
  }

  console.log(output);
}

ex4();

let message = "Hello Cybersoft";
//Cach truy cap vao mot ki tu bat ki trong chuoi dua vao chi muc (index)
console.log(message[0]); //H
console.log(message[1]); //e
//Lay ra do dai cua chuoi
console.log(message.length); //15
// Dung vong lap de duyet qua tung ki tu trong chuoi
for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

//Lenh break
//Bai tap 5: Cong gia tri tu 1 + 2 + 3 + ... cho den khi gia tri vuot qua 100 thi dung lai

function ex5() {
  let i = 1;
  let sum = 0;

  while (true) {
    sum += i;
    if (sum > 100) {
      break;
    }
    i++;
  }
  console.log(sum, i);
}

ex5();

//Lenh continue
function ex6() {
  let total = 0;
  for (let i = 0; i <= 10; i++) {
    if (i === 4) {
      continue;
    }

    total += i;
  }

  console.log(total);
}

ex6();

//lenh return
function ex7() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      return i;
    }
    console.log(i);
  }
  console.log("run run run");
}
ex7();

//Bai tap 8: VIet ham kiem tra1 so co phai la so nguyen to hay khong
//SNT: so tu nhien lon hon 1 chi chia het cho 1 va chinh no: 2, 3, 5, 7, 11,13,..

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("isPrime(15)", isPrime(5)); //true
console.log("isPrime(30)", isPrime(10)); //false
console.log("isPrime(10)", isPrime(99726383)); //false
