import "../style/index.less";

const dom = document.createElement("h3");
dom.innerText = "This Dom Element Content";
dom.className = "subtitle";
document.getElementById("app").appendChild(dom);
