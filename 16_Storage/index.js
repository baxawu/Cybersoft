// Luu tru thong tin cua nguoi dung

//Lay gia tri co san
let msg = localStorage.getItem("msg");

console.log("msg:", msg);

//Them cap nhat
localStorage.setItem("username", "phile");

// Xoa 1 localStorage
localStorage.removeItem("msg");

//Xoa tat ca
localStorage.clear();

//LocalStorage chi luu tru duoc cac kieu du lieu co ban nhu string, number, boolean, null, undefined khong luu duoc du lieu la array/object/function
let user = { id: 1, name: "Alice" };
localStorage.setItem("user", user);

let userStorage = localStorage.getItem("user");
console.log("userStorage:", userStorage);

//Chuyen doi array/object/function thanh JSON
let userJson = JSON.stringify(user);
console.log("userJson", userJson);
console.log("Typeof userJson", typeof userJson);
localStorage.setItem("userJson", userJson);

//Chuyen doi Json thanh array/object/function

let userStorageJson = localStorage.getItem("userJson");
let userObject = JSON.parse(userStorageJson);
console.log("userObject", userObject);




let student = {
  id: 1,
  nam: "Nam",

  calcScore() {
    return 10;
  },
};
//Khi chuyển array/object thanh Json, các phương thức trong object sẽ bị loại bỏ
let studentJson = JSON.stringify(student);
console.log("studentJson", studentJson);

// sessionStorage tương tự như localStorage nhưng dữ liệu sẽ bị mất khi ta tắt trình duyệt đi

