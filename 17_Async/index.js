// Bất đồng bộ Event loupe ( sử dụng trong tương tác phía server)
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");

//Promise
//Promise có 3 trạng thái:
//_PENDING: chờ xử lý tác vụ bất đồng bộ
//_FULLFILLED : Xử lý thành công và trả về kết quả
//_REJECTED : Xử lý thất bại và trả về lỗi

//Giả lập gọi API dữ liệu của user
function main() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data = { id: 1, name: "Khai Truong", scrore: [8, 7, 8] };
      //   resolve(data);
      reject("Không tìm thấy thông tin user");
    }, 5000);
  });
}

let promise = main();
console.log("promise: ", promise);

promise.then((data) => {
  console.log("fullfield ", promise);
  console.log("data: ", data);
});

promise.catch((error) => {
  console.log("promise: ", promise);
  console.log("error: ", error);
});

//API
// Các thành phần của Web API
//-url: www.cybersoft.edu.vn/user/1234
//-method:
// +GET: yêu cầu trả về tài nguyên (resource) nào đó
// +POST: yêu cầu tạo mới một tài nguyên nào đó
// +PUT: cập nhật một tài nguyên nào đó
// +DELETE: xóa 1 tài nguyên
// -status code:
// +200: thanh cong
// +404: Not found
// +400: Bad request
// +500: Internal server error

// Thực hành API
function getUsers() {
  let promise = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getUsers();

function getToDos() {
  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

getToDos();

//Cách tái sử dụng API

function getPosts() {
  return axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  });
}

getPosts()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
