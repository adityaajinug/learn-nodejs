import process from "process";
import readLine from "readline";

const input = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question("whats your name?", (name) => {
  console.log(`Hello ${name}`);
  input.close()

})