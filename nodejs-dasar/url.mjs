import { URL } from "url"

const test = new URL("https://www.test.com/belajar?kelas=nodejs")


test.host = "www.adit.com"
test.searchParams.append('status', 'berbayar')
console.log(test.toString());
console.log(test.href);
console.log(test.protocol);
console.log(test.host);
console.log(test.pathname);
console.log(test.searchParams);