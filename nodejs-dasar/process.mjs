import process from "process";


process.on("exit", (exitCode) => {
  console.log(`node js exit code ${exitCode}`)

})

console.log(process.version);
console.log(process.argv);
console.log(process.report);
console.log(process.env);

process.exit(1)