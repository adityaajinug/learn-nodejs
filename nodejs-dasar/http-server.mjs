import http from "http"

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  // console.log(req.headers);
  // console.log(req.statusCode);

 
  if (req.method === "POST") {
    req.addListener("data", (data) => {
      res.setHeader("Content-Type", "application/json")
      res.write(data)
      res.end()
    })
  } else {
    if (req.url === "/test") {
      res.write("testing node")
      
    } else {
      
      res.write("hello http server")
    }
  }

  res.end()
})

server.listen(3000)