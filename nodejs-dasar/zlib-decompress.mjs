import fs from "fs"
import zlib from "zlib"

const source = fs.readFileSync("zlib-compress.mjs")
const result = zlib.unzipSync(source)

console.log(result.toString());
