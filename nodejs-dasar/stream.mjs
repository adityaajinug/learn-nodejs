import fs from "fs"

const writer = fs.createWriteStream("target.log")

writer.write("Adit")
writer.write("Test")
writer.end()


const reader = fs.createReadStream("target.log")
reader.addListener("data", (data) => {
  console.log(data.toString());
})