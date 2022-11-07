const samplePromise = () => {
  return Promise.resolve("Adit")
}
const run = async () => {
  const name = await samplePromise()
  console.log(name)
}
run()