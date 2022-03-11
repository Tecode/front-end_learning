import oImgSrc from "../images/image001.jpeg";
import "../style/index.less";

function packImg() {
  // 01 创建一个容器元素
  const oEle = document.createElement("div");

  // 02 创建 img 标签，设置 src 属性
  const oImg = document.createElement("img");
  oImg.width = 600;
  // webpack5需要.default才可以取到图片地址
  // oImg.src = require('../img/01.wb.png').default
  // oImg.src = require('../img/01.wb.png')
  oImg.src = oImgSrc;
  oEle.appendChild(oImg);

  // 03 设置背景图片
  const oBgImg = document.createElement("div");
  // 加载背景图
  oBgImg.className = "background-image";
  oEle.appendChild(oBgImg);

  return oEle;
}

document.body.appendChild(packImg());
