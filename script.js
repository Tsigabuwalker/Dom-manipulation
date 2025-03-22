const test = document.body
test.append("Hello world!")
//append is used for also to display string but not appendChild
const div = document.createElement("div")
test.append(div)
div.innerText = "Hello again!"
div.textContent = "Hello world 2"
