const Vue = require("vue");
const express = require("express");
const renderer = require("vue-server-renderer").createRenderer();

const server = express();

server.get("/", (req, res) => {
  const app = new Vue({
    template: `
      <div id="app">
        <h1>{{ message }}</h1>
      </div>
    `,
    data: {
      message: "服务端渲染模版",
    },
  });

  renderer.renderToString(app, (err, html) => {
    console.log(html, "---");
    res.setHeader()
    res.send(html);
  });
});

server.listen(3000, () => console.log("Running...."));
