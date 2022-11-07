const samplePromise = () => {
  return Promise.resolve("Adit")
}
const name = await samplePromise()
console.log(name)

// js module has supported async func