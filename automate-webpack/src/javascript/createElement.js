import "../style/index.css";

const dom = document.createElement("h2");
dom.innerText = "This Dom Element";
dom.className = "title";
document.getElementById("app").appendChild(dom);
