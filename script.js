//const test = document.body
//test.append("Hello world!")
//append is used for also to display string but not appendChild
//const div = document.createElement("div")
//test.append(div)
//div.innerText = "Hello again!"
//div.textContent = "Hello world 2"
//const div = document.querySelector("div")
//console.log(div.innerText)
//console.log(div.textContent)
const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
//spanBye.remove();
//div.appendChild(spanBye);
//div.removeChild(spanHi);
//console.log(spanHi.title)
//console.log(spanBye.title)
console.log(spanHi.getAttribute);
console.log(spanBye.getAttribute);
spanHi.setAttribute("title", "Hello there");
console.log(spanHi.getAttribute);
console.log(spanHi.setAttribute("id", "nasan"));
console.log(spanHi.getAttribute("id"));







