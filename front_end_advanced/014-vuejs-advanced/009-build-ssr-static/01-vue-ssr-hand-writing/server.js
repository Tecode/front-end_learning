const Vue = require("vue");
const express = require("express");
const fs = require("fs");
const renderer = require("vue-server-renderer").createRenderer({
  template: fs.readFileSync("./index.template.html", "utf-8"),
});

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

  renderer.renderToString(
    app,
    {
      title: "拉勾教育",
      meta: `
      <meta name="description" content="拉勾教育">
    `,
      url: req.url,
    },
    (err, html) => {
      console.log(html, "---");
      res.setHeader("Content-Type", "text/html; charset=utf8");
      res.send(html);
    }
  );
});

server.listen(3000, () => console.log("Running...."));
