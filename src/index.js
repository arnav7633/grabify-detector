const { get } = require("curl");
const url = "https://websafe.online/PUF6EV";
if (!url.startsWith("http")) return console.log("Invalid URL, missing http");
get(url, {}, function (err, resp, body) {
  if (err) {
    console.log(err);
  } else {
    if (resp.req.host == "grabify.link") {
      return console.log("Grabify!");
    } else {
      return console.log("Clean!");
    }
  }
});
