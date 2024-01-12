// - If

// Vi du: chuyen so am sang duong

let a = -5;
if (a < 0) {
  a = -a;
  console.log("gia tri a:", a);
}

//Vi du: Tinh tien phat cua the tin dung
function tinhTien() {
  let credit = +document.getElementById("input-credit").value;
  let payment = +document.getElementById("input-payment").value;

  let penalty = 0;
  let balance = credit - payment;

  if (balance > 0) {
    penalty = (balance * 1.5) / 100;
  }
  alert(`Tien phat: ${penalty}`);
}

//If- Else
let b = 5;
let c = 9;

//vi du tim so lon hon trong 2 so
if (b > c) {
  console.log("b lon nhat");
} else {
  console.log("c lon nhat");
}

//Bai tap: viet chuong trinh tinh toan phai tra theo tuan cho nhan vien dua vao so gio lam
function tinhTien() {
  let hour = +document.getElementById("input-hour").value;
  let salary = +document.getElementById("input-salary").value;

  let total = 0;

  if (hour > 40) {
    let rate = 1.5;
    let overHour = hour - 40;
    let baseSalary = 40 * salary;
    let overTimeSalary = overHour * salary * rate;
    total = baseSalary + overTimeSalary;
  } else {
    total = hour * salary;
  }
  alert(`Tien OT: ${total}`);
}

//Else If
let d = 9;
let f = 9;

//vi du tim so lon hon trong 2 so
if (d > f) {
  console.log("d lon nhat");
} else if (f > d) {
  console.log("f lon hon d");
} else {
  console.log("d bang f");
}

//BT3
function tinhDonGia() {
  let quanity = +document.getElementById("input-quanity").value;
  let price = +document.getElementById("input-price").value;

  let money = 0;

  if (quanity < 50) {
    money = quanity * price;
  } else if (quanity <= 100) {
    money = 49 * price + (quanity - 49) * price * 0.92;
  } else {
    money = 49 * price + 51 * price * 0.92 + (quanity - 100) * price * 0.88;
  }

  alert(`Tien hang: ${money}`);
}

// Toan tu bac 3
// let result = (bieu thuc dieu kien) ? valueA : valueB

let age = 18;
// Cach 1
// let allowed;
// if (age >= 18) {
//   allowed = true;
// } else {
//   allowed = false;
// }

//chi su dung thay the if-else khi muon gan gia tri cho 1 bien dua vao dieu kien
let allowed = age >= 18 ? true : false;

// Switch case   (Chi ap dung cho so sanh bang)
/**
  switch(x) { 
    case valueA: {
  ...
  break;
}
case valueB: { if(x===valueB)
...
break;
}
...
}
 */

function tinhThang() {
  let month = +document.getElementById("input-month").value;

  // if (
  //   month === 1 ||
  //   month === 3 ||
  //   month === 5 ||
  //   month === 7 ||
  //   month === 8 ||
  //   month === 10 ||
  //   month === 12
  // ) {
  //   alert("thang co 31 ngay");
  // }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("thanng co 31 ngay");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("thang co 30 ngay");
      break;
    case 2:
      alert("thang co 28 ngay");
      break;
    default:
      alert("thang khong hop le");
      break;
  }
}
