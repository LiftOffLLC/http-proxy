const proxy = require("express-http-proxy");
const app = require("express")();
const PORT = process.env.PORT || 3000;
const TARGET = process.env.PROXY_TARGET;

app.use(
  "/",
  proxy(TARGET, {
    https: true
  })
);
app.listen(PORT, () => {
  console.log("Proxy on: ", PORT);
});
