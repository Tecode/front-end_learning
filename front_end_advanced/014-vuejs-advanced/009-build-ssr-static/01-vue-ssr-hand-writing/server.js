const Vue = require("vue");
const express = require("express");
const fs = require("fs");


const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.template.html', 'utf-8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = require("vue-server-renderer").createBundleRenderer(serverBundle, {
  template,
  clientManifest,
});

const server = express();

server.use('/dist', express.static('./dist'))

server.get("/", (req, res) => {
  renderer.renderToString(
    {
      title: "服务端渲染",
      meta: `
      <meta name="description" content="服务端渲染">
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
