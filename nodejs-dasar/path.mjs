import path from "path"

const file = "/User/node/test.text"
console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))
console.log(path.parse(file))