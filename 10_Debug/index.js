let h1Element = document.getElementById("title");

//Cannot set properties on null setting 'innerHTML'
// h1Element.innerHTML = "hello";

if (h1Element) {
  h1Element.innerHTML = "hello";
}

//data is not defined
//console.log(data)

//Kiem tra gia tri cua cac bien, ham bang console.log()

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));

// Debug bang breakpoint

function greeting(name) {
  let test = `Hello + ${name}`;
  say(test);
}

function say(test) {
  document.write("**" + test + "**");
}

greeting("Bob");
