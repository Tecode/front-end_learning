const buttonDom = document.createElement("button");
buttonDom.innerText = "加载异步模块";
document.getElementById("app").appendChild(buttonDom);

buttonDom.addEventListener(
  "click",
  () => {
    import("./element").then(({ default: element }) => {
      console.log(element, "----");
      document.getElementById("app").appendChild(element);
    });
  },
  false
);
