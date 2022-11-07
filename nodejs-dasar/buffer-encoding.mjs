const buffer = Buffer.from("testing node adit", "utf8")

console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));

const bufferBase64 = Buffer.from("dGVzdGluZyBub2RlIGFkaXQ=", "base64")
console.log(bufferBase64.toString("utf8"));