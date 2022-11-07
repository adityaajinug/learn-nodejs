import fs from "fs/promises"

const buffer = fs.readFile("file-system.mjs")
console.log(buffer.toString())

fs.writeFile("temp.txt", "Hello Node js")