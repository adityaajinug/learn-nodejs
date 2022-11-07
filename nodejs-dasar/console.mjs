import { Console } from "console"
import fs from "fs"

const logFile = fs.createWriteStream("application.log")

const log = new Console({
  stdout: logFile,
  stdout:logFile
})
log.info("hello world")
log.error("error")

const person = {
  firstName: "Adit",
  lastName: "Nugr"
}
log.table(person)
