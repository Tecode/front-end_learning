const Vue = require("vue");
const renderer = require("vue-server-renderer").createRenderer();

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
});
