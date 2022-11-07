import https from "https"
const endpoint = "https://hookb.in/pz9o6rZjZKsR2qoRwDRy"
const req = https.request(endpoint, {

  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept" : "application/json"
  }

}, (response) => {
  response.addListener("data", (data) => {
    console.log(`Receive ${data.toString()}`);
  })
})
const body = JSON.stringify({
  firstName: "Adit",
  lastName: "Nugroho"
})
req.write(body)
req.end()