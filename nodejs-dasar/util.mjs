import util from "util"


const name = "adit"
console.log(`hello ${name}`);

console.log(util.format("Hello %s", name));


const person = {
  firstName: "adit",
  lastName: "nug"
}
console.log(`Person : ${JSON.stringify(person)}`);
console.log(util.format("Person : %j", person));
