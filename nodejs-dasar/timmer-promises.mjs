import timmers from "timers/promises"

// console.log(new Data());
// const name = await timmers.setTimeout(5000, "Adit")
// console.log(new Data());
// console.log(name);
console.log(new Date());
for await (const startTime of timmers.setInterval(1000, "ignore")) {
  console.log(`start Time at ${new Date()}`);
}