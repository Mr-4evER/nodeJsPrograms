var url = require("url");
var urll = new URL("http://example.org");
urll.pathname = "/a/b/c";
urll.search = "?d=e";
urll.hash = "#fgh";

console.log(urll.href);