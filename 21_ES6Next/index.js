//1.Optional chaining ( Toán tử chấm hỏi ?) dùng để tránh bị lỗi trong khi code
const h1El = document.getElementById("title");

// const title = h1El.innerHTML; //Lỗi vì h1El là null
//Cách 1: Dùng if
// let title = "";
// if (h1El) {
//   title = h1El.innerHTML;
// }

//Cách 2: Dùng toán tử &&
// let title = h1El && h1El.innerHTML;
// console.log(title);

//Cách 3: Dùng toán tử ?
let title = h1El?.innerHTML;
console.log(title);

const user = {
  name: "Alice",
  pet: {
    cat: {
      name: "dog",
    },
  },
};

//Nếu sử dụng cách 2 sẽ như sau:
// user.pets && user.pets.odg && user.pets.dog.name;
console.log("Dog name:", user.pet?.dog?.name);
console.log("Cat name:", user.pet?.dog?.name);
console.log("Languages name:", user.languages?.[0]);

// Kiểm tra phương thức có tồn tại hay không trước khi gọi
user.methodNotExisting?.();

//2. Nullish coalescing (toán tử 2 dấu ??) Dùng để thay thế ||
// let score= 0 || "NA";
let score = 0 ?? "NA";
console.log("score:", score);

let str = null ?? "Emty String";
console.log("str:", str);

//3. Try Catch (sử dụng lỗi không lường trước được hoặc cố tình ném ra lỗi)

//VD1: Bắt lỗi cú pháp
try {
  noExistingFunction();
  console.log("Try Catch");
} catch (error) {
  console.log("error name:", error.name);
  console.log("error message:", error.message);
  console.log("error stack:", error.stack);
}

//VD2: Xử lí ném ra lỗi
try {
  const user = JSON.parse(localStorage.getItem("user"));
  //Kiểm tra nếu kh có thông tin user dừng xử lý thông tin user và ném ra lỗi
  if (!user) {
    throw new Error("User not found"); //Dùng new Error hay Error đều được
  }
  console.log("User: ", user);
} catch (error) {
  console.log("error name:", error.name);
  console.log("error message:", error.message);
  console.log("error stack:", error.stack);
}

console.log("Running");

//4. Async await (Dùng để sử dụng bất đồng bộ)
function apiGetProducts(searchValue) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "GET",
    params: {
      name: searchValue || undefined,
    },
  });
}

function apiCreateProduct(product) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "POST",
    data: product,
  });
}

function createProduct() {
  let product = {
    name: "Samsung A32",
    price: 4999999,
    image:
      "https://stuff.co.za/wp-content/uploads/2021/04/20210421_112826-scaled.jpg",
    type: "phone",
  };

  apiCreateProduct(product)
    .then((response) => {
      return apiGetProducts();
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//Cách tạo await => để sử dụng await thì phải có async ở hàm
//=> Cơ bản nó cũng là promise 


async function createProductAsync() {
  let product = {
    name: "Samsung A32",
    price: 4999999,
    image:
      "https://stuff.co.za/wp-content/uploads/2021/04/20210421_112826-scaled.jpg",
    type: "phone",
  };

  try {
    await apiCreateProduct(product);
    const response = await apiGetProducts();
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
createProductAsync();
